import { Module } from '@nestjs/common';
import {  AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { ApolloFederationDriver, ApolloFederationDriverConfig} from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver, 
      autoSchemaFile: 'src/common/graphql/schema.gql',
    })
  ],
  // controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
