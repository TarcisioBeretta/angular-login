import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [
    '../home.component.scss',
    './sign-in.component.scss'
  ]
})
export class SignInComponent {

  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  remember: AbstractControl;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initControls();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      remember: [false]
    });
  }

  initControls(): void {
    this.email = this.form.controls.email;
    this.password = this.form.controls.password;
    this.remember = this.form.controls.remember;
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
