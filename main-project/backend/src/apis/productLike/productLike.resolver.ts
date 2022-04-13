import { CreateProductLikeInput } from './dto/createProductLike.input';
//controller
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductLike } from './entities/productLike.entity';
import {ProductLikeService} from './productLike.service'

// @(데코레이터), : type (typescript),
@Resolver()
export class ProductLikeResolver {
  constructor(private readonly productLikeService: ProductLikeService) {}
  
  @Query(()=>[ProductLike])
  fetchProductLikes(){
    return this.productLikeService.findAll()
  }

  @Query(()=>ProductLike)
  fetchProductLike(   
     @Args('productLikeId') productLikeId: string,
  ){
    return this.productLikeService.findOne({productLikeId})
  }

  @Mutation(()=>ProductLike)
  async createProductLike(
    @Args('createProductLikeInput') createProductLikeInput: CreateProductLikeInput,
  ){
    return this.productLikeService.create({ createProductLikeInput })
  }

}
