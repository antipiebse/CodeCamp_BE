import {AuthService} from '../auth/auth.service'
import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from 'express'
import { User } from "../users/entities/user.entity";
import { UserService } from "../users/user.service";

interface IOAuthUser { 
  user: Pick<User, 'email' | 'password' | 'name' | 'age'>
}

@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ){}
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser,
    @Res() res: Response,
  ){
    // 1. 가입확인
    let user =  await this.userService.findOne({email: req.user.email})
    // 2. 회원가입
    if(!user){
      user = await this.userService.create({
          email: req.user.email,
          hashedPassword: req.user.password,
          name: req.user.name,
          age: req.user.age
      })  
    }
    // 3. 로그인
    this.authService.setRefreshToken({user, res})
    //구글 로그인에 성공하면 원래 위치로 돌아오기!
    
    res.redirect(
      'http://localhost:15500/class/21-03-login-google/frontend/social-login.html'
    )
  }
}