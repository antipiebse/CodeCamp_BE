import { Field, ObjectType } from '@nestjs/graphql'
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm'
import { Product } from '../../products/entities/product.entity'

@Entity()
@ObjectType()
export class ProductTag {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=>String)
  id: string

  @Column() //{type: 'varchar'}
  @Field(()=>String)
  name: string

  @ManyToMany(() => Product, (products) => products.productTags)
  @Field(()=>[Product])
  products: Product[]
}
