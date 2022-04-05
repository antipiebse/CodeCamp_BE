import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  providers: [ProductsResolver, ProductsService]
})
export class ProductModule {}
