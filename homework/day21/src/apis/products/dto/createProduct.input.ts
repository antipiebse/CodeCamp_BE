import { Field, InputType, Int } from "@nestjs/graphql"
import {CreateProductDetailInput} from '../../productDetail/dto/createProductDetail.input'

@InputType()
export class CreateProductInput {
    @Field(()=> String)
    name: string

    @Field(()=> String)
    description: string
    
    @Field(()=> Int)
    price: number

    @Field(()=>CreateProductDetailInput)
    createProductDetailInput: CreateProductDetailInput

    // @Field(()=>ProductSubCategoryInput)
    // productSubCategory:ProductSubCategoryInput

    @Field(()=>String)
    productSubCategoryId: string
}
