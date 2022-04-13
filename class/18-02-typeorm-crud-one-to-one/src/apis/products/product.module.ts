import { ProductSaleslocation } from '../productsSalesloctation/entities/productSaleslocation.entity';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import {ProductResolver} from './product.resolver'
import {ProductService} from './product.service'
@Module({
    imports: [TypeOrmModule.forFeature([Product, ProductSaleslocation])],
    providers:[
      ProductResolver, 
      ProductService,
    ],
})
export class ProductModule{}