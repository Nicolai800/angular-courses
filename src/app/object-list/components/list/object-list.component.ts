import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-object-list',
  imports: [],
  templateUrl: './object-list.component.html',
  styleUrl: './object-list.component.scss',
})
export class ObjectListComponent {
  myObjects = myObjects;

  constructor(private router: Router) {}

  redirectTo(id: number) {
    this.router.navigate([`/object-list`, id]);
  }
}

export const myObjects: MyObject[] = [
  {
    title: 'My Title 1 ',
    content: 'My Content 1',
    id: 1,
  },
  {
    title: 'My Title 2',
    content: 'My Content 2',
    id: 2,
  },
  {
    title: 'My Title 3',
    content: 'My Content 3',
    id: 3,
  },
  {
    title: 'My Title 4',
    content: 'My Content 4',
    id: 4,
  },
  {
    title: 'My Title 5',
    content: 'My Content 5',
    id: 5,
  },
];

export interface MyObject {
  title: string;
  content: string;
  id: number;
}
