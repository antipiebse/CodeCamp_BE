import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import {ProductResolver} from './product.resolver'
import {ProductService} from './product.service'
@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers:[
      ProductResolver, 
      ProductService,
    ],
})
export class ProductModule{}