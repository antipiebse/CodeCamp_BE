import { ProductSubCategory } from '../productsSubCategory/entities/productSubCategory.entity';
import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductDetail } from '../productDetail/entities/productDetail.entity';
import { ProductMainCategory } from '../productsMainCategory/entities/productMainCategory.entity';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  imports: [TypeOrmModule.forFeature([
    Product,
    ProductDetail,
  ])],


  providers: [ProductsResolver, ProductsService]
})
export class ProductModule{}
