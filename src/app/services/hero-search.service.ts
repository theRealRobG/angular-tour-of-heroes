import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) { }

    public search(term: string): Observable<Array<Hero>> {
        return this.http
            .get(`app/heroes/?name=${term}`)
            .map(r => r.json().data as Array<Hero>);
    }
}
