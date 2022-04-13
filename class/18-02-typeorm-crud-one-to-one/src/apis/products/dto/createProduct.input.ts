import { Field, InputType, Int } from "@nestjs/graphql"
import { ProductSaleslocationInput } from 'src/apis/productsSalesloctation/dto/productSaleslocation.input';


@InputType()
export class CreateProductInput {
  @Field(()=>String)
  name: string

  @Field(()=>String)
  description: string

  @Field(()=> Int)
  price: number

  @Field(()=> ProductSaleslocationInput)
  ProductSaleslocation: ProductSaleslocationInput
}