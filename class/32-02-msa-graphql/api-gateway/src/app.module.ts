import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ApolloGatewayDriverConfig, ApolloGatewayDriver} from '@nestjs/apollo'
import { IntrospectAndCompose} from '@apollo/gateway'
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'auth',
              url: 'http://auth-service:3001/graphql'
            },
            {
              name: 'resource',
              url: 'http://resource-service:3002/graphql'
            }
          ]
        })
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//graphql을 사용하기 위해 apllo와  graphql설치!!
//restapi와 달리 graphql은 단순히 연결만 시켜준다.
// 3000번 주소로 playground를 들어가면 3001번과 3002번을 합친 데이터가 출력된다.