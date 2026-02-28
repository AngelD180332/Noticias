import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { environment } from '../../environments/environment';
import { NewResponse, Article, ArticlesByCategoryAndPage } from '../interfaces';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private http = inject(HttpClient);
  private apiUrl = `https://newsapi.org/v2`;

  public articlesByCategoryAndPage: ArticlesByCategoryAndPage = {};

  private executeQuery<T>(endpoint: string, params: Record<string, string> = {}): Observable<T> {
    console.log('Petición HTTP realizada');
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, {
      params: {
        apiKey,
        country: 'us',
        ...params
      }
    });
  }

  getTopHeadlines(): Observable<Article[]> {
    return this.executeQuery<NewResponse>('/top-headlines').pipe(
      map(({ articles }) => articles)
    );
  }

  getTopHeadlinesByCategory(category: string, loadMore: boolean = false): Observable<Article[]> {
    
    if (loadMore) {
      return this.getArticlesByCategory(category);
    }
    if (this.articlesByCategoryAndPage[category]) {
      return of(this.articlesByCategoryAndPage[category].articles);
    }

    return this.getArticlesByCategory(category);

  }

  private getArticlesByCategory(category: string): Observable<Article[]> {

    if (Object.keys(this.articlesByCategoryAndPage).includes(category)) {

    }else{

      this.articlesByCategoryAndPage[category] = {
        page: 0,
        articles: []
      }
    }
    const page = this.articlesByCategoryAndPage[category].page + 1;

    return this.executeQuery<NewResponse>(`/top-headlines?category=${category}&page=${page}`).pipe(
      map(({ articles }) => {
       if (articles.length === 0) return this.articlesByCategoryAndPage[category].articles;
        
       this.articlesByCategoryAndPage[category]={
        page: page,
        articles: [...this.articlesByCategoryAndPage[category].articles, ...articles]

       } 

        return this.articlesByCategoryAndPage[category].articles;
      })
    );
  }
}