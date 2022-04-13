//controller
import { ProductMainCategoryService } from './productMainCategory.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {ProductMainCategory } from './entities/productMainCategory.entity'
// @(데코레이터), : type (typescript),
@Resolver()
export class ProductMainCategoryResolver {
  constructor(
    private readonly productMainCategoryService: ProductMainCategoryService,
  ) {}

  @Mutation(()=> ProductMainCategory)
  createMainCateGory(
    @Args('category') category: string,
  ){
    return this.productMainCategoryService.create({ category })
  }

}
