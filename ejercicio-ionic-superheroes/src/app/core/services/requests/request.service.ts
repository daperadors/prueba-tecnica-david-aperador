import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { environment } from '@/environments/environment';
import { NativeRequestService } from './native-request.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private _entryPoint: string;
  private _isNative: boolean;

  constructor(
    private _http: HttpClient,
    private _httpNative: NativeRequestService,
    private _platform: Platform
  ) {
    this._entryPoint = environment.endpoint;
    this._isNative = this._platform.is('capacitor') && !this._platform.is('mobileweb');
  }

  private getURL(url: string): string {
    return `${this._entryPoint}${url}`;
  }

  get({ url, opts }: IGet): Observable<any> {
    if (this._isNative) {
      return this._httpNative.get(this.getURL(url), opts);
    }
    return this._http.get(this.getURL(url), opts);
  }

  post({ url, data, opts }: IPost): Observable<any> {
    if (this._isNative) {
      return this._httpNative.post(this.getURL(url), data, opts);
    }
    return this._http.post(this.getURL(url), data, opts);
  }

  put({ url, data, opts }: IPut): Observable<any> {
    if (this._isNative) {
      return this._httpNative.put(this.getURL(url), data, opts);
    }
    return this._http.put(this.getURL(url), data, opts);
  }

  patch({ url, data, opts }: IPatch): Observable<any> {
    if (this._isNative) {
      return this._httpNative.patch(this.getURL(url), data, opts);
    }
    return this._http.patch(this.getURL(url), data, opts);
  }

  delete({ url, opts }: IDelete): Observable<any> {
    if (this._isNative) {
      return this._httpNative.delete(this.getURL(url), opts);
    }
    return this._http.delete(this.getURL(url), opts);
  }
}

interface IGet {
  url: string;
  opts?: any;
}

interface IPost {
  url: string;
  data?: any;
  opts?: any;
}

interface IPut {
  url: string;
  data?: any;
  opts?: any;
}

interface IPatch {
  url: string;
  data?: any;
  opts?: any;
}

interface IDelete {
  url: string;
  opts?: any;
}