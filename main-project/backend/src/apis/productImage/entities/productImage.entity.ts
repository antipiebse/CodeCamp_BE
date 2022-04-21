import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn ,ManyToOne, Column} from 'typeorm';


@Entity()
@ObjectType()
export class ProductImage{
  @PrimaryGeneratedColumn("uuid")
  @Field(()=>String)
  id: string

  @Column() 
  @Field(()=>String)
  url: string

  @ManyToOne(()=>Product)
  @Field(()=> Product)
  product:Product
}