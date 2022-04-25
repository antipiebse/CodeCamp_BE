import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { Module } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { JwtRefreshStrategy } from 'src/common/auth/jwt-refresh.strategy';
import { JwtGoogleStrategy } from 'src/common/auth/jwt-social-google.strategy';
import { AuthController } from './auth.controller';
@Module({
  imports:[
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
  ],
  providers:[
    JwtRefreshStrategy,//user가 아닌 auth.resolver에서 사용하므로 주입!
    AuthResolver, 
    JwtGoogleStrategy,
    AuthService,
    UserService,
  ],
  controllers:[
    AuthController,
  ]
})
export class AuthModule {}
//fasdfsdafsa