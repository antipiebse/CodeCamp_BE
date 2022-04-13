import { ProductDetail } from '../productDetail/entities/productDetail.entity'
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

    @InjectRepository(ProductDetail)
    private readonly productDeatilRepository:Repository<ProductDetail>,
    
    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ){}
  async findAll(){
    return await this.productRepository.find({withDeleted:false, relations: ['productDetail','productSubCategory', 'productTags']})
  }

  async findOne({productId}){
    return await this.productRepository.findOne({where:{id: productId}, withDeleted:false, relations: ['productDetail','productSubCategory', 'productTags']})
  }

  async create({createProductInput}){
    const { productDetail, productSubCategoryId, productTags, ...product } = createProductInput
    
    const result = await this.productDeatilRepository.save({ 
      ...productDetail,
    })

    // 태그
    const result2 = []    
    for(let i=0; i<productTags.length;i++){
      const tagname = productTags[i].replace("#", "")//#을 제거

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
      productDetail: result,
      productSubCategory: { id: productSubCategoryId},
      productTags: result2,
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
