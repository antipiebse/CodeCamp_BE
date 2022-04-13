import { ProductCategory } from './entities/productCategory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import {ProductCategoryResolver} from './productCategory.resolver'
import {ProductCategoryService} from './productCategory.service'
@Module({
    imports: [TypeOrmModule.forFeature([ProductCategory])],
    providers:[
      ProductCategoryResolver, 
      ProductCategoryService
    ],
})
export class ProductCategoryModule{}