import { Component, OnInit } from '@angular/core';

import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public heroes: Array<Hero> = [];

    constructor(private heroService: HeroService) { }

    public ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
