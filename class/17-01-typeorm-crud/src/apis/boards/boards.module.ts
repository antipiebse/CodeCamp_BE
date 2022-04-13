import { Module } from '@nestjs/common';
import { BoardResolver } from './boards.resolver';
import { BoardService } from './boards.service';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  providers: [BoardResolver, BoardService]
})
export class BoardModule {}
