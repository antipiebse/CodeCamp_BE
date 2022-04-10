import { Module } from '@nestjs/common';
import { ProductSubCategoryResolver } from './productSubCategory.resolver';
import { ProductSubCategoryService} from './productSubCategory.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSubCategory } from './entities/productSubCategory.entity';

@Module({//dependenc삽압
//   imports: [],
//   controllers: [],
  imports: [TypeOrmModule.forFeature([
    ProductSubCategory,
  ])],
  providers: [
    ProductSubCategoryResolver,
    ProductSubCategoryService
  ],
})
export class ProductSubCategoryModule{}
