import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe(newHero => {
      this.heroes.push(newHero);
    });

  }

  delete(hero: Hero) {
    this.heroService.deleteHero(hero).subscribe();
  }
}
