import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
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
  fbForm: FormGroup;

  get skills(): FormArray {
    return this.fbForm.get('skills') as FormArray;
  }

  constructor(private _fb: FormBuilder) {
    this.fbForm = this._fb.group({
      name: ['User'],
      skills: this._fb.array([]),
    });
  }

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

  newSkill(): FormGroup {
    return this._fb.group({
      skill: '',
      expirience: '',
    });
  }

  addSkill(): void {
    return this.skills.push(this.newSkill());
  }

  removeSkill(index: number): void {
    return this.skills.removeAt(index);
  }

  onSubmit() {
    console.log(this.fbForm.value);
    this.skills.clear();
  }
}
