import { ProductMainCategory } from './entities/productMainCategory.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductMainCategoryService {
  constructor(
    @InjectRepository(ProductMainCategory)
    private readonly productMainCategoryRepository: Repository<ProductMainCategory>,
  ){}
  async create({ category }){
    return  await this.productMainCategoryRepository.save({ category })
  }
}
