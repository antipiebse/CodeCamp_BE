import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductTag } from '../productsTag/entities/productTag.entity';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [TypeOrmModule.forFeature([
    Product,
    ProductTag
  ]),
  ElasticsearchModule.register({
    node: 'http://elasticsearch:9200',
  })
  ],


  providers: [ProductsResolver, ProductsService]
})
export class ProductModule{}
