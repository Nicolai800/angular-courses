import { Component, inject } from '@angular/core';
import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  elementAt,
  filter,
  from,
  interval,
  last,
  map,
  Observable,
  of,
  skip,
  skipLast,
  skipUntil,
  take,
  takeUntil,
  timer,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SubjectComponent } from './subject/subject.component';

export const arr: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];
export const arr2: number[] = [
  1, 1, 2, 2, 3, 4, 5, 6, 1, 5, 5, 6, 6, 6, 6, 6, 7, 8,
];

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
      age: 22,
    },
    {
      gender: 'male',
      age: 15,
    },
    {
      gender: 'male',
      age: 45,
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
  imports: [CommonModule, SubjectComponent],
  templateUrl: './basic-rxjs.component.html',
  styleUrl: './basic-rxjs.component.scss',
})
export class BasicRxjsComponent {
  sourse$ = from(arr);
  sourse2$ = from(arr2);
  sourse3$ = of(1, 5, 7, 6, 2, 5, 8, 4, 5, 2, 6, 8);
  sourse4$ = interval(1000);
  // sourseLast$ = from(arr);
  // sourseDistinct$ = from(arr);

  usersObservable$ = of(users.data);
  usersObservable2$ = from(users.data);
  usersFromjsonplaceholder$?: Observable<any>;
  http = inject(HttpClient);
  maleAvegeAge$?: Observable<number>;

  ngOnInit(): void {
    this.maleAvegeAge$ = this.getMaleAverageAge();
    this.usersFromjsonplaceholder$ = this.http.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    this.sourse$.pipe(take(4)).subscribe((val) => console.log('take', val));
    this.sourse$
      .pipe(last((el) => el % 2 === 0))
      .subscribe((val) => console.log('last', val));
    this.sourse$
      .pipe(distinct())
      .subscribe((val) => console.log('distinct', val));
    this.sourse2$
      .pipe(distinctUntilChanged())
      .subscribe((val) => console.log('distinct until', val));
    this.usersObservable2$
      .pipe(distinctUntilKeyChanged('gender'))
      .subscribe((val) => console.log('distinct until key', val));

    this.sourse3$
      .pipe(filter((el) => el % 2 === 0))
      .subscribe((val) => console.log('filter', val));
    this.sourse3$
      .pipe(elementAt(4))
      .subscribe((val) => console.log('index 4', val));
    this.sourse3$.pipe(skip(4)).subscribe((val) => console.log('skip 4', val));
    this.sourse3$
      .pipe(skipLast(4))
      .subscribe((val) => console.log('skip last 4', val));
    this.sourse4$
      .pipe(skipUntil(timer(4000)), takeUntil(timer(10000)))
      .subscribe((val) => console.log('skip until 4sek', val));
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
