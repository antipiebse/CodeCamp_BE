import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';
import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import axios from 'axios';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}  


  async payment({impUid, amount, currentUser}){

    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post", // POST method
      headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
      data: {
        imp_key: "8680122769488528", // REST API키
        imp_secret: "38ef437a9cdd7ac065378b64e62b329c465f83f4e2a7bed72621aec9118a7f3b0d2fb9ca6d9967cd" // REST API Secret
      }
    });

    const { access_token } = getToken.data.response; // 인증 토큰

    console.log(access_token)
  
    const getPaymentData = await axios({
      url: `https://api.iamport.kr/payments/${impUid}`,
      method: "get",
      headers: {"Authorization": access_token}
    })
    const PaymentData = getPaymentData.data.response
    console.log(PaymentData)
    if(PaymentData !== impUid) new UnprocessableEntityException('유효하지 않은 id입니다. ')

    //1. Payment 테이블에 거래기록 1줄 생성
    const payment = this.paymentRepository.create({
      impUid: impUid,
      amount: amount,
      user:currentUser.sub,
      status: PAYMENT_STATUS_ENUM.PAYMENT
    })
    await this.paymentRepository.save(payment)

    //2. 유저의 돈 찾아오기
    const user =  await this.userRepository.findOne({email: currentUser.email})
    
    //3. 유저의 돈 업데이트, update와 save의 차이점 save는 결과를 리턴받을 수 있고, update는 어떻게 변했는지는 안 나온다. 
    await this.userRepository.update({email:user.email},{money: user.money + amount})

    //4. 최종결과 프론트엔드에 돌려주기
    return payment
  }

  
}