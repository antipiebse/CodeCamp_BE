import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ProductLike } from './entities/productLike.entity';

@Injectable()
export class ProductLikeService {
  constructor(
    @InjectRepository(ProductLike)
    private readonly productLikeRepository:Repository<ProductLike>,
  ){}

  async findAll(){
    return await this.productLikeRepository.find()
  }
  
  async findOne({productLikeId}){
    return await this.productLikeRepository.findOne({where:{id: productLikeId}})
  }
  
  async create({createProductLikeInput}){
    return await this.productLikeRepository.save({...createProductLikeInput})
  }

}
