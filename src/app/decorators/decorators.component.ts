import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildDecoratorComponent } from './child-decorator/child-decorator.component';

@Component({
  selector: 'app-decorators',
  imports: [CommonModule, ChildDecoratorComponent],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.scss',
})
export class DecoratorsComponent {
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  isShow: boolean = true;

  changeShow() {
    this.isShow = !this.isShow;
  }

  @ViewChild('paragraph') paragraphLorem?: ElementRef<HTMLParagraphElement>;
  @ViewChild('component') childComponent?: ChildDecoratorComponent;

  @ViewChildren(ChildDecoratorComponent)
  childComponents?: QueryList<ChildDecoratorComponent>;

  ngAfterViewInit() {
    // console.log(this.paragraphLorem);
    // console.log(this.childComponents);
  }
}
