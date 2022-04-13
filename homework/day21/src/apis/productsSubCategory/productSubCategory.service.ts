import { ProductSubCategory } from './entities/productSubCategory.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductSubCategoryService {
  constructor(
    @InjectRepository(ProductSubCategory)
    private readonly productSubCategoryRepository: Repository<ProductSubCategory>,
  ){}
  async create({ category, productMainCategoryId }){
    return await this.productSubCategoryRepository.save({ category, productMainCategory: { id:productMainCategoryId},})
  }
}
