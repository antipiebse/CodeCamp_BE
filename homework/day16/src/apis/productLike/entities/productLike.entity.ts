import { ProductDetail } from './../../productDetail/entities/productDetail.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'


@Entity()
export class ProductLike {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  grade: string

  @Column() 
  review: string

  @Column() 
  like: number

  @Column()
  isdiscount: string

  @Column() 
  discount: number

  @Column()
  ranking: number

  @Column()
  sales_rate: string

  @ManyToOne(()=>ProductDetail)
  productDetail:ProductDetail
}
