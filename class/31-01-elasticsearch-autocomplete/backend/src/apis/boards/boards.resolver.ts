import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';
import {Cache} from 'cache-manager'
import { CACHE_MANAGER, Inject } from '@nestjs/common';


@Resolver()
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache
  ) {}

  @Query(() => [Board])
  fetchBoards() {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  async createBoard(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    // await this.cacheManager.set("aaa", writer)//key value형태로 저장


    // /////////////캐시 테스트!! 등록 조회 연습!///////////////////
    await this.cacheManager.set("bbb", createBoardInput,
    {
      ttl: 0, //저장하는 시간!
    })//객체도 그냥 저장 가능!! 
    const mycache = await this.cacheManager.get('bbb') ///aaa에 있는 값 가져오기
    console.log(mycache)

    // 레디스 연습을 위해 주석걸기!!
    
    // console.log(writer);
    // console.log(title);
    // console.log(contents);
    // console.log(createBoardInput);
    // return this.boardService.create();
    return '캐시 테스트 중!!!'
    ///////////////////////////////////////////
  }
}
