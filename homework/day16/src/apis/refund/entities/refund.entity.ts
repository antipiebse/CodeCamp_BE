import { Order } from './../../order/entities/order.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'


@Entity()
export class Refund {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  refundIssue: string

  @Column() 
  productPhoto: string

  @Column() 
  isPhoto: boolean

  @ManyToOne(()=> Order)
  order:Order
}
