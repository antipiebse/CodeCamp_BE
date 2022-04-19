import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService:JwtService
  ){}
  setRefreshToken({ user,res }){
    const refreshToken =  this.jwtService.sign(
      { email: user.email, sub: user.id},
      { secret: "myRefreshKey", expiresIn: '2w'}//만료시간 2주로 설정
    )
      
    // 개발환경 ->지금은 보안이 좋지 않은 방법임
    res.setHeader("Set-Cookie", `refreshToken=${refreshToken}`)
    //res는 return해주지 않아도 응답이기 때문에 알아서 나감.


    // 배포환경
    // res.setHeader('Access-Control-Allow-Origin', 'https://myfrontsite.com')
    // res.setHeader(
    //   'Set-Cookie',
    //   `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly;`
    // )
  }



  getAccessToken({user}){
    return this.jwtService.sign(
      { email: user.email, sub: user.id},
      { secret: "myAccessKey", expiresIn: '1h'}
    )
  }

   //토큰의 유효기간을 만들어야 보안이 좋음 
}