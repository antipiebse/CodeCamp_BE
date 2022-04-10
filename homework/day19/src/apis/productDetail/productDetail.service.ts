import { ProductDetail } from '../productDetail/entities/productDetail.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductDetailService {
  constructor(
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository:Repository<ProductDetail>,
  ){}

  async findAll(){
    return await this.productDetailRepository.find()
  }
  
  async findOne({productDetailId}){
    return await this.productDetailRepository.findOne({where:{id: productDetailId}})
  }
  
  async create({createProductDetailInput}){
    return await this.productDetailRepository.save({...createProductDetailInput})
  }

}
