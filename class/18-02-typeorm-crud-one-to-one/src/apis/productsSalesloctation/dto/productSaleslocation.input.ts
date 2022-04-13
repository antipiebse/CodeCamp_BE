import { ProductSaleslocation } from '../entities/productSaleslocation.entity';
import { InputType, OmitType } from "@nestjs/graphql";

@InputType()
export class ProductSaleslocationInput extends OmitType(ProductSaleslocation, ['id'], InputType) {
  // @Field(()=>String)
  // address: string

  // @Field(()=>String)
  // addressDetail: string

  // @Field(()=>Float)
  // lat: string

  // @Field(()=>Float)
  // lng: string

  // @Field(()=> Date)
  // meetingTime: Date=> 이것처럼 모두 적어야하지만, Pick Type 또는 Omit Type 등을 활용하여 타입을 재사용

  myColumn: String//추가하고싶은 컬럼!!
}