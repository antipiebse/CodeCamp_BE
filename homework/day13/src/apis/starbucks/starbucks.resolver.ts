//controller
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
import { createStarbucksInput } from './dto/createStarbucks.input';
import { Starbucks } from './entities/starbucks.entity'
// @(데코레이터), : type (typescript),
@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService ) {}

    @Query(()=> [Starbucks])
    fetchStarbucks(){
        return this.starbucksService.findAll()
    }
    

    @Mutation(()=> String)
    createStarbucks(
        @Args("createBoardInput") createStarbucksInput: createStarbucksInput
    ){
        console.log(createStarbucksInput)
        return this.starbucksService.create()
    }
}
