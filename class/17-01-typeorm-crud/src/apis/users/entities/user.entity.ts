import { ObjectType, Field } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'


@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=>String)
  id: string

  @Column()
  @Field(()=>String)
  email: String

  @Column()  
  @Field(()=>String)
  password: string
}
