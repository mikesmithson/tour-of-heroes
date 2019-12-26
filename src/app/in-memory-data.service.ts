import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return {heroes: [
        {id: 11, name: 'Mr. Fantastic', quote: '"How Nice"'},
        {id: 12, name: 'Invisible Woman'},
        {id: 13, name: 'Thor'},
        {id: 14, name: 'Iron Man'},
        {id: 15, name: 'The Thing'},
        {id: 16, name: 'Captain America'},
        {id: 17, name: 'Wolverine'},
        {id: 18, name: 'Human Torch'},
        {id: 19, name: 'Dr. Strange'},
        {id: 20, name: 'Sub-Mariner'},
        {id: 21, name: 'The Hulk', quote: '"Hulk Smash!"', imageUrl: 'assets/images/hulk.jpg'}
      ]};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
