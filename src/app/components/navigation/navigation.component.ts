import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  _userService = inject(UserService);
  toggleLogin() {
    this._userService.toggleLoginState();
    this.loginState = this._userService.isUserLogged.value;
  }

  loginState = false;

  isNavShow = false;
  toggleNav() {
    this.isNavShow = !this.isNavShow;
  }
}
