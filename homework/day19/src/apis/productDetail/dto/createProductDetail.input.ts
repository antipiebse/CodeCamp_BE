import { ProductDetail } from '../entities/productDetail.entity'
import { OmitType, InputType } from "@nestjs/graphql";
@InputType()
export class CreateProductDetailInput extends OmitType(
  ProductDetail,
  ["id"],
  InputType,
){

}