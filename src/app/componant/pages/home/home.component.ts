import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendMovies: any[] = [];
  trendTv: any[] = [];
  trendpeople: any[] = [];
  over: any;
  imgprefix: string = 'https://image.tmdb.org/t/p/w500';
  defaultImg: string = '/vZ2FW6L8mErV81jO7DaeJ6blVTS.jpg';
  constructor(
    private _MoviesService: MoviesService,
    private _wowService: NgwWowService
  ) {
    this.Movies();
    this.tv();
    this.person();
    /* this.person2() */
  }

  ngOnInit(): void {
    this._wowService.init();
  }

  reset() {
    this._wowService.init();
  }

  Movies() {
    this._MoviesService.getTriend('movie').subscribe((data) => {
      this.trendMovies = data.results.slice(0, 10);
    });
  }
  tv() {
    this._MoviesService.getTv('tv').subscribe((data) => {
      this.trendTv = data.results.slice(0, 10);
    });
  }

  person() {
    this._MoviesService.person('person').subscribe((data) => {
      this.trendpeople = data.results;
    });
  }

  /*    person2() {
    this._MoviesService.person('person').subscribe((data) => {
      this.over = data.results.known_for;
    });} */
}
