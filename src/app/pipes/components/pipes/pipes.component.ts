import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCustomPipePipe } from '../my-custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, MyCustomPipePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  // DatePipe
  // UpperCase
  // LowerCase
  // CurencyPipe
  // DecimalPipe
  // PercentPipe

  name = 'first name';
  surname = 'DEVELoper';
  date = new Date().toDateString();
}
