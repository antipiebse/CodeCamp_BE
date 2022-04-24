import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
// import { ExtractJwt, Strategy } from "passport-jwt";
import  {Strategy } from 'passport-google-oauth20'
@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google'){
  //1. 검증하는 부분(secretOrKey가 복호회되어 비교!)
  constructor(){
    super({
      clientID: '입력하기',
      clientSecret: '입력하기',
      callbackURL: '입력하기',
      scope: ['email', 'profile']//사이트마다 scope가 다르다.
    })
  }

  //중간에 검증이 실패하면 프론트로 에러 출력
  // 2. 검증 완료되면 실행
  validate(accessToken: string, refreshToken: string, profile: any){
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profile)
    return {
      email: profile.emails[0].value,
      password: "1111",
      name: profile.displayName, 
      age: 0,
    }
    //return하는 값들은 PassportStrategy로 인해 context안에 request안에 user객체로 들어간다.
  }
}