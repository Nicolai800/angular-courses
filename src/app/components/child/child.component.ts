import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() title?: string;
  @Output() eventChange = new EventEmitter<string>();

  tempTitle?: string;

  constructor() {
    console.log('1.Constructor');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('2.ngOnChanges');
    console.log(changes);
  }
  ngOnInit() {
    this.tempTitle = this.title;
    console.log('3.ngOnInit');
  }
  ngDoCheck() {
    console.log('4.ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('5.ngAfterContentInit');
  }
  ngAfretContentChecked() {
    console.log('6.ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('7.ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('8.ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('9.ngOnDestroy');
  }

  clickHendler() {
    this.tempTitle =
      this.tempTitle === 'Message from Parent'
        ? 'I am mutated!'
        : 'Message from Parent';
    this.eventChange.emit(this.tempTitle);
  }
}
