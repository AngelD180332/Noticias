import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc&api_key=f596154b04d4b5c4a58cbb4a88b0c8a3&include_image_language=es'; 

  constructor(private http: HttpClient) {}

  getFeaturedMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}