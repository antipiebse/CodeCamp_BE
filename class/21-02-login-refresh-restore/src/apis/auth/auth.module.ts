import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { Module } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { JwtRefreshStrategy } from 'src/common/auth/jwt-refresh.strategy';
import { JwtAccessStrategy } from 'src/common/auth/jwt-access.strategy';
@Module({
  imports:[
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
  ],
  providers:[
    JwtRefreshStrategy,
    JwtAccessStrategy,//user가 아닌 auth.resolver에서 사용하므로 주입!
    AuthResolver, 
    AuthService,
    UserService,
  ]
})
export class AuthModule {}