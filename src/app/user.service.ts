import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isUserLogged = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggleLoginState() {
    this.isUserLogged.next(!this.isUserLogged.getValue());
  }
}
