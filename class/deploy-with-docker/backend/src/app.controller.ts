import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


// @(데코레이터), : type (typescript),
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')//localhost:3000/
  getHello(): string {
    console.log('helloeeee')
    return this.appService.getHello();
  }
}
