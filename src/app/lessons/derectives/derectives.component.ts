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
    'white',
    'blue',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'green',
  ];

  isShow: boolean = true;

  currentColor: string = this.colors[0];

  elementStyle: any = {
    color: 'var(--light-color)',
    opacity: 0.5,
    border: '1px solid var(--light-color)',
    padding: '10px',
  };
}
