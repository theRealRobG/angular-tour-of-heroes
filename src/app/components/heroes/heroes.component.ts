import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../../../public/css/styles.css';

import { Hero } from '../../hero';
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

    public getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
