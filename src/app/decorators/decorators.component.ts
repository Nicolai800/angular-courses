import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decorators',
  imports: [CommonModule],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.scss',
})
export class DecoratorsComponent {
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  isShow: boolean = true;

  changeShow() {
    this.isShow = !this.isShow;
  }
}
