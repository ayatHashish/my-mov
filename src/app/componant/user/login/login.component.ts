import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMsg = '';
  isSubmitted = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    ]),
  });

  constructor(private _router: Router, private _auth: AuthService) {}
  ngOnInit(): void {}
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  handelogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this._auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('923', res.token);
          this._auth.isLoggedIn = true;
        },
        error: (e) => {
          this.errorMsg = e.error.message;
          this._auth.isLoggedIn = false;
        },
        complete: () => this._router.navigate(['/']),
      });
    }
  }
}
