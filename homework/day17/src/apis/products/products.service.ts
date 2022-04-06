import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>
  ){}
  async findAll(){
    return await this.productRepository.find()
  }

  async findOne({productId}){
    return await this.productRepository.findOne({where:{id: productId}})
  }

  async create({createProductInput}){
    const result = await this.productRepository.save({ 
      ...createProductInput
    })
    console.log(result)

    return result
  }

 async update({productId, updateProductInput}){
    const product= await this.productRepository.findOne(
      {where: {id: productId}})
    const newProduct ={
      ...product,
      ...updateProductInput
    }
    return await this.productRepository.save(newProduct)
  }

  async checkSoldout({productId}){
    const product = await this.productRepository.findOne(
        {where:{id:productId}})


    if(product.isSoldout) 
      throw new UnprocessableEntityException("이미 판매 완료된 상품입니다.")

  }
}
