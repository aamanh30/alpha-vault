import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  isLoading = new BehaviorSubject(false);
  constructor() {}

  getLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  updateLoading(loading: boolean): void {
    this.isLoading.next(loading);
  }
}
