//controller
import { ProductsService } from './products.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import {CreateProductInput} from './dto/createProduct.input'
import {UpdateProductInput} from './dto/updateProduct.input'
// @(데코레이터), : type (typescript),
@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}
  @Query(()=> [Product])
  fetchProducts()  {
      return this.productsService.findAll()
  }

  @Query(()=>Product)
  fetchProduct(
    @Args('productId') productId: string,
  ){
    return this.productsService.findOne({productId})
  }

  @Mutation(()=>Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ){
    return this.productsService.create({ createProductInput })//서비스에서 리턴한 값이 여기로 옴.=> 이걸 프론트엔드로 보냄.
  }
  
  @Mutation(()=>Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput, 
  ){
    //판매완료가 되었는지 확인해보기
    await this.productsService.checkSoldout({productId})
    
    //수정하기
    return await this.productsService.update({productId, updateProductInput})
  }

  @Mutation(()=> Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productsService.delete({ productId });
  }
}
