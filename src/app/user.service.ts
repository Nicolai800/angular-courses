import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isUserLogged = new BehaviorSubject<boolean>(false);

  constructor() {}

  login() {
    this.isUserLogged.next(true);
  }
}
