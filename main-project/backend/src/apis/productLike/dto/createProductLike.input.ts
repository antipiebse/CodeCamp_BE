import { ProductLike } from '../entities/productLike.entity';
import { InputType, OmitType } from "@nestjs/graphql";


@InputType()
export class CreateProductLikeInput extends OmitType(ProductLike, ['id'], InputType){

}