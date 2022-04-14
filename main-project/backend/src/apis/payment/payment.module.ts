import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentResolver } from './payment.resolver';
import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { User } from '../user/entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Payment,
      User,
    ])
  ],
  providers: [
    PaymentResolver,
    PaymentService
  ]
})
export class PaymentModule{}