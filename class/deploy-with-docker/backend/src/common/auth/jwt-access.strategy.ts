import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access'){
  //1. 검증하는 부분(secretOrKey가 복호회되어 비교!)
  constructor(){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //http-header부분에 담긴 값을 가져오면 됨! jwt
      secretOrKey: process.env.ACCESS_TOKEN_KEY // password
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