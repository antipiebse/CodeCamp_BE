import { ProductDetail } from '../../productDetail/entities/productDetail.entity'
// import { Order } from '../../order/entities/order.entity';
import { ProductSubCategory } from '../../productsSubCategory/entities/productSubCategory.entity';
import { DeleteDateColumn, Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable, In } from 'typeorm'
// import { User } from '../../user/entities/user.entity'
import { ProductCart} from '../../productCart/entities/productCart.entity'
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ProductTag } from 'src/apis/productsTag/entities/productTag.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(()=>String)
  id: string

  @Column({nullable:true}) //{type: 'varchar'}
  @Field(()=> String)
  name: string

  @Column({nullable:true})
  @Field(()=> String)
  description: string

  @Column({nullable:true})
  @Field(()=> Int)
  price: number

  @Column({ default: false })  
  @Field(()=>Boolean)
  isSoldout: boolean

  @JoinColumn()
  @OneToOne(() => ProductDetail)
  @Field(()=>ProductDetail)
  productDetail:ProductDetail

  @ManyToOne(()=>ProductCart)
  @Field(()=>ProductCart)
  productCart: ProductCart

  @ManyToOne(() => ProductSubCategory)
  @Field(()=> ProductSubCategory)
  productSubCategory: ProductSubCategory 
  
  @DeleteDateColumn()
  deletedAt: Date
  
  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag])
  productTags: ProductTag[];
}
