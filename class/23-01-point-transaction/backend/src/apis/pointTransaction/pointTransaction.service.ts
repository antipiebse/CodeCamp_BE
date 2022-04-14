import { PointTransaction, POINT_TRANSACTION_STATUS_ENUM } from './entities/pointTransaction.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PoinTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}  


  async create({impUid, amount, currentUser}){
    //1. pointTransaction 테이블에 거래기록 1줄 생성
    const pointTransaction = await this.pointTransactionRepository.save({
      impUid: impUid,
      amount: amount,
      user:currentUser, 
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT 
    })
    //2. 유저의 돈 찾아오기
    const user =  await this.userRepository.findOne({id: currentUser.id})

    //3. 유저의 돈 업데이트, update와 save의 차이점 save는 결과를 리턴받을 수 있고, update는 어떻게 변했는지는 안 나온다. 
    await this.userRepository.update({id:user.id},{point: user.point + amount})
    
    //4. 최종결과 프론트엔드에 돌려주기
    return pointTransaction
  }
}