import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ProductTag } from '../productsTag/entities/productTag.entity'
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>,

    
    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ){}
  // async findAll(){
  //   return await this.productRepository.find({withDeleted:false, relations: ['productDetail','productSubCategory', 'productTags']})
  // }
  // async findAll({search}){
  //   return await this.productRepository.find({where:{},withDeleted:false, relations: ['productDetail','productSubCategory', 'productTags']})
  // }

  //엘라스틱서치로 상품검색
  async findAll(){
    return await this.productRepository.find({withDeleted:false, relations: ['product_subcategory', 'product_tags']})
  }

  async findOne({productId}){
    return await this.productRepository.findOne({where:{id: productId}, withDeleted:false, relations: ['product_subcategory', 'product_tags']})
  }

  async create({createProductInput}){
    const { product_subcategory, product_tags, ...product } = createProductInput
    
    // 태그
    const result2 = []    
    for(let i=0; i<product_tags.length;i++){
      const tagname = product_tags[i].replace("#", "")//#을 제거

      // 이미 등록된 태그인지 확인해보기
      const prevTag = await this.productTagRepository.findOne({name: tagname})

      //태그 존재
      if(prevTag){
        result2.push(prevTag)
      }else{
      //태그 존재 x 
      const newTag = await this.productTagRepository.save({name:tagname})
      result2.push(newTag)
      }
    }

    return await this.productRepository.save({
      ...product,
      product_subcategory: { id: product_subcategory},
      product_tags: result2,
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


    if(product.is_soldout) 
      throw new UnprocessableEntityException("이미 판매 완료된 상품입니다.")

  }

  async delete({productId}){
    const result = await this.productRepository.softDelete({ id: productId }); // 다양한 조건으로 삭제 가능!!
    return result.affected ? true : false; 
  }

  async restoreDeletedProduct({productId}){
    const restoreRes = await this.productRepository.restore(productId)
    return restoreRes
  }
}
