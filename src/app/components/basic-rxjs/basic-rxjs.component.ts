import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

export const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const users = {
  data: [
    {
      gender: 'male',
      age: 18,
    },
    {
      gender: 'female',
      age: 19,
    },
    {
      gender: 'male',
      age: 28,
    },
    {
      gender: 'female',
      age: 17,
    },
    {
      gender: 'frmale',
      age: 31,
    },
    {
      gender: 'male',
      age: 27,
    },
    {
      gender: 'female',
      age: 28,
    },
  ],
};

@Component({
  selector: 'app-basic-rxjs',
  imports: [],
  templateUrl: './basic-rxjs.component.html',
  styleUrl: './basic-rxjs.component.scss',
})
export class BasicRxjsComponent {
  observable$ = new Observable<number[]>((subscriber) => {
    subscriber.next(arr);
    // subscriber.next(51);
    // setTimeout(() => {
    //   subscriber.next(52);
    // }, 1000);
    // setTimeout(() => {
    //   subscriber.error(53);
    // }, 2000);
  });

  observer = {
    next: (value?: number[]) => {
      console.log('next ' + value);
    },
    error: (error?: Error) => console.log('error' + error),

    complete: () => {
      console.log('Stream is complete');
    },
  };
  constructor() {
    this.observable$
      .pipe(
        map((arr) => {
          console.log('map 1');

          return arr.map((val) => val * 2);
        }),
        map((arr) => {
          console.log('map 2');

          return arr.map((val) => val / 2);
        })
      )
      .subscribe(this.observer);
  }
}
