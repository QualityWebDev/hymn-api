// src/hymn/hymn.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { HymnService } from './hymn.service';
import { Hymn } from './hymn.module';

@Controller('hymns')
export class HymnController {
  constructor(private readonly hymnService: HymnService) {}

  @Post()
  create(@Body() hymn: Hymn) {
    this.hymnService.addHymn(hymn);
  }

  @Get()
  findAll(): Hymn[] {
    return this.hymnService.getAllHymns();
  }
}
