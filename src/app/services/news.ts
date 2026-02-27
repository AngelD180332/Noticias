import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { NewResponse, Article } from '../interfaces';
import { count, map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private http = inject(HttpClient);

  private apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

  private executeQuery<T>( endpoint: string ) {
    console.log('Petición HTTP realizada');
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, {
      params: {
        apiKey: apiKey,
        country: 'us',
      }
    })
  }


  getTopHeadlines(): Observable<Article[]> {
    return this.http.get<NewResponse>(this.apiUrl, {
      params: { apiKey }
    }).pipe(
      map(({articles}) => articles)
    );
  }

  getTopHeadlinesByCategory(category: string): Observable<Article[]> {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    return this.http.get<NewResponse>(apiUrl, {
      params: { apiKey }
    }).pipe(
      map(({articles}) => articles)
    );
  }

}
