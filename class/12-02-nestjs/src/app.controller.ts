import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


// @(데코레이터), : type (typescript),
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')//localhost:3000/
  getHello(money1: number, money2:number, unit): string {
    return this.appService.getHello();
  }
}
