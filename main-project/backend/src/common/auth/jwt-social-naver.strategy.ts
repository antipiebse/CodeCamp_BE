import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-naver'
// import * as config from 'config'
// const kakaoConfig = config.get('kakao')
@Injectable()
export class JwtNaverStrategy extends PassportStrategy(Strategy){
  constructor(){
    super({
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: process.env.NAVER_CALLBACKURL,
    })
  }
  validate(accessToken: string, refreshToken: string, profile: any){
    // const client_id = '_cklqzZSQ9UQbmE37M61';
    // const state = "RAMDOM_STATE";
    // const redirectURI = encodeURI("YOUR_CALLBACK_URL");
    // const api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
   
    // console.log(accessToken)
    // console.log(refreshToken)
    // console.log(prof  ile)
    return {
      email:profile.emails[0].value,
      password: "test",
      nickname: profile.displayName, 
      phone: 'test',
      address: "test",
      personal: profile._json.birthday,
      profilePhoto: profile._json.profile_image,
      isPhoto: profile._json.profile_image?true:false,
      firstMessage:"hello"
    }
  }
}