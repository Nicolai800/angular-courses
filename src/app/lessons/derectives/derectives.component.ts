import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-derectives',
  imports: [CommonModule],
  templateUrl: './derectives.component.html',
  styleUrl: './derectives.component.scss',
})
export class DerectivesComponent {
  colors: string[] = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'black',
    'white',
  ];

  isShow: boolean = true;

  currentColor: string = this.colors[0];

  elementStyle: any = {
    color: 'blue',
    opacity: 0.5,
    border: '1px solid black',
  };
}
