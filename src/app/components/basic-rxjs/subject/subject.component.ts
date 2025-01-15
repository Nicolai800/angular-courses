import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent {
  // sourse$ = new Subject();
  sourse$ = new BehaviorSubject<number | string>('start');

  ngOnInit(): void {
    this.sourse$.subscribe(console.log);
    this.sourse$.next(1);
    this.sourse$.next(5);
    this.sourse$.next(7);
  }
}
