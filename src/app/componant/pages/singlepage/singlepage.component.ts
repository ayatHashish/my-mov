import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css'],
})
export class SinglepageComponent implements OnInit {
  id: string = '';
  moviesDetail :any = {};
  imgprefix: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {
    this.id = _ActivatedRoute.snapshot.params['id'];
    _MoviesService.getMoviedetail(this.id).subscribe(
      (response)=>{  this.moviesDetail = response ;

      })

  }

  ngOnInit(): void {}
}
