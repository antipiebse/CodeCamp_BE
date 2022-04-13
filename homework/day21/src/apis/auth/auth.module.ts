import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { Module } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
@Module({
  imports:[
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
  ],
  providers:[
    AuthResolver, 
    AuthService,
    UserService,
  ]
})
export class AuthModule {}