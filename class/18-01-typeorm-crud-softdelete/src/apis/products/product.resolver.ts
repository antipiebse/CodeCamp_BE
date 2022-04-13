import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { Args, Mutation, Query, Resolver, } from "@nestjs/graphql";
import {CreateProductInput} from './dto/createProduct.input'
import { UpdateProductInput } from './dto/updateProduct.input';
//controller
@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService,
  ){}

  @Query(()=>[Product])
  fetchProducts(){
    return this.productService.findAll()
  }
  
  @Query(()=>Product)
  fetchProduct(
    @Args('productId') productId: string,
  ){
    return this.productService.findOne({productId})
  }
  
  @Mutation(()=>Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ){
    return this.productService.create({ createProductInput })//서비스에서 리턴한 값이 여기로 옴.=> 이걸 프론트엔드로 보냄.
  }

  @Mutation(()=>Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput, 
  ){
    //판매완료가 되었는지 확인해보기
    await this.productService.checkSoldout({productId})
    
    //수정하기
    return await this.productService.update({productId, updateProductInput})
  }

  @Mutation(()=>Boolean)
  deleteProduct(
    @Args('productId') productId: string,
  ){
    return this.productService.delete({productId})
  }
  
}