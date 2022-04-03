import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/boards/boards.module.js';
import { Board } from './apis/boards/entities/board.entity.js'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({//dependency
  imports: [
     BoardModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
         autoSchemaFile: 'src/common/graphql/schema.gql',
        }),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'mydocker02',
        entities: [Board],
        synchronize: true,
        logging: true,
      }),



    ],
//   controllers: [AppController],
//   providers: [AppService],
    
    // app모듈에서도 사용
})
export class AppModule {}
