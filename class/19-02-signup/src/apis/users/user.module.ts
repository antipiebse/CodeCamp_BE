import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User } from 'src/apis/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService]
})
export class UserModule {}