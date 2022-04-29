import { TypeOrmModule } from '@nestjs/typeorm';
import { PoinTransactionResolver } from './pointTransaction.resolver';
import { Module } from '@nestjs/common';
import { PoinTransactionService } from './pointTransaction.service';
import { PointTransaction } from './entities/pointTransaction.entity';
import { User } from '../users/entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      PointTransaction,
      User,
    ])
  ],
  providers: [
    PoinTransactionResolver,
    PoinTransactionService
  ]
})
export class PointTransactionModule{}