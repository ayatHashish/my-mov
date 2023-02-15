import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public _auth: AuthService, private _router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('923')) {
      this._auth.isLoggedIn = true;
    }
  }

  logout() {
    this._auth.logout().subscribe(
      (res) => {
        localStorage.clear();
        this._auth.isLoggedIn = false;
      },
      (e) => {
        console.log(e.error.message);
        this._auth.isLoggedIn = true;
      },
      () => {
        console.log('done');
        this._router.navigateByUrl('/login');
      }
    );
  }
}
