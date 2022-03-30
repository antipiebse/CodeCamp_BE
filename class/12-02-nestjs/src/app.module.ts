import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({//dependenc삽압
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
