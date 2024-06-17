import { Module } from '@nestjs/common';
import { HymnService } from './hymn.service';
import { HymnController } from './hymn.controller';

@Module({
  providers: [HymnService],
  controllers: [HymnController]
})
export class Hymn {
    id: number;
    title: string;
    author: string;
    description: string;
    content: string;
  }
