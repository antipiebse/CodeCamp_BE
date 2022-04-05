import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class createProductInput {
    
    @Field(()=> String)
    writer: string

    @Field(()=> String)
    title: string
    
    @Field(()=> String)
    contents: string
}