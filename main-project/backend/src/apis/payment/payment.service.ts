import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}  


  async create({impUid, amount, currentUser}){
    //1. Payment 테이블에 거래기록 1줄 생성

    // console.log(currentUser.sub, currentUser.id, currentUser.email) 
    // console.log(impUid, amount, PAYMENT_STATUS_ENUM.PAYMENT)
    const payment = this.paymentRepository.create({
      impUid: impUid,
      amount: amount,
      user:currentUser.sub,
      status: PAYMENT_STATUS_ENUM.PAYMENT
    })
    await this.paymentRepository.save(payment)
    // console.log(currentUser)
    // console.log("222222")
    // console.log(payment)
    //2. 유저의 돈 찾아오기
    const user =  await this.userRepository.findOne({email: currentUser.email})
  //  console.log("++++++++++++++++++++++++++++++++++++++++++++")
    //3. 유저의 돈 업데이트, update와 save의 차이점 save는 결과를 리턴받을 수 있고, update는 어떻게 변했는지는 안 나온다. 
    await this.userRepository.update({email:user.email},{money: user.money + amount})
    // console.log("++++++++++++++++++++++++++++++++++++++++++++")
    //4. 최종결과 프론트엔드에 돌려주기
    return payment
  }
}