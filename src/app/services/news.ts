import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { NewResponse, Article } from '../interfaces';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private http = inject(HttpClient);

  // URL base sin parámetros extra
  private apiUrl = `https://newsapi.org/v2`;

  private executeQuery<T>(endpoint: string, params: Record<string, string> = {}): Observable<T> {
    console.log('Petición HTTP realizada');
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, {
      params: {
        apiKey,
        country: 'us',
        ...params  // permite pasar parámetros adicionales como category
      }
    });
  }

  getTopHeadlines(): Observable<Article[]> {
    return this.executeQuery<NewResponse>('/top-headlines').pipe(
      map(({ articles }) => articles)
    );
  }

  getTopHeadlinesByCategory(category: string): Observable<Article[]> {
    return this.executeQuery<NewResponse>('/top-headlines', { category }).pipe(
      map(({ articles }) => articles)
    );
  }
}