import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'


@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() //{type: 'varchar'}
  name: string
}
