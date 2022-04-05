import { Module } from '@nestjs/common';
import { StarbucksResolver } from './starbucks.resolver';
import { StarbucksService } from './starbucks.service';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  providers: [StarbucksResolver, StarbucksService]
})
export class StarbucksModule {}
