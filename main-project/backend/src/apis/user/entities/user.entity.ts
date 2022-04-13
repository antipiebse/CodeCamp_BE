import { Field, ObjectType } from '@nestjs/graphql'
import { Column, PrimaryGeneratedColumn, Entity, DeleteDateColumn } from 'typeorm'


@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=>String)
  id: string

  @Column()
  // @Field(()=>String) //비밀번호는 보내면 안 됌
  password: string

  @Column()
  @Field(()=>String)
  email: string

  @Column()
  @Field(()=>String)
  phone: string

  @Column()
  @Field(()=>String)
  address: string

  @Column()
  @Field(()=>String)
  personal: string

  @Column()
  @Field(()=>String)
  nickname: string

  @Column()
  @Field(()=>String)
  profilePhoto: string

  @Column()
  @Field(()=>Boolean)
  isPhoto: boolean

  @Column()
  @Field(()=>String)
  firstMessage: string

  @DeleteDateColumn()
  deletedAt: Date
}
