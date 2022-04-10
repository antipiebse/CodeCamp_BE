import { ProductDetailResolver } from './productDetail.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetailService } from './productDetail.service';
import { ProductDetail } from './entities/productDetail.entity';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  imports: [TypeOrmModule.forFeature([
    ProductDetail,
  ])],

  providers: [
    ProductDetailResolver, ProductDetailService
  ]
})
export class ProductDetailModule{}
