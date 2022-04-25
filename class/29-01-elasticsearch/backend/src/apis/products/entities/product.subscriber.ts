import {Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent} from'typeorm'
import { Product } from './product.entity';
import {BigQuery} from '@google-cloud/bigquery'
import { encode } from 'punycode';


//해당 클래스가 구독이 된다!

@EventSubscriber()
export class ProudctSubscriber implements EntitySubscriberInterface<Product>{
  constructor(connection:Connection){
    connection.subscribers.push(this)//db에 연결해서 감시
  }
  listenTo(): string | Function {//프로덕트 테이블을 읽는다.
    return Product
  }
  
  afterInsert(event: InsertEvent<Product>){
    console.log(event)//log는 보통 mysql에 남기지 않는다. 사이즈도 크고 양도 많기 때문이다.
    const bigQuery = new BigQuery({
      projectId:"back01-347705",
      keyFilename:"Big_query.json"
    })
    bigQuery
      .dataset("mybigquery02")//데이터베이스 이름
      .table("productlog")//테이블 이름
      .insert ([
      {
        id: event.entity.id,
        name: event.entity.name,
        description: event.entity.description,
        price: event.entity.price,
        isSoldout: event.entity.isSoldout,
      },//insert하고싶은 데이터
      //로그는 단순 기록이라 db에 저장하지 않는다!
      
    ])
  }

}