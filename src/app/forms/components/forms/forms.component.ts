import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface MyForm {
  login: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  handleValue() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      console.log(this.myForm.get(['login'])?.value);
    } else {
      alert('ERROR');
    }
  }
}
