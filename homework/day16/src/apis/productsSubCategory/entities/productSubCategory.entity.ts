import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'
import { ProductMainCategory } from './../../productsMainCategory/entities/productMainCategory.entity';


@Entity()
export class ProductSubCategory {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  category: string

  @ManyToOne(() => ProductMainCategory)
  productMainCategoay: ProductMainCategory
}
