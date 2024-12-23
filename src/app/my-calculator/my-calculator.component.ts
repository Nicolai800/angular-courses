import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CalcGroup {
  first: CalcVar;
  second: CalcVar;
  operation: CalcOperations;
}

interface CalcVar {
  value: number;
  modificator: CalcModifiers;
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}
enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square',
}

@Component({
  selector: 'app-my-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss',
})
export class MyCalculatorComponent {
  calcOperations = CalcOperations;
  calcModifiers = CalcModifiers;
  calcGroups: CalcGroup[] = [
    {
      first: { value: 5, modificator: CalcModifiers.none },
      second: { value: 4, modificator: CalcModifiers.none },
      operation: CalcOperations.plus,
    },
  ];
  operationsBetweenGroups: CalcOperations[] = [];

  history: string[] = [];

  // result: number | undefined = undefined;
  result?: number;

  addGroup(): void {
    this.calcGroups.push({
      first: {
        value: 0,
        modificator: CalcModifiers.none,
      },
      second: {
        value: 0,
        modificator: CalcModifiers.none,
      },
      operation: CalcOperations.plus,
    });
    this.operationsBetweenGroups.push(CalcOperations.plus);
  }

  removeGroup(index: number): void {
    this.calcGroups.splice(index, 1);
  }
}
