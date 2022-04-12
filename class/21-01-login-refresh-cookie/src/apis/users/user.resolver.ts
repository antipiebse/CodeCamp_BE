import { CurrentUser } from '../../common/auth/gql-user.param';
import { GqlAuthAccessGuard } from '../../common/auth/gql-auth-guard';
import { User } from 'src/apis/users/entities/user.entity'
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import { UserService } from './user.service'
import * as bcrypt from 'bcrypt'
import { UseGuards } from '@nestjs/common'
// import { AuthGuard } from '@nestjs/passport'

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


  // graphql을 사용한다면 GQLGUARD설정을 해주어야한다.
  @UseGuards(GqlAuthAccessGuard)//passport라이브러리를 통해 guard형성!
  @Query(()=> String)
  fetchUser(
    @CurrentUser() currentUser: any, //우리가 만든 params로 context의 데이터를 가져올 수 있음.
  ){
    console.log(currentUser)
    console.log('fetchUser실행 완료')

  }
}
//yarn add --dev @types/bcrypt bcrypt타입스크립트 지원!