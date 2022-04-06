import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  imports: [TypeOrmModule.forFeature([Product])],

  providers: [ProductsResolver, ProductsService]
})
export class ProductModule{}
