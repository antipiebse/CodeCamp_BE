import { ProductSubCategory } from '../productsSubCategory/entities/productSubCategory.entity'
import { Module } from '@nestjs/common';
import { ProductMainCategoryResolver } from './productMainCategory.resolver';
import { ProductMainCategoryService} from './productMainCategory.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductMainCategory } from './entities/productMainCategory.entity';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  imports: [TypeOrmModule.forFeature([ProductMainCategory])],
  providers: [
    ProductMainCategoryResolver,
    ProductMainCategoryService
  ],
})
export class ProductMainCategoryModule{}
