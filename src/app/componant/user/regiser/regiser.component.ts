import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.css'],
})
export class RegiserComponent implements OnInit {
  errorMsg = '';
  isSubmitted = false;
  regesterForm = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    ]),
    age: new FormControl('', [Validators.required]),
  });
  constructor(private _auth: AuthService, private _router: Router) {}
  ngOnInit(): void {}
  get first_name() {
    return this.regesterForm.get('first_name');
  }
  get last_name() {
    return this.regesterForm.get('last_name');
  }
  get email() {
    return this.regesterForm.get('email');
  }
  get password() {
    return this.regesterForm.get('password');
  }
  get age() {
    return this.regesterForm.get('age');
  }

  handleRegister() {
    if (this.regesterForm.valid) {
      this._auth.register(this.regesterForm.value).subscribe(
        (res) => {
          console.log(res);
        },
        (e) => {
          console.log(e.error.message);
          this.errorMsg = e.error.message;
        },
        () => {
          this._router.navigateByUrl('/login');
        }
      );
    }
  }
}
