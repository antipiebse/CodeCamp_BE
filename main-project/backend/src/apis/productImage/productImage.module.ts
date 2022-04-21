import { ProductImageService } from './productImage.service';
import { ProductImageResolver } from './productImage.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImage } from './entities/productImage.entity';
import { Product } from '../products/entities/product.entity';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  imports: [TypeOrmModule.forFeature([
    ProductImage,
    Product
  ])],

  providers: [
    ProductImageResolver, ProductImageService
  ]
})
export class ProductImageModule{}
