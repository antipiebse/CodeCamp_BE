import { PointTransaction, POINT_TRANSACTION_STATUS_ENUM } from './entities/pointTransaction.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository,Connection } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PoinTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly connection: Connection
  ){}  

  async create({impUid, amount, currentUser}){
    //typeorm에서 transaction을 사용하기 위해선 query runner를 사용해야함.
    const queryRunner = this.connection.createQueryRunner()
    //db와 query가 연결
    queryRunner.connect()
    
    //transaction 시작
    queryRunner.startTransaction('SERIALIZABLE')
    
   try{ //1. pointTransaction 테이블에 거래기록 1줄 생성
    const pointTransaction = this.pointTransactionRepository.create({
      impUid: impUid,
      amount: amount,
      user:currentUser, 
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT 
    })
    await queryRunner.manager.save(pointTransaction)
   
    //rollback test
    // throw new Error("에러!!")


    //2. 유저의 돈 찾아오기
    // const user =  await this.userRepository.findOne({id: currentUser.id})
    const user = await queryRunner.manager.findOne(
      User,
      {id:currentUser.id},
      {lock:{mode:"pessimistic_write"}}//비관적락
    )
    
    //3. 유저의 돈 업데이트, update와 save의 차이점 save는 결과를 리턴받을 수 있고, 
    // update는 어떻게 변했는지는 안 나온다. 

    const updatedUser =  this.userRepository.create({
      ...user,
      point: user.point+ amount  
    })
    await queryRunner.manager.save(updatedUser) // this.userRepository.save(updatedUser)
    
    // 성공 확정!!(commit)
    await queryRunner.commitTransaction()

    //4. 최종결과 프론트엔드에 돌려주기
    return pointTransaction
    } catch(error){
      //rollback 되돌리기!
      await queryRunner.rollbackTransaction()
    } finally{
      //연결 해제!!(db와의 연결이 지속되면 기존의 데이터가 계속 쌓이기 때문이다. 
      //더 이상 필요하지 않은 요청들을 처리하기 위해 release를 반드시 사용!)
      await queryRunner.release()
    }
  }
}