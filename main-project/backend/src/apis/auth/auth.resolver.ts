import { GqlAuthAccessGuard } from 'src/common/auth/gql-auth-guard';
import { AuthService } from './auth.service';
import { Inject, UnprocessableEntityException, UseGuards, CACHE_MANAGER, UnauthorizedException } from '@nestjs/common';
import {Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt'
import { CurrentUser, ICurrentUser } from 'src/common/auth/gql-user.param';
import { GqlAuthRefreshGuard } from 'src/common/auth/gql-auth-guard';
import {Cache} from 'cache-manager'
import * as jwt from 'jsonwebtoken'

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ){}
  @Mutation(()=> String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() context: any
    ){
    // 1. 로그인(이메일과 비밀번호가 일치하는 유저 찾기)
    const user = await this.userService.findOneEmail({ email })

    // 2. 일치하는 유저가 없으면? 에러 던지기!
    if(!user) throw new UnprocessableEntityException('이메일이 존재하지 않습니다.')
    
    // 3. 일치하는 유저가 있지만, 암호가 틀렸다면 에러던지기!!
    const isAuth = await bcrypt.compare(password, user.password)
    if(!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.')
    this.authService.setRefreshToken({user, res: context.res})
    // 4. 일치하는 유저가 있으면? accessToken(JWT)을 만들어서 프론트엔드에 주기
    return this.authService.getAccessToken({user})
  }

  @UseGuards(GqlAuthRefreshGuard)//guard로 정상적인지 확인
  @Mutation(()=>String) //토큰을 재발급하므로 string으로 리턴
  restoreAccessToken(//새로 access토큰을 받는다.
    @CurrentUser() currentUser: ICurrentUser
  ){
    return this.authService.getAccessToken({ user:currentUser })
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(()=>String)
  async logout(
    @Context() context: any
  ){
    console.log("Fsdafasdf")
    const cookie = context.req.rawHeaders
    console.log(cookie)
    const accessToken = cookie[cookie.indexOf("application/json")+2].split(' ')[1]
    const refreshToken = cookie[cookie.indexOf("Cookie")+1].split('=')[1]
    console.log(refreshToken)
    // console.log(cookie)
    // console.log(Array.isArray(cookie))
    // console.log(cookie[cookie.indexOf("Authorization")+1].split(' ')[1])
    
    
    try{
      const decodeAccess = jwt.verify(accessToken, 'myAccessKey')
      const decodeRefresh = jwt.verify(refreshToken, 'myRefreshKey') 
      console.log("엑세스", decodeAccess, "리프레시ㅏ", decodeRefresh)
      await this.cacheManager.set(`accessToken:${accessToken}`, 'accessToken',{
        ttl:decodeAccess["exp"]-decodeAccess["iat"]})
      await this.cacheManager.set(`refreshToken:${refreshToken}`, 'refreshToken',{
        ttl:decodeRefresh["exp"]-decodeRefresh["iat"]})
      
      // await Promise.all([setAccess, setRefresh])
  
  
      return '로그아웃에 성공했습니다.'
    }catch(error){
      throw new UnauthorizedException
    }



    // await this.cacheManager.set("logoutUser", )
  }
}