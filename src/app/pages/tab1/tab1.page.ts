import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol,
  IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonImg
} from '@ionic/angular/standalone';
import { NewsService } from '../../services/news';
import { Article } from 'src/app/interfaces';
import { ArticleComponent } from "src/app/components/article/article.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    NgFor, NgIf,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol,
    IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonImg,
    ArticleComponent
],
})
export class Tab1Page implements OnInit {

  public articles: Article[] = [];
  private newsService = inject(NewsService);

  ngOnInit() {
    this.newsService.getTopHeadlines()
      .subscribe(articles => this.articles.push(...articles));
  }
}