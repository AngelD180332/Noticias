import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCardTitle, IonImg, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { NewsService } from '../../services/news';
import { NewResponse } from 'src/app/interfaces';
import { Article } from 'src/app/interfaces';
import { NgIf } from "../../../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonGrid, IonRow, IonCardTitle, IonImg, IonCard, NgIf],
})
export class Tab1Page implements OnInit {

  public articles: Article[] = [];

  private newsService = inject(NewsService)

  ngOnInit() {
    this.newsService.getTopHeadlines()
      .subscribe( articles => this.articles.push(...articles));
  }
}