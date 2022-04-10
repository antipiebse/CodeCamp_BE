import { OmitType, PickType } from '@nestjs/graphql';
import { ProductMainCategory } from '../entities/productMainCategory.entity';
import {  InputType } from '@nestjs/graphql';

@InputType()
export class ProductMainCategoryInput extends OmitType(
  ProductMainCategory,
  ['id'],
  InputType,
){

}