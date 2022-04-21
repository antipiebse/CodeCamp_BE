import { FileModule } from 'src/apis/file/file.module';
import { UserModule } from './apis/user/user.module';
import { ProductSubCategoryModule } from './apis/productsSubCategory/productSubCategory.module';
import { ProductMainCategoryModule } from './apis/productsMainCategory/productMainCategory.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './apis/products/products.module';
import { AuthModule } from './apis/auth/auth.module';
import { PaymentModule } from './apis/payment/payment.module';
import { ProductImageModule } from './apis/productImage/productImage.module';
@Module({//dependency
  imports: [
    AuthModule,
    FileModule,
     ProductModule,
     ProductMainCategoryModule,
     ProductSubCategoryModule,
     PaymentModule,
     ProductImageModule,
     UserModule,
     GraphQLModule.forRoot<ApolloDriverConfig>({
           driver: ApolloDriver,
        autoSchemaFile: 'src/common/graphql/schema.gql',
        context: ({req,res}) => ({req, res}) //context의 req, res를 api에서 사용하기 위해 적용
       }),
     TypeOrmModule.forRoot({
       type: 'mysql',
       host: 'my-database',
      //  host: 'localhost',
       port: 3306,
       username: 'root',
       password: 'root!',
      //  database: 'myproject02',
       database: 'mydocker03',
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
