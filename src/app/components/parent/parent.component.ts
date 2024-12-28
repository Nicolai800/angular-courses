import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  message: string = 'Message from Parent';

  isShow: boolean = true;

  handleEvent(value: string) {
    this.message = value;
  }
}
