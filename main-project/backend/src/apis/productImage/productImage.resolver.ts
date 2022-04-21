//controller
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductImage } from './entities/productImage.entity';
import {ProductImageService} from './productImage.service'
// import {CreateProductImageInput} from './dto/createProductImage.input'
// @(데코레이터), : type (typescript),
@Resolver()
export class ProductImageResolver {
  constructor(private readonly productImageService: ProductImageService) {}
  
  @Query(()=>[ProductImage])
  fetchProductImages(){
    return this.productImageService.findAll()
  }

  @Query(()=>ProductImage)
  fetchProductImage(   
     @Args('productImageId') productImageId: string,
  ){
    return this.productImageService.findOne({productImageId})
  }

  @Mutation(()=>ProductImage)
  async createProductImage(
    @Args('productId') productId: string,
    @Args('url') url: string
  ){
    return this.productImageService.create({ productId, url })
  }


  @Mutation(()=>[ProductImage])
  async updateProductImage(
    @Args('productId') productId: string,
    @Args({name:'url',type:()=>[String] }) url: string[],
  ){
    return await this.productImageService.update({productId, url})
  }
}
  