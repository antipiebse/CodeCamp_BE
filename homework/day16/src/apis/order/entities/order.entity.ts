import { ProductCart } from './../../productCart/entities/productCart.entity';
import { User } from './../../user/entities/user.entity';
import { Product } from 'src/apis/products/entities/product.entity'
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, ManyToOne } from 'typeorm'


@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  delivery: string

  @Column() 
  invoiceNumber: string

  @Column() 
  address: string
  
  @Column() 
  deliveryCompany: string

  @ManyToOne(()=>User)
  user:User

  @ManyToOne(()=> ProductCart)
  productCart:ProductCart

  @ManyToMany(()=> Product, (products)=> products.orders)
  products: Product[]
}
