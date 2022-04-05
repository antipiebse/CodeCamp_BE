import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm'
import { Product } from '../../products/entities/product.entity'

@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() //{type: 'varchar'}
  name: string

  @ManyToMany(() => Product, (products) => products.productTags)
  products: Product[]
}
