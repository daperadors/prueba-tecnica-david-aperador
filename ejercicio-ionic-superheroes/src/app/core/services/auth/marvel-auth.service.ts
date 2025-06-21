import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseMarvelAuthService } from './base-marvel-auth.service';

@Injectable({
    providedIn: 'root'
})
export class MarvelAuthService extends BaseMarvelAuthService {

    getAuthParams(): HttpParams {
        const authData = this.generateAuthData();

        return new HttpParams()
            .set('ts', authData.timestamp)
            .set('apikey', authData.apikey)
            .set('hash', authData.hash);
    }
}