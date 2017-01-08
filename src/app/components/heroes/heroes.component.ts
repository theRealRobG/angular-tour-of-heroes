import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../../../public/css/styles.css';

import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    public selectedHero: Hero;
    public heroes: Array<Hero>;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.getHeroes();
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    public delete(hero: Hero): void {
        this.heroService.delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            });
    }

    public getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
