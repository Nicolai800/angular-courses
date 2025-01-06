import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyChangeColorHostBinding]',
})
export class MyChangeColorHostBindingDirective {
  @HostBinding('style.color') color: string = 'red';
  @HostBinding('class.directive') class: boolean = true;

  @HostBinding('style.background') background: string = 'transparent';

  @HostListener('mouseenter') handleEnter() {
    this.background = this.getChangeColor();
  }

  @HostListener('mouseleave') handleLeave() {
    this.background = 'transparent';
  }

  constructor() {}

  ngAfterViewInit() {
    setInterval(() => {
      this.color = this.getChangeColor();
    }, 2000);
  }

  private getChangeColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
