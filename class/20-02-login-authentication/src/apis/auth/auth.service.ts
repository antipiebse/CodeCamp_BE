import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService:JwtService
  ){}
   getAccessToken({user}){
     return this.jwtService.sign(
       { email: user.email, sub: user.id},
       { secret: "myAccessKye", expiresIn: '1h'}
     )

   }
   //토큰의 유효기간을 만들어야 보안이 좋음 
}