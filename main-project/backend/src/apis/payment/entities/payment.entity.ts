import { Field, ObjectType, registerEnumType, Int} from "@nestjs/graphql"
import { User } from "src/apis/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"



export enum PAYMENT_STATUS_ENUM{
  PAYMENT = 'PAYMENT',
  CANCEL  = 'CANCEL',
}
//결제는 수정과 삭제가 없고 등록만 가능해야한다!
registerEnumType(PAYMENT_STATUS_ENUM, {
  name:'PAYMENT_STATUS_ENUM'
})

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(()=> String)
  id: string

  @Column()
  @Field(()=> String)
  impUid: string

  @Column()
  @Field(()=> Int)
  amount: number

  @Column({ type: "enum", enum: PAYMENT_STATUS_ENUM}) 
  @Field(()=> PAYMENT_STATUS_ENUM)
  status: PAYMENT_STATUS_ENUM 

  @ManyToOne(()=> User)
  @Field(()=> User)
  user: User

  @CreateDateColumn()
  @Field(()=> Date)
  createdAt: Date
}