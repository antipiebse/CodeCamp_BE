import { ProductTag } from 'src/apis/productsTag/entities/productTag.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSaleslocation.entity';
import { Product } from './entities/product.entity';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { ProudctSubscriber } from './entities/product.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([
    Product, 
    ProductSaleslocation, 
    ProductTag
  ])  
  ],
  providers: [
    ProductResolver, //
    ProductService,
    ProudctSubscriber,
  ],
})
export class ProductModule {}
