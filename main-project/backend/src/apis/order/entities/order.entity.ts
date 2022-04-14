import { ProductCart } from '../../productCart/entities/productCart.entity';
import { User } from '../../user/entities/user.entity';
import { Column, PrimaryGeneratedColumn, Entity,  ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { Field, ObjectType, registerEnumType, Int} from "@nestjs/graphql"
import { Product } from 'src/apis/products/entities/product.entity';

export enum POINT_TRANSACTION_STATUS_ENUM{
  PAYMENT = 'PAYMENT',
  CANCEL  = 'CANCEL',
}
//결제는 수정과 삭제가 없고 등록만 가능해야한다!
registerEnumType(POINT_TRANSACTION_STATUS_ENUM, {
  name:'POINT_TRANSACTION_STATUS_ENUM'
})

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=> String)
  id: string

  @Column() 
  @Field(()=> String)
  delivery: string

  @Column() 
  @Field(()=> String)
  invoiceNumber: string

  @Column() 
  @Field(()=> String)
  address: string
  

  @Column() 
  @Field(()=> String)
  deliveryCompany: string

  @ManyToOne(()=>User)
  @Field(()=>User)
  user:User

  @ManyToOne(()=> ProductCart)
  @Field(()=>ProductCart)
  productCart:ProductCart

  @Column({ type: "enum", enum: POINT_TRANSACTION_STATUS_ENUM}) 
  @Field(()=> POINT_TRANSACTION_STATUS_ENUM)
  status: string 

  // @JoinTable()
  // @ManyToMany(()=> Product, (products)=> products.orders)
  // @Field(()=> [Product])
  // products: Product[]
}
