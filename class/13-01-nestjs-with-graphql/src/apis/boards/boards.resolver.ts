//controller
import { Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';


// @(데코레이터), : type (typescript),
@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => String)//graphql type
  fetchBoards(): string { //typescript type
    return this.boardService.aaa();
  }
}
