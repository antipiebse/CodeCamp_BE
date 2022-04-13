import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'


@Entity()//테이블 생성
@ObjectType()
export class Board {
    @PrimaryGeneratedColumn("increment")//컬럼 생성
    @Field(() => Int)// 그래프ql용
    number: number;

    @Column()
    @Field(()=> String)
    writer: string;

    @Column()
    @Field(()=> String)
    title: string;

    @Column()
    @Field(()=> String)
    contents: string;
}