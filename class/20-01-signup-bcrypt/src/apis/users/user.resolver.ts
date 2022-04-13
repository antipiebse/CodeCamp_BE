import { User } from 'src/apis/users/entities/user.entity';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import {UserService} from './user.service'
import * as bcrypt from 'bcrypt'
@Resolver()
export class UserResolver{
  constructor(
    private readonly userService: UserService,
  ){}
  @Mutation(()=> User)
  async createUser(
    @Args('email') email:string,
    @Args('password') password:string,
    @Args('name') name:string,
    @Args('age') age:number,
  ){
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    return this.userService.create({email, hashedPassword, name, age})
  }
}
//yarn add --dev @types/bcrypt bcrypt타입스크립트 지원!