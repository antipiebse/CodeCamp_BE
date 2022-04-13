import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
// import { ExtractJwt, Strategy } from "passport-jwt";
import { Strategy, Profile } from 'passport-google-oauth20';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google'){
  //1. 검증하는 부분(secretOrKey가 복호회되어 비교!)
  constructor(){
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACKURL,
      scope: ['email', 'profile'],//사이트마다 scope가 다르다.
      
    })
    // console.log("111111")
  }


  //중간에 검증이 실패하면 프론트로 에러 출력
  // 2. 검증 완료되면 실행
  validate(accessToken: string, refreshToken: string, profile: Profile){
    // console.log(accessToken)
    // console.log(refreshToken)
    // console.log(profile)
    return {
      email: profile.emails[0].value,
      password: "test",
      nickname: profile.displayName, 
      phone: 'test',
      address: "test",
      personal:"test",
      profilePhoto:profile.photos[0].value,
      isPhoto: profile.photos[0].value?true:false,
      firstMessage:"hello"
    }
    //return하는 값들은 PassportStrategy로 인해 context안에 request안에 user객체로 들어간다.
  }
}