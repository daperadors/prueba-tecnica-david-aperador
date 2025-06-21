import { Injectable } from "@angular/core";
import { catchError, map } from 'rxjs/operators';
import { throwError } from "rxjs";
import { Hero } from "../models/hero.model";
import { RequestService } from "@/app/core/services/requests/request.service";
import { MarvelApiResponse } from "@/app/core/models/marvel-api-response.model";

@Injectable({
    providedIn: 'root'
})
export class HeroesApiService {

    private _endpoint = '/characters';

    constructor(
        private _request: RequestService
    ) { }

    async getHeroes(): Promise<MarvelApiResponse<Hero>> {
        return this._request.get({ url: this._endpoint }).pipe(
            map(apiData => MarvelApiResponse.createHeroResponse(apiData)),
            catchError(err => {
                return throwError(err);
            })
        ).toPromise();
    }
}