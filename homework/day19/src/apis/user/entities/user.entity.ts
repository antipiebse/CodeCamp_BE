import { Field, ObjectType } from '@nestjs/graphql'
import { Column, PrimaryGeneratedColumn, Entity, DeleteDateColumn } from 'typeorm'


@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=>String)
  id: string

  @Column({select:false})
  // @Field(()=>String) //비밀번호는 보내면 안 됌
  password: string

  @Column()
  @Field(()=>String)
  email: String

  @Column()
  @Field(()=>String)
  phone: String

  @Column()
  @Field(()=>String)
  address: String

  @Column()
  @Field(()=>String)
  personal: String

  @Column()
  @Field(()=>String)
  nickname: String

  @Column()
  @Field(()=>String)
  profilePhoto: String

  @Column()
  @Field(()=>Boolean)
  isPhoto: boolean

  @Column()
  @Field(()=>String)
  firstMessage: String

  @DeleteDateColumn()
  deletedAt: Date
}
