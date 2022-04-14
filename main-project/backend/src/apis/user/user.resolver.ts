import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUser.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import {UpdateUserInput} from './dto/updateUser.input'
import { GqlAuthAccessGuard } from './../../common/auth/gql-auth-guard';
import * as bcrypt from 'bcrypt'
import { UseGuards } from '@nestjs/common'
import { CurrentUser } from './../../common/auth/gql-user.param';
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';


@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(()=> [User])
  fetchUsers()  {
      return this.userService.findAll()
  }

  @UseGuards(GqlAuthAccessGuard )//passport라이브러리를 통해 guard형성!
  @Query(()=> User)
  async fetchUser(
    @CurrentUser() currentUser: any, //우리가 만든 params로 context의 데이터를 가져올 수 있음.
  ){
    console.log(currentUser)
    console.log('fetchUser실행 완료')

    return await this.userService.findOneEmail({email:currentUser.email})
   }

  // @Query(()=>User)
  // fetchUser(
  //   @Args('userId') userId: string,
  // ){
  //   return this.userService.findOne({userId})
  // }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    const hashedPassword = await bcrypt.hash(createUserInput.password, 10)
    const user = {...createUserInput, password:hashedPassword}
    console.log(hashedPassword)
    return this.userService.create({ user });
  }

  
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(()=>User)
  async updateUser(
    // @Args('userId') userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @CurrentUser('') currentUser: any
  ){
    //유저가 존재하는지 확인해보기
    // await this.userService.checkUser({userId})

    //수정하기
    const hashedPassword = await bcrypt.hash(updateUserInput.password, 10)
    const user = {...updateUserInput, password:hashedPassword}
    return await this.userService.update({userId: currentUser.sub, updateUserInput:user})
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(()=> Boolean)
  deleteUser(
    // @Args('userId') userId: string,
    @CurrentUser('') currentUser: any
    //
  ) {
    
    return this.userService.delete({ userId: currentUser.sub });
  }


}
