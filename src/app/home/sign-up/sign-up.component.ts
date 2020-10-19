import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../shared/validators/must-match.validator';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    '../home.component.scss',
    './sign-up.component.scss',
  ]
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  firstName: AbstractControl;
  lastName: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initControls();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      confirmPassword: [null, [Validators.required]]
    }, {
      validators: [MustMatch('password', 'confirmPassword')]
    });
  }

  initControls(): void {
    this.firstName = this.form.controls.firstName;
    this.lastName = this.form.controls.lastName;
    this.email = this.form.controls.email;
    this.password = this.form.controls.password;
    this.confirmPassword = this.form.controls.confirmPassword;
  }

  onSubmit(): void {

  }
}
