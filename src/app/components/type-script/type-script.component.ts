import { Component } from '@angular/core';
export enum Direction {
  Up,
  Down,
  Left,
  Right,
}
export enum links {
  githab = 'https://github.com/Nicolai800',
  linkedIn = 'https://www.linkedin.com/in/nicolai-parshutin-4670342b0/',
  youTube = 'https://www.youtube.com',
}
export const enum links2 {
  githab = 'https://github.com/Nicolai800',
  linkedIn = 'https://www.linkedin.com/in/nicolai-parshutin-4670342b0/',
  youTube = 'https://www.youtube.com',
}
// Interfave & Type
export interface CustomType {
  name: string;
  age?: number; // <-- Optional
}
export type User = {
  name: string;
  age: number;
};
export interface ExtendedType extends CustomType {
  readonly email: string; // <-- Can't be changed
}
export interface User3 {
  name: string;
  age: number;
  [propName: string]: any;
}
export type User2 = [id: number, name: string, isActive: boolean];
@Component({
  selector: 'app-type-script',
  imports: [],
  templateUrl: './type-script.component.html',
  styleUrl: './type-script.component.scss',
})
export class TypeScriptComponent {
  // Muilitype Type-----------------------------------
  id: number | string = 1;

  // Array Type-----------------------------------
  list: number[] = [1, 2, 3];
  list2: Array<number> = [1, 2, 3]; // Generic Type

  // Tuple Type--------------------------------
  tuple: [number, string] = [1, 'hello']; // One line
  tuple2?: [number, string]; // Multiple line
  //this.tuple2 = [1, 'hello'];
  user: User2 = [1, 'Nick', true];

  // Any Type-----------------------------------
  anyType: [any, any, any] = [1, 'hello', true];
  anyType2: Array<any> = [1, 'hello', true];

  // Enum Type-----------------------------------
  //console.log(Object.keys(Direction)); // ['Up', 'Down', 'Left', 'Right']
  // Direction[0]; Up
  // Direction[1]; Down
  // Direction[2]; Left
  // Direction[3]; Right
  //console.log(Object.values(Direction)); // [0, 1, 2, 3]
  //console.log(links.githab);

  // Never Type-----------------------------------
  // Function return Error
  message: string = 'hello';
  error = (message: string): never => {
    throw new Error(message);
  };
  // Function infinite loop
  infiniteLoop = (): never => {
    while (true) {}
  };

  // Object Type-----------------------------------
  object: { name: string; age: number } = {
    name: 'John',
    age: 30,
  };

  // Custom Type-----------------------------------
  customType: CustomType = {
    name: 'John',
    age: 30,
  };

  // Rest Type-----------------------------------
  createSkills = (name: string, ...skills: Array<string>): string =>
    `${name} knows ${skills.join(', ')}`;

  // Function variable type--------------------------
  oldFunc(name: string): void {
    alert(`Hello ${name}!`);
  }

  // myFunc!: (arg: string) => void;
  // constructor(){
  //   this.myFunc = this.oldFunc;
  // }

  // Generic Type-----------------------------------
  // getter = (data: any): any => data;
  getter = <T>(data: T): T => data;
  // getter<number>(10).length;
  // getter<string>('hello').length;

  // class User<T, K>{
  //   constructor(public name: T, public age: K) {
  //     getPass(): string{
  //       return `${this.name} ${this.age}`
  //     }
  //   }
  // }

  // Decorators-----------------------------------
  // Base structure of Decorator
  // logClass = () => {};
  // Class Decorator
  // logClass2 = (constructor: Function)=>{
  //   console.log(constructor);
  // }
  // @logClass2
  // class User {
  //   constructor(public name: string, public age: number) {}
  //   getPass(): string {
  //     return `${this.name} ${this.age}`

  //   }
  // Property Decorator
  // logProperty = (targrt: Object, propertyKey: string | symbol) => {
  //   console.log(propertyKey);
  // };

  // class User {
  //   @logProperty     // <- Apply decorator for property
  //   secret: number;
  //   constructor (public name: string, public age: number, secret: number) {
  //     this.secret = secret
  //   }
  // }
}
