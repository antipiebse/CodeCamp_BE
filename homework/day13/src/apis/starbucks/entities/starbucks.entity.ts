import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'


@Entity()
@ObjectType()
export class Starbucks {
    @PrimaryGeneratedColumn("increment")
    @Field(() => Int)
    number: number;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(()=> String)
    price: string;

    @Column()
    @Field(()=> String)
    kcal: string;

    @Column()
    @Field(()=> String)
    saturatedFat: string

    @Column()
    @Field(()=> String)
    protein: string

    @Column()
    @Field(()=> String)
    Na: string

    @Column()
    @Field(()=> String)
    sugars: string

    @Column()
    @Field(()=> String)
    Caffeine: string
}