import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  imports: [],
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.scss',
})
export class ChildDecoratorComponent {
  title = 'Hello';
  private _second = 'World';

  @ContentChild('childParagraph') paragraph?: ElementRef<HTMLParagraphElement>;

  ngAfterContentInit() {
    this.paragraph && console.log(this.paragraph);
  }
}
