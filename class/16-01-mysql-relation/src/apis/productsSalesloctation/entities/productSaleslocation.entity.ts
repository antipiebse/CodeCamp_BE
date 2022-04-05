import { cp } from 'fs';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'


@Entity()
export class ProductSaleslocation {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column() //{type: 'varchar'}
  name: string

}
