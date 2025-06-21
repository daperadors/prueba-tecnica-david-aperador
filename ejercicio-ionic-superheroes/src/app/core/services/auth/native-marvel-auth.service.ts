import { Injectable } from '@angular/core';
import { BaseMarvelAuthService } from './base-marvel-auth.service';

@Injectable({
    providedIn: 'root'
})
export class NativeMarvelAuthService extends BaseMarvelAuthService {

    getAuthParams(): { [key: string]: string } {
        const authData = this.generateAuthData();

        return {
            'ts': authData.timestamp,
            'apikey': authData.apikey,
            'hash': authData.hash
        };
    }

    addAuthToParams(existingParams?: { [key: string]: string }): { [key: string]: string } {
        const authParams = this.getAuthParams();
        return existingParams ? { ...existingParams, ...authParams } : authParams;
    }
}