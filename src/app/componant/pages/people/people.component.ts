import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  id: string = '';
  personDetail: any = {};
  /*   personDetail2: any = {}; */
  imgprefix: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {
    this.id = _ActivatedRoute.snapshot.params['id'];
    _MoviesService.getpersondetail(this.id).subscribe((response) => {
      console.log(response);
      this.personDetail = response;
    });
  }

  ngOnInit(): void {}
}
