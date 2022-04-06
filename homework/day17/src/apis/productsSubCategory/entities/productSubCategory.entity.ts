import { ObjectType, Field } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'
import { ProductMainCategory } from '../../productsMainCategory/entities/productMainCategory.entity';


@ObjectType()
@Entity()
export class ProductSubCategory {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=> String)
  id: string

  @Column() 
  @Field(()=> String)
  category: string

  @ManyToOne(() => ProductMainCategory)
  @Field(()=>ProductMainCategory)
  productMainCategoay: ProductMainCategory
}
