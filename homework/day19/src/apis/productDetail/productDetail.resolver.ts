import { CreateProductDetailInput } from './dto/createProductDetail.input';
//controller
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductDetail } from './entities/productDetail.entity';
import {ProductDetailService} from './productDetail.service'

// @(데코레이터), : type (typescript),
@Resolver()
export class ProductDetailResolver {
  constructor(private readonly productDetailService: ProductDetailService) {}
  
  @Query(()=>[ProductDetail])
  fetchProductDetails(){
    return this.productDetailService.findAll()
  }

  @Query(()=>ProductDetail)
  fetchProductDetail(   
     @Args('productDetailId') productDetailId: string,
  ){
    return this.productDetailService.findOne({productDetailId})
  }

  @Mutation(()=>ProductDetail)
  async createProductDetail(
    @Args('createProductDetailInput') createProductDetailInput: CreateProductDetailInput,
  ){
    return this.productDetailService.create({ createProductDetailInput })
  }

}
