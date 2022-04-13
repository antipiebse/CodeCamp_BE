import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUser.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import {UpdateUserInput} from './dto/updateUser.input'
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(()=> [User])
  fetchUsers()  {
      return this.userService.findAll()
  }

  @Query(()=>User)
  fetchUser(
    @Args('userId') userId: string,
  ){
    return this.userService.findOne({userId})
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return this.userService.create({ createUserInput });
  }

  @Mutation(()=>User)
  async updateUser(
    @Args('userId') userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput, 
  ){
    //유저가 존재하는지 확인해보기
    await this.userService.checkUser({userId})

    //수정하기
    return await this.userService.update({userId, updateUserInput})
  }

  @Mutation(()=> Boolean)
  deleteUser(
    @Args('userId') userId: string, //
  ) {
    return this.userService.delete({ userId });
  }
}