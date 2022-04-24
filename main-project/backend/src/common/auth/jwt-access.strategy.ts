import { Injectable, CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import {Cache} from 'cache-manager'


@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access'){
  //1. 검증하는 부분(secretOrKey가 복호회되어 비교!)
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //http-header부분에 담긴 값을 가져오면 됨! jwt
      secretOrKey: 'myAccessKey', // password
      passReqToCallback: true
    })
    
  
  }

  //중간에 검증이 실패하면 프론트로 에러 출력
  // 2. 검증 완료되면 실행
  async validate(req, payload){
    // console.log("Fasdfsadfsadf")
    // console.log("req",req.rawHeaders)
    // console.log(payload)
    const cookie = req.rawHeaders
    const accessToken = cookie[cookie.indexOf("application/json")+2].split(' ')[1]
    // console.log("fdsafsa",accessToken, refreshToken)

    const redisAccess = await this.cacheManager.get(`accessToken:${accessToken}`)
    
    console.log("레디스엑세스",redisAccess)
    if(redisAccess) throw new UnauthorizedException
    return {
      ...payload
    }
    //return하는 값들은 PassportStrategy로 인해 context안에 request안에 user객체로 들어간다.
  }
}