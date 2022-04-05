import { Order } from './../../order/entities/order.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'


@Entity()
export class Exchange {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  exchangeIssue: string

  @ManyToOne(()=>Order)
  order: Order
}
