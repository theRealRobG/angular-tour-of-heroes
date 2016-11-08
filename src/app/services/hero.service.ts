import { Injectable } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {
    public getHeroes(): Promise<Array<Hero>> {
        return Promise.resolve(HEROES);
    }

    public getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}
