import { Component, inject } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface User {
  gender: 'male' | 'female';
  age: number;
}

export const users: { data: User[] } = {
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
      age: 25,
    },
    {
      gender: 'female',
      age: 20,
    },
    {
      gender: 'female',
      age: 31,
    },
    {
      gender: 'male',
      age: 22,
    },
    {
      gender: 'female',
      age: 28,
    },
  ],
};
// Filtered by male and then return an average age

@Component({
  selector: 'app-basic-rxjs',
  imports: [CommonModule],
  templateUrl: './basic-rxjs.component.html',
  styleUrl: './basic-rxjs.component.scss',
})
export class BasicRxjsComponent {
  usersObservable$ = of(users.data);
  usersFromjsonplaceholder$?: Observable<any>;
  http = inject(HttpClient);

  maleAvegeAge$?: Observable<number>;
  ngOnInit(): void {
    this.maleAvegeAge$ = this.getMaleAverageAge();
    this.usersFromjsonplaceholder$ = this.http.get(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getMaleAverageAge(): Observable<number> {
    return this.usersObservable$.pipe(
      map((usersData) => {
        const males = usersData.filter((item) => item.gender === 'male');
        const totalAge = males.reduce((acc, item) => acc + item.age, 0);
        return Math.floor(totalAge / males.length);
      })
    );
  }

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
