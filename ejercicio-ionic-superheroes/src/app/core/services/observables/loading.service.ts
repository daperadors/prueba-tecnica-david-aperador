import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private readonly INIT_STATE: boolean = false;
  private readonly loadingSubject = new BehaviorSubject<boolean>(this.INIT_STATE);

  public readonly loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {}

  get(): boolean {
    return this.loadingSubject.getValue();
  }

  set(loading: boolean): void {
    if (typeof loading === 'boolean') {
      this.loadingSubject.next(loading);
    }
  }
}
