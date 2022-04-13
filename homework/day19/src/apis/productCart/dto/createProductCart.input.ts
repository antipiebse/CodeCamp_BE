import { InputType, Field, OmitType } from '@nestjs/graphql';
import { ProductCart } from '../entities/productCart.entity';
@InputType()
export class ProductCartInput extends OmitType(ProductCart, ['id'], InputType){
}