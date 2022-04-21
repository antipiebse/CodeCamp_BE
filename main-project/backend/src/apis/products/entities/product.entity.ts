import { ProductSubCategory } from '../../productsSubCategory/entities/productSubCategory.entity';
import { DeleteDateColumn, Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable, In } from 'typeorm'
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

  @Column() 
  @Field(()=> String)
  gender: string

  @Column() 
  @Field(()=> String)
  season: string
  
  @Column() 
  @Field(()=> String)
  size: string

  @Column()
  @Field(()=> String)
  brand: string

  @Column() 
  @Field(()=> String)
  origin: string

  @Column()
  @Field(()=> Int)
  stock: number

  @Column()
  @Field(()=> String)
  color: string

  @Column({ default: false })  
  @Field(()=>Boolean)
  isSoldout: boolean

  // @ManyToOne(()=>ProductCart)
  // @Field(()=>ProductCart)
  // productCart: ProductCart

  @ManyToOne(() => ProductSubCategory)
  @Field(()=> ProductSubCategory)
  productSubCategory: ProductSubCategory 
  
  @DeleteDateColumn()
  deletedAt: Date
  
  // @JoinTable()
  // @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  // @Field(() => [ProductTag])
  // productTags: ProductTag[];

  // @JoinColumn()
  // @ManyToMany(()=> Order, (orders)=> orders.product)
  // @Field(()=>[Order])
  // orders: Order[]
}
