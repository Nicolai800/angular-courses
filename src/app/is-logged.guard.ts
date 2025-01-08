import { inject, Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from './user.service';

export const isLoggedGuardFn: CanActivateFn = (route, state) => {
  return inject(UserService).isUserLogged;
};
