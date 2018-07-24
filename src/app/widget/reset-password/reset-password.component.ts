


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegistrationValidator } from '../../shared/register.validator';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls:  ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validate.bind(this)
    });
    this.registrationFormGroup = this.formBuilder.group({
      // username: ['', Validators.required],
      passwordFormGroup: this.passwordFormGroup
    });
   }

  ngOnInit() {
  }

  onClickRegister() {

  }

}
