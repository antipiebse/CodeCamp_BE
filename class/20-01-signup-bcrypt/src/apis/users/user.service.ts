import { InjectRepository } from '@nestjs/typeorm';
import{ConflictException, Injectable}from '@nestjs/common'
import {User} from './entities/user.entity'
import { Repository } from 'typeorm';
@Injectable()
export class UserService{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}
  async create({email, hashedPassword: password, name, age}) {
    const user = await this.userRepository.findOne({email})
    if(user) throw new ConflictException("이미 등록된 이메일 입니다.")
    return await this.userRepository.save({email, password, name, age})
  }
}