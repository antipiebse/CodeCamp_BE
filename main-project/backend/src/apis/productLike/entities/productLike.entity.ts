import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'


@Entity()
@ObjectType()
export class ProductLike {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=> String)
  id: string

  @Column() 
  @Field(()=> String)
  grade: string

  @Column() 
  @Field(()=> String)
  review: string

  @Column() 
  @Field(()=> Int)
  like: number

  @Column()
  @Field(()=> String)
  isdiscount: string

  @Column() 
  @Field(()=> Int)
  discount: number

  @Column()
  @Field(()=> Int)
  ranking: number

  @Column()
  @Field(()=> String)
  sales_rate: string

  @ManyToOne(()=>Product)
  @Field(()=> Product)
  product:Product
}
