import { CreateUserInput } from './dto/createUser.input';
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async findAll(){
    return await this.userRepository.find({withDeleted:false})
  }

  //id로 유저 찾기
  async findOne({userId}){
    return await this.userRepository.findOne({where:{id: userId}, withDeleted:false})
  }
  // email로 유저찾기
  async findOneEmail({email}){
    return await this.userRepository.findOne({where:{email}, withDeleted:false})
  }
  async create({ user }) {
    const email = await this.userRepository.findOne({where:{email: user.email}, withDeleted:true})
    if(email) throw new ConflictException('이미 등록된 이메일입니다.')

    return await this.userRepository.save({ ...user });
  }
  
  async update({userId, updateUserInput}){
    const user= await this.userRepository.findOne(
      {where: {id: userId}})
    const newUser ={
      ...user,
      ...updateUserInput
    }
    return await this.userRepository.save(newUser)
  }

  async checkUser({userId}){
    const user = await this.userRepository.findOne(
        {where:{id:userId}})

    if(!user) 
      throw new UnauthorizedException('존재하지 않는 유저입니다.')
  }

  async delete({userId}){
    const result = await this.userRepository.softDelete({ id: userId }); // 다양한 조건으로 삭제 가능!!
    return result.affected?true : false; 
  }

  async restoreDeletedProduct({userId}){
    const restoreRes = await this.userRepository.restore(userId)
    return restoreRes
  }
}