import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-kakao'
// import * as config from 'config'
// const kakaoConfig = config.get('kakao')
@Injectable()
export class JwtKakaoStrategy extends PassportStrategy(Strategy){
  constructor(){
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: process.env.KAKAO_CALLBACKURL,
    })
  }
  validate(accessToken: string, refreshToken: string, profile: any){
    // console.log(accessToken)
    // console.log(refreshToken)
    const profileJson = profile._json
    console.log(profileJson)
    // console.log(profileJson.kakao_account)
    const kakao_account = profileJson.kakao_account
    return {
      email:kakao_account.email,
      password: "test",
      nickname: kakao_account.profile.nickname, 
      phone: 'test',
      address: "test",
      personal:"test",
      profilePhoto:"test",
      isPhoto: false,
      firstMessage:"hello"
    }
  }
}