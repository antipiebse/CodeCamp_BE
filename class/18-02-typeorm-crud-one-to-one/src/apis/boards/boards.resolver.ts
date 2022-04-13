//controller
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';
import { createBoardInput } from './dto/createBoard.input';
import {Board} from './entities/board.entity.js';

// @(데코레이터), : type (typescript),
@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

//   @Query(() => String)//graphql type
//   fetchBoards(): string { //typescript type
//     return this.boardService.aaa();
//   }
    @Query(()=> [Board])
    fetchBoards()  {
        return this.boardService.findAll()
    }

    @Mutation(()=> String)
    createBoard(
        @Args("writer") writer:String,
        @Args("title") title:String,
        @Args("contents") contents:String,
        @Args("createBoardInput") createBoardInput: createBoardInput
    ) {
        console.log(writer)
        console.log(title)
        console.log(contents)
        console.log(createBoardInput)
        return this.boardService.create()
    }
}
