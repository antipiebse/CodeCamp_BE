import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StarbucksModule } from './apis/starbucks/starbucks.module';
import { Starbucks} from './apis/starbucks/entities/starbucks.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({//dependency
  imports: [
    StarbucksModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
         autoSchemaFile: 'src/common/graphql/schema.gql',
        }),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 's3785311!',
        database: 'myproject02',
        entities: [Starbucks],
        synchronize: true,
        logging: true,

      }),



    ],
//   controllers: [AppController],
//   providers: [AppService],
        
    // app모듈에서도 사용
})
export class AppModule {}
