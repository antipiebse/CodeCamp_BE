import { Order } from './../../order/entities/order.entity';
import { ProductSubCategory } from './../../productsSubCategory/entities/productSubCategory.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { User } from '../../user/entities/user.entity'
import { ProductCart} from '../../productCart/entities/productCart.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column() //{type: 'varchar'}
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  stock: boolean
  // soldedAt: Date

  @Column()
  thumnail_image: string

  @Column()
  is_thumnail_image: boolean

  @JoinColumn()
  @OneToOne(() => ProductCart)
  productCart: ProductCart

  @ManyToOne(() => ProductSubCategory)
  productSubCategory: ProductSubCategory 

  @ManyToOne(() => User)
  user:User

  @JoinTable()
  @ManyToMany(()=> Order, (orders) => orders.products)
  orders: Order[]
}
