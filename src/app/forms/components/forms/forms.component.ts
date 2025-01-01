import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export interface MyForm {
  login: string;
  email: string;
  password: string;
}

export function checkRegExp(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regExp.test(control.value);
    return !forbidden ? { forbiddenValue: { value: control.value } } : null;
  };
}

export const conformPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password_one === control.value.password_two
    ? null
    : { PasswordDoNotMatch: true };
};

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

  validatorForm = new FormGroup(
    {
      mail: new FormControl('', [
        checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
        Validators.required,
      ]),
      password_one: new FormControl(''),
      password_two: new FormControl(''),
    },
    conformPassword
  );

  handleValue() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      console.log(this.myForm.get(['login'])?.value);
    } else {
      alert('ERROR');
    }
  }
}
