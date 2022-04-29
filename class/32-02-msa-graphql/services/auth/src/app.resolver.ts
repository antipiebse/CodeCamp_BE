import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Mutation(()=> String)
  login() {
    return 'login 성공!!'
  }
}
