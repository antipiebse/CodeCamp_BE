import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'


@Entity()
@ObjectType()
export class ProductSaleslocation {
  @PrimaryGeneratedColumn("uuid")
  @Field(()=>String)
  id: string

  @Column() //{type: 'varchar'}
  @Field(()=>String)
  address: string

  @Column() //{type: 'varchar'}
  @Field(()=>String)
  addressDetail: string

  @Column() //{type: 'varchar'}
  @Field(()=>Float)
  lat: string

  @Column() //{type: 'varchar'}
  @Field(()=>Float)
  lng: string

  @Column() //{type: 'varchar'}
  @Field(()=> Date)
  meetingTime: string

  
}
