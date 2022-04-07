import { Field, ObjectType } from '@nestjs/graphql'
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'


@Entity()
@ObjectType()//graph
export class ProductCategory {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=> String)
  id: string

  @Column({unique:true}) //, nullable:true 공백을 허용
  @Field(()=> String)
  name: string
}
