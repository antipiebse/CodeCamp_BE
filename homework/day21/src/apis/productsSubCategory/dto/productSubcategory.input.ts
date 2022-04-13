import { ProductSubCategory } from '../entities/productSubCategory.entity';
import { OmitType, InputType, Field } from '@nestjs/graphql';

@InputType()
export class ProductSubCategoryInput extends OmitType(
  ProductSubCategory,
  ["id"],
  InputType,
){
  // @Field(()=>ProductMainCategory)
  // productMainCategory: ProductMainCategory
  @Field(()=> String)
  productMainCategoryId: string
}