import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Product } from '../../products/entities/product.entity';
import { Column, PrimaryGeneratedColumn, Entity, JoinColumn, OneToOne } from 'typeorm'


@ObjectType()
@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=> String)
  id: string

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

}
