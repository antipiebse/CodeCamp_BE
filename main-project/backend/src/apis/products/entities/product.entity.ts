import { ProductSubCategory } from '../../productsSubCategory/entities/productSubCategory.entity';
import { UpdateDateColumn, DeleteDateColumn, Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable, In } from 'typeorm'
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
  is_soldout: boolean

  // @ManyToOne(()=>ProductCart)
  // @Field(()=>ProductCart)
  // productCart: ProductCart

  @ManyToOne(() => ProductSubCategory)
  @Field(()=> ProductSubCategory)
  product_subcategory: ProductSubCategory 
  
  @DeleteDateColumn()
  deleted_at: Date
  
  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag])
  product_tags: ProductTag[];

  @UpdateDateColumn()
  updatedAt: Date
  
  // @JoinColumn()
  // @ManyToMany(()=> Order, (orders)=> orders.product)
  // @Field(()=>[Order])
  // orders: Order[]
}
