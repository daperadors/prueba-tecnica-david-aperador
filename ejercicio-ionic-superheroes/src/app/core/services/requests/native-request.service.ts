import { Injectable } from '@angular/core';
import { NativeMarvelAuthService } from '../auth/native-marvel-auth.service';
import { Plugins } from '@capacitor/core';
import { Observable, from } from 'rxjs';
import { HttpResponse } from '@capacitor-community/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const { Http } = Plugins;

@Injectable({
    providedIn: 'root'
})
export class NativeRequestService {

    constructor(private _nativeMarvelAuth: NativeMarvelAuthService) { }

    get(url: string, opts?: any): Observable<any> {
        const headers = this.extractHeaders(opts);
        let params = this.extractParams(opts);

        if (this._nativeMarvelAuth.needsMarvelAuth(url)) {
            params = this._nativeMarvelAuth.addAuthToParams(params);
        }

        return from(
            Http.request({
                method: 'GET',
                url,
                headers: headers,
                params: params
            })
        ).pipe(
            map((response: HttpResponse) => {
                return response.data;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    post(url: string, data?: any, opts?: any): Observable<any> {
        const headers = this.extractHeaders(opts);
        let params = this.extractParams(opts);

        if (this._nativeMarvelAuth.needsMarvelAuth(url)) {
            params = this._nativeMarvelAuth.addAuthToParams(params);
        }

        return from(
            Http.request({
                method: 'POST',
                url,
                headers: headers,
                data: data,
                params: params
            })
        ).pipe(
            map((response: HttpResponse) => response.data),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    put(url: string, data?: any, opts?: any): Observable<any> {
        const headers = this.extractHeaders(opts);
        let params = this.extractParams(opts);

        if (this._nativeMarvelAuth.needsMarvelAuth(url)) {
            params = this._nativeMarvelAuth.addAuthToParams(params);
        }

        return from(
            Http.request({
                method: 'PUT',
                url,
                headers: headers,
                data: data,
                params: params
            })
        ).pipe(
            map((response: HttpResponse) => response.data),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    patch(url: string, data?: any, opts?: any): Observable<any> {
        const headers = this.extractHeaders(opts);
        let params = this.extractParams(opts);

        if (this._nativeMarvelAuth.needsMarvelAuth(url)) {
            params = this._nativeMarvelAuth.addAuthToParams(params);
        }

        return from(
            Http.request({
                method: 'PATCH',
                url,
                headers: headers,
                data: data,
                params: params
            })
        ).pipe(
            map((response: HttpResponse) => response.data),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    delete(url: string, opts?: any): Observable<any> {
        const headers = this.extractHeaders(opts);
        let params = this.extractParams(opts);

        if (this._nativeMarvelAuth.needsMarvelAuth(url)) {
            params = this._nativeMarvelAuth.addAuthToParams(params);
        }

        return from(
            Http.request({
                method: 'DELETE',
                url,
                headers: headers,
                params: params
            })
        ).pipe(
            map((response: HttpResponse) => response.data),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    private extractHeaders(opts?: any): { [key: string]: string } {
        if (!opts || !opts.headers) {
            return { 'Content-Type': 'application/json' };
        }

        if (opts.headers.keys && typeof opts.headers.keys === 'function') {
            const headers: { [key: string]: string } = {};
            opts.headers.keys().forEach((key: string) => {
                headers[key] = opts.headers.get(key);
            });
            return headers;
        }

        return opts.headers || { 'Content-Type': 'application/json' };
    }

    private extractParams(opts?: any): { [key: string]: string } {
        if (!opts || !opts.params) {
            return {};
        }

        if (opts.params.keys && typeof opts.params.keys === 'function') {
            const params: { [key: string]: string } = {};
            opts.params.keys().forEach((key: string) => {
                params[key] = opts.params.get(key);
            });
            return params;
        }

        return opts.params || {};
    }
}