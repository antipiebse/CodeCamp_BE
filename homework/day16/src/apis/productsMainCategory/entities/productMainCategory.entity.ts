import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'


@Entity()
export class ProductMainCategory {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() 
  category: string
}
