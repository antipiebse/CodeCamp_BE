import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { ProductTag } from '../../productsTag/entities/productTag.entity'
import { ProductSaleslocation} from '../../productsSalesloctation/entities/productSaleslocation.entity'
import { ProductCategory} from '../../productsCategory/entities/productCategory.entity'
import { User } from '../../users/entities/user.entity'

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(()=> String)
  id: string

  @Column() //{type: 'varchar'}
  @Field(()=>String)
  name: string

  @Column()
  @Field(()=>String)
  description: string

  @Column()
  @Field(()=>Int)
  price: number

  @Column({ default: false })  
  @Field(()=>Boolean)
  isSoldout: boolean
  // soldedAt: Date

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  @Field(()=> ProductSaleslocation)
  productSaleslocation: ProductSaleslocation

  @ManyToOne(() => ProductCategory)
  @Field(()=> ProductCategory)
  productCategoay: ProductCategory

  @ManyToOne(() => User)
  @Field(()=> User)
  user:User

  @JoinTable()
  @ManyToMany(()=> ProductTag, (productTags) => productTags.products)
  @Field(()=> [ProductTag])
  productTags: ProductTag[]
}
