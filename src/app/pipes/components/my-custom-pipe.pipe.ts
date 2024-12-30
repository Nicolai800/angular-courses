import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe',
})
export class MyCustomPipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }
}
