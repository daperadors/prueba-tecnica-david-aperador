import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from '../services/observables/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private _loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadingService.set(true);
    return next.handle(req).pipe(
      tap(() => {}),
      finalize(() => {this._loadingService.set(false)})
    );
  }
}
