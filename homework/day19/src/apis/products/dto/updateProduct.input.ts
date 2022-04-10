import {InputType, PartialType } from "@nestjs/graphql"
import { CreateProductInput } from "./createProduct.input"


@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}

// PartialType //필수가 아닌 요소로 변경
// OmitType //생략하기
// PickType //필요한 요소만 받기