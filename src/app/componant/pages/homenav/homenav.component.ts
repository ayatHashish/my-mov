import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-homenav',
  templateUrl: './homenav.component.html',
  styleUrls: ['./homenav.component.css'],
})
export class HomenavComponent implements OnInit {
  trendMovies: any[] = [];
  imgprefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService: MoviesService ) {

    _MoviesService.getTriend('movie').subscribe((data) => {
      this.trendMovies = data.results;
    });
  }

  ngOnInit(): void {}

  customOptions: OwlOptions = {
    loop: true,
    margin:8,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    lazyLoad:true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:1000,
    autoplaySpeed:false,
    slideTransition:"linear",
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 4,
      },
      740: {
        items: 3,
      },
      940: {
        items: 10,
      },
    },
    nav: true,
  };
}
