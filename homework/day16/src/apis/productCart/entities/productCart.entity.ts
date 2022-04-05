import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'


@Entity()
export class ProductCart {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  productId: string
}
