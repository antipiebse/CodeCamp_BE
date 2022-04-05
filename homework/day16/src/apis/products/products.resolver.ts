//controller
import { ProductsService } from './products.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import {createProductInput} from './dto/createProduct.input'

// @(데코레이터), : type (typescript),
@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}
  @Query(()=> [Product])
  fetchBoards()  {
      return this.productsService.findAll()
  }

  @Mutation(()=> String)
  createBoard(
      @Args("writer") writer:String,
      @Args("title") title:String,
      @Args("contents") contents:String,
      @Args("createBoardInput") createBoardInput: createProductInput
  ) {
      console.log(writer)
      console.log(title)
      console.log(contents)
      console.log(createBoardInput)
      return this.productsService.create()
  }
}
