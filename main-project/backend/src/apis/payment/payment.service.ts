import { IamportService } from './../iamport/iamport.service';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';
import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Connection } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly iamportService:  IamportService,
    private readonly connection: Connection
  ){}  


  async payment({impUid, amount, currentUser}){
    //typeorm에서 transaction을 사용하기 위해 사용!
    const queryRunner = this.connection.createQueryRunner()
    //db와 연결
    queryRunner.connect()
    //transaction시작
    queryRunner.startTransaction('SERIALIZABLE')
    try{
      // 결제 정보 조회 
      const access_token = await this.iamportService.getToken()
      const getPaymentData = await this.iamportService.getPaymentData({impUid, access_token})
      const paymentData = getPaymentData.data.response

      
      // 유저 정보 찾아오기
      const user = await queryRunner.manager.findOne(
        User,
        {id: currentUser.sub},
        {lock:{mode:"pessimistic_write"}}
      )
        console.log("유저 출력", user)
      //결제 테이블에 추가된 정보인지 조회
      const checkAlreadyPayment = await queryRunner.manager.findOne(
        Payment,
        {id: currentUser.sub},
        {lock:{mode:"pessimistic_write"}}
      )
      console.log("결제 정보 확인", checkAlreadyPayment)
      if(checkAlreadyPayment) throw new UnprocessableEntityException('유효하지 않은 결제 요청입니다.')

      if(paymentData.imp_uid !== impUid) throw new UnprocessableEntityException('유효하지 않은 결제 요청입니다. ')

      //Payment 테이블에 저장
      const payment = this.paymentRepository.create({
        impUid: impUid,
        amount: amount,
        user:currentUser.sub,
        status: PAYMENT_STATUS_ENUM.PAYMENT
      })
      console.log("저장된 데이터 확인", payment)
      await queryRunner.manager.save(payment)

      //데이터가 잘 저장되었는지 일부러 확인
      const findPayment = await queryRunner.manager.findOne(
        Payment,
        {impUid: impUid},
        {lock:{mode:"pessimistic_write"}}
      )
      console.log("데이터 저장 확인",findPayment)
      //유저의 돈 업데이트, update와 save의 차이점 save는 결과를 리턴받을 수 있고, update는 어떻게 변했는지는 안 나온다. 
      await queryRunner.manager.update(User, {id:user.id},{money: user.money + amount})
      const checkuser = await queryRunner.manager.findOne(
        User,
        {id: currentUser.sub},
        {lock:{mode:"pessimistic_write"}}
      )
      console.log(checkuser)
      //최종결과 프론트엔드에 돌려주기
      await queryRunner.commitTransaction()
      return payment
      }catch(error){
        //rollback
        console.log(error)
        await queryRunner.rollbackTransaction()
      } finally{
        await queryRunner.release()
    }
  }



  async Refund({impUid, reason, currentUser}){
    const queryRunner = this.connection.createQueryRunner()
    //db와 연결
    queryRunner.connect()
    //transaction시작
    queryRunner.startTransaction('SERIALIZABLE')
    try{  //결제 정보 조회
      const access_token = await this.iamportService.getToken()
      const getPaymentData = await this.iamportService.getPaymentData({impUid, access_token})
     
      //요청한 유저 정보 가져오기
      const user =  await queryRunner.manager.findOne(
        User, 
        {id: currentUser.sub}, 
        {lock:{mode:"pessimistic_write"}}
      )
      if(currentUser.sub !== user.id) {throw new UnprocessableEntityException('유저 정보가 일치하지 않습니다.')}

      //결제 정보 가져오기
      
      const findPayment = await queryRunner.manager.findOne(
        Payment,
        {impUid: impUid},
        {lock:{mode:"pessimistic_write"}}
      )
      console.log("결제정보", findPayment)
      const checksum = getPaymentData.data.response.amount

      //유저 정보 업데이트
      user.money=user.money-checksum
      console.log("저장전",user)
      //유저의 잔돈이 없을 경우 환불 x
      if(user.money<0) {
        return console.log('이미 전액 환불되었습니다.')
      }
      await queryRunner.manager.save(user)
      console.log("저장후",user)
      //환불 요청
      await this.iamportService.cancelPayment({impUid, reason, checksum})
      

      const payment = queryRunner.manager.create(
        Payment,{
        impUid: findPayment.impUid,
        amount: -checksum,
        user:currentUser.sub,
        status: PAYMENT_STATUS_ENUM.CANCEL
      })
      console.log(payment)
      await queryRunner.manager.save(payment)
      await queryRunner.commitTransaction()
      return payment
    }catch(error){
      await queryRunner.rollbackTransaction()
    }finally{
      await queryRunner.release()
    }
  }



    // console.log(impUid)
    // console.log('결제에에ㅔ에에')
    //아임포트에서 결제 정보가 담긴 토큰을 생성
    // const getToken = await axios({
    //   url: "https://api.iamport.kr/users/getToken",
    //   method: "post", // POST method
    //   headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
    //   data: {
    //     imp_key: "8680122769488528", // REST API키
    //     imp_secret: "38ef437a9cdd7ac065378b64e62b329c465f83f4e2a7bed72621aec9118a7f3b0d2fb9ca6d9967cd" // REST API Secret
    //   }
    // });

    // const {access_token}  = getToken.data.response; // 인증 토큰
    // console.log("인증토큰",access_token)
    // console.log(impUid)

    // //아임포트에서 생성된 토큰 조회
    // const getPaymentData = await axios({
    //   url: `https://api.iamport.kr/payments/${impUid}`,
    //   method: "get", // GET method
    //   headers: { "Authorization": access_token }
    // })

    // console.log("Fasdfasdfa")
    // // 아임포트에 결제 요청된 금액 조회
    // // const getPaymentDataAmount = await axios ({
    // //   url: `https://api.iamport.kr/payments/${impUid}/balance`,
    // //   method: "get",
    // //   headers: { "Authorization": access_token }
    // // })

    // //조회한 결제정보
    // const paymentData = getPaymentData.data.response

    // // 결제 정보 중 돈 확인
    // // const paymentAmount = getPaymentDataAmount.data.response
    // console.log("결제 정보:", paymentData)
    // // console.log("돈 조회:", paymentAmount)
}