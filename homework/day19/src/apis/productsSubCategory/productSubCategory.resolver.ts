//controller
import { ProductSubCategoryService } from './productSubCategory.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {ProductSubCategory } from './entities/productSubCategory.entity'
// @(데코레이터), : type (typescript),
@Resolver()
export class ProductSubCategoryResolver {
  constructor(
    private readonly productSubCategoryService: ProductSubCategoryService,
  ) {}

  @Mutation(()=> ProductSubCategory)
  async createSubCategory(
    @Args('category') category: string,
    @Args('productMainCategoryId') productMainCategoryId: string,
  ){
    return await this.productSubCategoryService.create({ category, productMainCategoryId })
  }

}
