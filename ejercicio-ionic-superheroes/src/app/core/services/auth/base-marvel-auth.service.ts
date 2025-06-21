import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable()
export abstract class BaseMarvelAuthService {
    protected lastTimestamp: string = '';
    protected lastHash: string = '';
    protected lastTimeChecked: number = 0;
    protected readonly cacheDuration: number = 5000;

    protected generateAuthData(): { timestamp: string; hash: string; apikey: string } {
        const now = Date.now();

        if (now - this.lastTimeChecked > this.cacheDuration) {
            this.lastTimestamp = now.toString();
            this.lastHash = Md5.hashStr(
                this.lastTimestamp + environment.privateKey + environment.publicKey
            ).toString();
            this.lastTimeChecked = now;
        }

        return {
            timestamp: this.lastTimestamp,
            hash: this.lastHash,
            apikey: environment.publicKey
        };
    }

    needsMarvelAuth(url: string): boolean {
        return url.includes(environment.api);
    }
}