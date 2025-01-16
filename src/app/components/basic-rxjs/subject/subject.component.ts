import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent {
  // sourse$ = new Subject();
  sourse$ = new BehaviorSubject<number | string>('start');
  sourseAsync$ = new AsyncSubject<number | string>();
  sourseReplay$ = new ReplaySubject<number | string>();

  ngOnInit(): void {
    this.sourse$.subscribe(console.log);
    this.sourse$.next(1);
    this.sourse$.next(5);
    this.sourse$.next(7);

    this.sourseAsync$.next(2);
    this.sourseAsync$.next(7);
    this.sourseAsync$.next('end');
    this.sourseAsync$.next('end2');
    this.sourseAsync$.complete();
    this.sourseAsync$.subscribe((val) => console.log('Async', val));

    this.sourseReplay$.next(2);
    this.sourseReplay$.next(4);
    this.sourseReplay$.next(6);
    this.sourseReplay$.next(8);
    this.sourseReplay$.next(10);
    this.sourseReplay$.next('end');
    this.sourseReplay$.subscribe(console.log);
  }
}
