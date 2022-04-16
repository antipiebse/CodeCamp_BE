import { IamportService } from './../iamport/iamport.service';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';
import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly iamportService:  IamportService
  ){}  


  async payment({impUid, amount, currentUser}){
    // 결제 정보 조회
    const access_token = await this.iamportService.getToken()
    const getPaymentData = await this.iamportService.getPaymentData({impUid, access_token})

    const paymentData = getPaymentData.data.response
    
    //상품 가격에 대한 검증은 erd수정 후 추가.
  

    console.log(paymentData)
    // 유저 정보 찾아오기
    const user =  await this.userRepository.findOne({id: currentUser.sub})



    //결제 테이블에 추가된 정보인지 조회
    const checkAlreadyPayment = await this.paymentRepository.findOne({
      id: currentUser.id
    })
    if(checkAlreadyPayment) new UnprocessableEntityException('유효하지 않은 결제 요청입니다.')

    if(paymentData.imp_uid !== impUid) new UnprocessableEntityException('유효하지 않은 결제 요청입니다. ')
    
    
    // if(paymentAmount.amount !== amount) new UnprocessableEntityException('실제로 결제한 금액이 아닙니다.')



    //Payment 테이블에 저장
    const payment = await this.paymentRepository.save({
      impUid: impUid,
      amount: amount,
      user:currentUser.sub,
      status: PAYMENT_STATUS_ENUM.PAYMENT
    })


    
    //유저의 돈 업데이트, update와 save의 차이점 save는 결과를 리턴받을 수 있고, update는 어떻게 변했는지는 안 나온다. 
    await this.userRepository.update({id:user.id},{money: user.money + amount})

    //최종결과 프론트엔드에 돌려주기
    return payment
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
    // //아임포트에 요청된 금액과 아이디 비교하기