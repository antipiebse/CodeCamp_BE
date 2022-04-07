import { ProductCategory } from './entities/productCategory.entity';
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { ProductCategoryService } from './productCategory.service';

//controller
@Resolver()
export class ProductCategoryResolver {
  constructor(private readonly productCategoryService: ProductCategoryService){

  }
  @Mutation(()=>ProductCategory)
  createProductCategory(
    @Args('name') name: string,
  ){
    return this.productCategoryService.create({name})//서비스에서 리턴한 값이 여기로 옴.=> 이걸 프론트엔드로 보냄.
  }
}