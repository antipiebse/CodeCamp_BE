import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class createBoardInput {
    
    @Field(()=> String)
    writer: string

    @Field(()=> String)
    title: string
    
    @Field(()=> String)
    contents: string
}