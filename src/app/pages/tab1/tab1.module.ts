import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol,
  IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonImg,
  IonInfiniteScroll, IonInfiniteScrollContent
} from '@ionic/angular/standalone';
import { NewsService } from '../../services/news';
import { Article } from 'src/app/interfaces';
import { ArticlesComponent } from 'src/app/components/articles/articles.component';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    NgFor, NgIf,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol,
    IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonImg,
    IonInfiniteScroll, IonInfiniteScrollContent,
    ArticlesComponent,
  ],
})
export class Tab1Page implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll!: IonInfiniteScroll;

  public articles: Article[] = [];
  private newsService = inject(NewsService);

  ngOnInit() {
    this.newsService.getTopHeadlines()
      .subscribe(articles => this.articles.push(...articles));
  }

  loadData(event: any) {
    this.newsService.getTopHeadlines()
      .subscribe(articles => {
        if (articles.length === this.articles.length) {
          this.infiniteScroll.disabled = true;
          return;
        }
        this.articles = articles;
        this.infiniteScroll.complete();
      });
  }
}