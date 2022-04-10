import { ProductDetail } from '../productDetail/entities/productDetail.entity'
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ProductSubCategory } from '../productsSubCategory/entities/productSubCategory.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>,

    @InjectRepository(ProductDetail)
    private readonly productDeatilRepository:Repository<ProductDetail>,
  ){}
  async findAll(){
    return await this.productRepository.find({withDeleted:true, relations: ['productDetail','productSubCategory']})
  }

  async findOne({productId}){
    return await this.productRepository.findOne({where:{id: productId}, withDeleted:true, relations: ['productDetail','productSubCategory']})
  }

  async create({createProductInput}){
    const { productDetail, productSubCategoryId, ...product } = createProductInput
    
    const result = await this.productDeatilRepository.save({ 
      ...productDetail,
    })

    return await this.productRepository.save({
      ...product,
      productDetail: result,
      productSubCategory: { id: productSubCategoryId},
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
    const product = await this.productRepository.findOne(
        {where:{id:productId}})


    if(product.isSoldout) 
      throw new UnprocessableEntityException("이미 판매 완료된 상품입니다.")

  }

  async delete({ productId}){
    const result = await this.productRepository.softDelete({ id: productId }); // 다양한 조건으로 삭제 가능!!
    return result.affected ? true : false; 
  }

  async restoreDeletedProduct({productId}){
    const restoreRes = await this.productRepository.restore(productId)
    return restoreRes
  }
}
