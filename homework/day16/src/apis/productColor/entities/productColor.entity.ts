import { ProductDetail } from './../../productDetail/entities/productDetail.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'


@Entity()
export class ProductColor {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  color: string

  @ManyToOne(()=>ProductDetail)
  productDetail: ProductDetail
}
