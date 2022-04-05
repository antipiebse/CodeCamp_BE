import { cp } from 'fs';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'


@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  email: String

  @Column()
  password: string
}
