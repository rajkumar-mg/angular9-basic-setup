import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/providers/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signupForm: FormGroup;
  signInData: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {

    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required]],
        password: ['', Validators.required],
      }
    );
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // do what you wnat with your data
      this.signInData = {
        username: this.signupForm.controls['email'].value,
        password: this.signupForm.controls['password'].value
      }
      setTimeout(() => {
        this.authService.setAuthToken("tokenValue");
        this.router.navigate(['/home/dashboard']);
      }, 1000);
    }
  }

}
