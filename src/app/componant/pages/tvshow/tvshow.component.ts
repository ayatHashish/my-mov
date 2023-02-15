import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
})
export class TvshowComponent implements OnInit {
  id: string = '';
  tvDetail: any = {};
  imgprefix: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {

    this.id = _ActivatedRoute.snapshot.params['id'];
    _MoviesService.gettvdetail(this.id).subscribe(
      (response)=>{  this.tvDetail = response ;

      })

  }

  ngOnInit(): void {}
}
