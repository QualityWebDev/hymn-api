import { Injectable } from '@nestjs/common';
import { Hymn } from './hymn.module';

@Injectable()
export class HymnService {
  private hymns: Hymn[] = [];

  addHymn(hymn: Hymn): void {
    this.hymns.push(hymn);
  }

  getAllHymns(): Hymn[] {
    return this.hymns;
  }
  
  //delete one hymn
  deleteHymn(hymnId: number): void {
    this.hymns = this.hymns.filter(hymn => hymn.id !== hymnId);
  }
}