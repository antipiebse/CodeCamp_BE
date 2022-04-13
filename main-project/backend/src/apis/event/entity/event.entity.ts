import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'
import { Product } from 'src/apis/products/entities/product.entity'

@Entity()
export class Event {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() //{type: 'varchar'}
  name: string

}
