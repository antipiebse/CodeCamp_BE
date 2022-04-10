import { ProductSubCategoryModule } from './apis/productsSubCategory/productSubCategory.module';
import { ProductMainCategoryModule } from './apis/productsMainCategory/productMainCategory.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/boards/boards.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './apis/products/products.module';

@Module({//dependency
  imports: [
     BoardModule,
     ProductModule,ProductMainCategoryModule,
     ProductSubCategoryModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
         autoSchemaFile: 'src/common/graphql/schema.gql',
        }),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'my-database',
        port: 3306,
        username: 'root',
        password: 'root!',
        database: 'mydocker03',
        entities: [__dirname + '/apis/**/*.entity.*'],
        synchronize: true,
        logging: true,
      }),
    ],
//   controllers: [AppController],
//   providers: [AppService],
    
    // app모듈에서도 사용
})
export class AppModule {}
