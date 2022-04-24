// import { CreateProductImageInput } from './dto/createProductImage.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ProductImage } from './entities/productImage.entity';
import { resolve } from 'path';

// interface ICreate{
//   createProductImageInput: CreateProductImageInput
// }

@Injectable()
export class ProductImageService {
  constructor(
    @InjectRepository(ProductImage)
    private readonly productImageRepository:Repository<ProductImage>,
  ){}

  async findAll(){
    return await this.productImageRepository.find()
  }
  
  async findOne({productImageId}){
    return await this.productImageRepository.findOne({where:{id: productImageId}})
  }
  
  async create({ productId, url }){
    const waitedFiles = await Promise.all(url)

    const SaveResult = waitedFiles.map(el=>{
      return this.productImageRepository.save({product:{ id:productId }, url:el})
    })
    return SaveResult
  }

  async update({productId, url}){
    //상품 아이디로 기존 url들 삭제
    const DeleteResult = await this.productImageRepository.delete({product:{ id:productId }})
    
    console.log(DeleteResult)
    const waitedFiles = await Promise.all(url)

    // const res = await Promise.all(waitedFiles.map((el)=>{
    //   return new Promise(()=>{
    //     return this.productImageRepository.save({product:{ id:productId }, url:el})
    //   })
    // }))
    const SaveResult =  waitedFiles.map(el=> {
      return this.productImageRepository.save({product:{ id:productId }, url:el})
    })

    console.log(SaveResult)
    
    return SaveResult
  }
}
