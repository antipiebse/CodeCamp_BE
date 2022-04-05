 import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class createStarbucksInput {

    @Field(() => String)
    name: string;

    @Field(()=> String)
    price: string;

    @Field(()=> String)
    kcal: string;

    @Field(()=> String)
    saturatedFat: string

    @Field(()=> String)
    protein: string

    @Field(()=> String)
    Na: string

    @Field(()=> String)
    sugars: string

    @Field(()=> String)
    Caffeine: string
}