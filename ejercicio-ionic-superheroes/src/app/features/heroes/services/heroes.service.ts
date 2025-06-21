import { Injectable } from "@angular/core";
import { MarvelApiResponse } from "../../../features/heroes/models/marvel-api-response.model";
import { catchError, map } from 'rxjs/operators';
import { throwError } from "rxjs";
import { RequestService } from "src/app/core/services/requests/request.service";

@Injectable({
    providedIn: 'root'
})
export class HeroesApiService {

    private _endpoint = '/characters';

    constructor(
        private _request: RequestService
    ) { }

    async getHeroes(): Promise<MarvelApiResponse> {
        return this._request.get({ url: this._endpoint }).pipe(
            map(apiData => new MarvelApiResponse(apiData)),
            catchError(err => {
                return throwError(err);
            })
        ).toPromise();
    }
}