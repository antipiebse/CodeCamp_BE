import { Field, ObjectType } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

@ObjectType()
@Entity()
export class ProductMainCategory {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=> String)
  id: string

  @Column(()=> String) 
  category: string
}
