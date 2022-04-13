import { ProductSaleslocation } from '../productsSalesloctation/entities/productSaleslocation.entity';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Product} from './entities/product.entity'
//controller
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepostory:Repository<ProductSaleslocation>
  ){}
  
  async findAll(){
    return await this.productRepository.find()
  }
  
  async findOne({productId}){
    return await this.productRepository.findOne({where:{id: productId}})
  }

  async create({ createProductInput }){
    // 1.상품만 등록하는 경우
    // 상품을 데이터베이스에 저장
    // const result = await this.productRepository.save({ 
    //   ...createProductInput
      
    // })
    // console.log(result)
    // 2.상품과 상품 거래 위치를 같이 등록하는 경우
    const {productSaleslocation, ...product} = createProductInput
    const result = await this.productSaleslocationRepostory.save({
        ...productSaleslocation
    })
    return await this.productRepository.save({
      ...product,
      productSaleslocation: result,
    })
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
    // try {
    const product = await this.productRepository.findOne(
        {where:{id:productId}})
    // }catch(error){
    //   throw error.message
    // }finally{
    //   // 에러의 상관 유무와 관계없이 실행되는 로직
    // }

    if(product.isSoldout) 
      throw new UnprocessableEntityException("이미 판매 완료된 상품입니다.")
    // if(product.isSoldout){
    //   throw new HttpException('이미 판매 완료된 상품입니다.', HttpStatus.UNPROCESSABLE_ENTITY)
    // }
  }
  

  async delete({productId}){
    // 1. 실제 삭제
    // const result = await this.productRepository.delete({ id: productId})
    // return result.affected?true:false
    // 실제로 데이터를 삭제했다가 복구를 원하느 경우가 존재하므로 가상으로 삭제함.
    // isDeleted란 컬럼을 만들어서 true로 변환!
    // isDeleted가 true인 값들만 출력해서 삭제된 것처럼!
   
    // 2.소프트 삭제(직접 구현) - isDeleted
    // this.productRepository.update({id:productId},{isDeleted: true})
    
    // //3.소프트사젝(직접 구현2) 
    // this.productRepository.update({id: productId}, {deletedAt: new Date()})

    // // 4. 소프트 삭제(TypeORM에서 제공) -softRemove
    // this.productRepository.softRemove({id: productId});//id로만 삭제가능
    
    // 5. 소프트 삭제(TypeORM에서 제공) -softDelete
    const result = await this.productRepository.softDelete({id: productId});// 다양한 조금으로 삭제 가능
    return result.affected ? true:false;
  }
}