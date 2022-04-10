import { Field, ObjectType } from '@nestjs/graphql'
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

@ObjectType()
@Entity()
export class ProductCart {
  @PrimaryGeneratedColumn("uuid")
  @Column(()=> String)
  @Field(()=> String)
  id: string

  @Column() 
  @Field(()=>String)
  productId: string
}
