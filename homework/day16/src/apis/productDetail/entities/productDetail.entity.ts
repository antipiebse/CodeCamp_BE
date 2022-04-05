import { Product } from './../../products/entities/product.entity';
import { Column, PrimaryGeneratedColumn, Entity, JoinColumn, OneToOne } from 'typeorm'


@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  season: string

  @Column() 
  gender: string

  @Column() 
  size: string

  @Column()
  brand: string

  @Column() 
  origin: string

  @JoinColumn()
  @OneToOne(()=>Product)
  product: Product
}
