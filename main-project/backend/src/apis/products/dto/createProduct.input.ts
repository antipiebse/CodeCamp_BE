import { Field, InputType, Int } from "@nestjs/graphql"
import { ProductTag } from "src/apis/productsTag/entities/productTag.entity"
// import {CreateProductDetailInput} from '../../trash/productDetail/dto/createProductDetail.input'

@InputType()
export class CreateProductInput {
    @Field(()=> String)
    name: string

    @Field(()=> String)
    description: string
    
    @Field(()=> Int)
    price: number

    @Field(()=> String)
    gender: string

    @Field(()=> String)
    season: string


    @Field(()=> String)
    size: string

    @Field(()=> String)
    brand: string

    @Field(()=> String)
    origin: string

    @Field(()=> Int)
    stock: number

    @Field(()=> String)
    color: string

    @Field(()=>Boolean)
    isSoldout: boolean
    
    @Field(()=>String)
    productSubCategoryId: string
    

    // @Field(() => [ProductTag])
    // productTags: ProductTag[];
  
}
