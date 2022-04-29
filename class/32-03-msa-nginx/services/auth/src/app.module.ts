import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import {  AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver} from '@nestjs/apollo'


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, 
      autoSchemaFile: 'src/common/graphql/schema.gql',
    })
  ],
  // controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
