import { User } from '../../user/entities/user.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'


@Entity()
export class Coupon {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  discountPrice: string

  @ManyToOne(()=>User)
  user:User
}
