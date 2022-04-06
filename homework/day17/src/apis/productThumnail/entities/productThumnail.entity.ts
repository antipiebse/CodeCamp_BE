import { Product } from '../../products/entities/product.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'


@Entity()
export class ProductThumnail {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  thumnailimage: string

  @Column() 
  isthumnailimage: boolean

  @ManyToOne(()=>Product)
  Product:Product
}
