import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from './user.service';
import { map } from 'rxjs';

export const isLoggedGuardFn: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  return userService.isUserLogged.pipe(
    map((isLogged) => {
      if (!isLogged) {
        alert('Please click login to access this page');
      }
      return isLogged;
    })
  );
};
