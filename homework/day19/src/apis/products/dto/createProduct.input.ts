import { Field, InputType, Int } from "@nestjs/graphql"
import { ProductDetailInput } from "src/apis/productDetail/dto/productDetail.input"


@InputType()
export class CreateProductInput {
    @Field(()=> String)
    name: string

    @Field(()=> String)
    description: string
    
    @Field(()=> Int)
    price: number

    @Field(()=>ProductDetailInput)
    productDetail: ProductDetailInput

    // @Field(()=>ProductSubCategoryInput)
    // productSubCategory:ProductSubCategoryInput

    @Field(()=>String)
    productSubCategoryId: string
}
