import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarvelAuthService } from '../services/auth/marvel-auth.service';

@Injectable()
export class MarvelAuthInterceptor implements HttpInterceptor {
  constructor(private _marvelAuthService: MarvelAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes(environment.api)) {
      return next.handle(req);
    }

    const params = this._marvelAuthService.getAuthParams();
    const authReq = req.clone({ params });
    return next.handle(authReq);
  }
}
