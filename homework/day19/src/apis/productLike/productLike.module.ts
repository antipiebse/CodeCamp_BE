import { ProductLikeService } from './productLike.service';
import { ProductLikeResolver } from './productLike.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductLike } from './entities/productLike.entity';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  imports: [TypeOrmModule.forFeature([
    ProductLike,
  ])],

  providers: [
    ProductLikeResolver, ProductLikeService
  ]
})
export class ProductLikeModule{}
