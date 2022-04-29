import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh'){
  //1. 검증하는 부분(secretOrKey가 복호회되어 비교!)
  constructor(){
    super({
      jwtFromRequest: (req)=>{console.log(req.headers.cookie.replace('refreshToken=', ''))
        return req.headers.cookie.replace('refreshToken=', '')},
        // {console.log(req)
        // const refreshToken = req.headers.cookie.replace('refreshToken=', '')
        // console.log(refreshToken)
        // // req.headers.cookie 안에 있는 refreshToken 골라내기

        // // refresh토큰이 들어오는 자리
        // return refreshToken}
       //쿠키에 담긴 값 가져오기
      secretOrKey: 'myRefreshKey' // password
    })
  }
  
  //중간에 검증이 실패하면 프론트로 에러 출력
  // 2. 검증 완료되면 실행
  validate(payload){
    console.log(payload)
    return {
      id: payload.sub,
      email: payload.email,
    }
    //return하는 값들은 PassportStrategy로 인해 context안에 request안에 user객체로 들어간다.
  }
}