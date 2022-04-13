import { UserModule } from './apis/users/user.module';
import { ProductModule } from './apis/products/product.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/boards/boards.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module.js';
import { AuthModule } from './apis/auth/auth.module';

@Module({//dependency
  imports: [
      AuthModule,
      BoardModule,
      ProductModule,
      ProductCategoryModule,
      UserModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
         autoSchemaFile: 'src/common/graphql/schema.gql',
         context: ({req,res}) => ({req, res}) //context의 req, res를 api에서 사용하기 위해 적용
        }),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'my-database',
        port: 3306,
        username: 'root',
        password: 'root!',
        database: 'mydocker02',
        entities: [__dirname + '/apis/**/*.entity.*'],
        synchronize: true,
        logging: true,
        // retryAttempts:5,
        // retryDelay:1000
      }),
    ],
//   controllers: [AppController],
//   providers: [AppService],
    
    // app모듈에서도 사용
})
export class AppModule {}
