import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getTriend(mediaType:string): Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=28c44312969c8817f473968b8bd33463`)
  }
  getTv(mediaType:string): Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=28c44312969c8817f473968b8bd33463`)
  }
  person(mediaType:string): Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/trending//${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  getMoviedetail(id:string): Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=28c44312969c8817f473968b8bd33463`)
  }

  gettvdetail(id:string): Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=28c44312969c8817f473968b8bd33463`)
  }


  getpersondetail(id:string): Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/person/${id}?api_key=28c44312969c8817f473968b8bd33463`)
  }



}
