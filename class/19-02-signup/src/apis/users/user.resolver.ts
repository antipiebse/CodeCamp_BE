import { User } from 'src/apis/users/entities/user.entity';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import {UserService} from './user.service'
@Resolver()
export class UserResolver{
  constructor(
    private readonly userService: UserService,
  ){}
  @Mutation(()=> User)
  createUser(
    @Args('email') email:string,
    @Args('password') password:string,
    @Args('name') name:string,
    @Args('age') age:number,
  ){
    return this.userService.create({email, password, name, age})
  }
}