import { InputType,Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(()=>String)
  password: string

  @Field(()=>String)
  email: String

  @Field(()=>String)
  phone: String

  @Field(()=>String)
  address: String

  @Field(()=>String)
  personal: String

  @Field(()=>String)
  nickname: String

  @Field(()=>String)
  profilePhoto: String

  @Field(()=>Boolean)
  isPhoto: boolean

  @Field(()=>String)
  firstMessage: String
}