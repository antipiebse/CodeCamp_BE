import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { BoardModule } from './apis/boards/boards.module.js';


@Module({//dependency
  imports: [
     BoardModule,
        GraphQLModule.forRoot({
      autoSchemaFile: 'src/common/graphql/schema.gql',})
    ],

})
export class AppModule {}
