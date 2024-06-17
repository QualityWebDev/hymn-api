import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Hymn } from './hymn/hymn.module';

@Module({
  imports: [Hymn],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
