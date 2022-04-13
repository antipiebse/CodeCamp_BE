import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { Module } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { JwtRefreshStrategy } from 'src/common/auth/jwt-refresh.strategy';
import { AuthController } from './auth.controller';
import { JwtGoogleStrategy } from 'src/common/auth/jwt-social-google.strategy';
import { JwtKakaoStrategy } from 'src/common/auth/jwt-social-kakao.strategy';
import { JwtNaverStrategy } from 'src/common/auth/jwt-social-naver.strategy';
import { ConfigService } from '@nestjs/config';


@Module({
  imports:[
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),ConfigService
  ],
  providers:[
    JwtGoogleStrategy,
    JwtRefreshStrategy,
    AuthResolver, 
    AuthService,
    UserService,
    JwtKakaoStrategy,
    JwtNaverStrategy
  ],
  controllers:[
    AuthController
  ]
})
export class AuthModule {}