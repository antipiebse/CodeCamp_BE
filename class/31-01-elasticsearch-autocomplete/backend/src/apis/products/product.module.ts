import { ProductTag } from 'src/apis/productsTag/entities/productTag.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSaleslocation.entity';
import { Product } from './entities/product.entity';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { ProudctSubscriber } from './entities/product.subscriber';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [TypeOrmModule.forFeature([
    Product, 
    ProductSaleslocation, 
    ProductTag
  ]),
  ElasticsearchModule.register({
    node: 'http://elasticsearch:9200',
  })  
  ],
  providers: [
    ProductResolver, //
    ProductService,
    ProudctSubscriber,
  ],
})
export class ProductModule {}
