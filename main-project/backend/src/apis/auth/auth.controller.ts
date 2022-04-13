import {AuthService} from '../auth/auth.service'
import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from 'express'
import { User } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";

interface IOAuthUser { 
  user: Omit<User, 'id'>
}


@Controller('/login')
export class AuthController {
  constructor(
    // private readonly userService: UserService,
    private readonly authService: AuthService
  ){}
  @Get('/google')  
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser,
    @Res() res: Response,
  ){
    this.authService.checkUser({req, res})
    // // 1. 가입확인
    // let user =  await this.userService.findOneEmail({email: req.user.email})
    // // 2. 회원가입
    // if(!user){
    //   user = await this.userService.create({
    //       user: req.user
    //   })  
    // }
    // // 3. 로그인
    // this.authService.setRefreshToken({user, res})
   
    // //구글 로그인에 성공하면 원래 위치로 돌아오기!
    // res.redirect(
    //   'http://localhost:15500/login/index.html'
    // )
  }


  @Get('/kakao')
  @UseGuards(AuthGuard('kakao'))
  async loginKakao(
    @Req() req: Request & IOAuthUser,
    @Res() res: Response,
  ){
    this.authService.checkUser({req, res})
    
    // let user =  await this.userService.findOneEmail({email: req.user.email})
    // // console.log(user)
    // // 2. 회원가입
    // if(!user){
    //   user = await this.userService.create({
    //       user: req.user
    //   })  
    // }
    // this.authService.setRefreshToken({user, res})
    // res.redirect(
    //   'http://localhost:15500/login/index.html'
    // )
  }  

  @Get('/naver')
  @UseGuards(AuthGuard('naver'))
  async loginNaver(
    @Req() req: Request & IOAuthUser,
    @Res() res: Response,
  ){
    this.authService.checkUser({req, res})
    // let user =  await this.userService.findOneEmail({email: req.user.email})
    // // 2. 회원가입
    // if(!user){
    //   user = await this.userService.create({
    //       user: req.user
    //   })  
    // }
    // this.authService.setRefreshToken({user, res})
    // res.redirect(
    //   'http://localhost:15500/login/index.html'
    // )
   }

//   @Get('/callback')
//   @UseGuards(AuthGuard('naver'))
//   async callbackNaver(
//     @Req() req: Request & IOAuthUser,
//     @Res() res: Response,
//   ){
//     const code = req.query.code;
//     const state = req.query.state;
//     const client_secret = 'JaQInFLS8k';
//     api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
//      + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
//     let request = require('request');
//     let options = {
//         url: api_url,
//         headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
//      };
//     request.get(options, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
//         res.end(body);
//       } else {
//         res.status(response.statusCode).end();
//         console.log('error = ' + response.statusCode);
//       }
//     });
//   }
// }
}