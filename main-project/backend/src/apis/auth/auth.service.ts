import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt'
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService:JwtService,
    private readonly userService: UserService,
  ){}
  setRefreshToken({ user,res }){
    const refreshToken =  this.jwtService.sign(
      { email: user.email, sub: user.id},
      { secret: "myRefreshKey", expiresIn: '2w'}//만료시간 2주로 설정
    )
    // 개발환경 ->지금은 보안이 좋지 않은 방법임
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }


   getAccessToken({user}){
     console.log(user)
    console.log(user.id)
     return this.jwtService.sign(
       { sub: user.id, email: user.email},
       { secret: "myAccessKey", expiresIn: '1h'} //expiresIn은 토큰의 유효기간
     )
   }
   //토큰의 유효기간을 만들어야 보안이 좋음 

   async checkUser({req, res}){
         // 1. 가입확인
    let user =  await this.userService.findOneEmail({email: req.user.email})
    // 2. 회원가입
    if(!user){
      user = await this.userService.create({
          user: req.user
      })  
    }
    // 3. 로그인
    this.setRefreshToken({user, res})
   
    //구글 로그인에 성공하면 원래 위치로 돌아오기!
    res.redirect(
      'http://localhost:15500/main-project/frontend/login/index.html'
    )
   }


}