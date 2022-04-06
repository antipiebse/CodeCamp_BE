import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'


@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  password: string

  @Column()
  email: String

  @Column()
  phone: String

  @Column()
  address: String

  @Column()
  presonal: String

  @Column()
  nickname: String

  @Column()
  profilePhoto: String

  @Column()
  isPhoto: boolean

  @Column()
  firstMessage: String
}
