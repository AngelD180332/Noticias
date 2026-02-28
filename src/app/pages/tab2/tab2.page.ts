import { Component, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, SegmentChangeEventDetail } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { NgFor } from '@angular/common';
import { IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { ComponentsModule } from 'src/app/components/components-module';
import { OnInit } from '@angular/core';
import { NewsService } from '../../services/news';
import { Article } from 'src/app/interfaces';
import { ArticlesComponent } from 'src/app/components/articles/articles.component'; 
import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel,
            ExploreContainerComponent, NgFor,
            IonHeader, IonToolbar, IonTitle, IonContent, IonLabel,
            IonSegment, IonSegmentButton, ComponentsModule,
            ArticlesComponent, IonInfiniteScroll, IonInfiniteScrollContent
          ],
})
export class Tab2Page implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll!: IonInfiniteScroll;

  public categories: string[] = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  public selectedCategory: string = this.categories[0];
  public articles: Article[] = [];

  constructor( private newsService: NewsService ) {}

  ngOnInit(){
    
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory).subscribe(articles => {
        this.articles = [ ...this.articles, ...articles];
      }); 
    };
  

  segmentChanged( event: Event ) {


    this.selectedCategory = (event as CustomEvent).detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory).subscribe(articles => {
        this.articles = [ ...articles];
      });
    };

  loadData( event: any ) {
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory, true)
      .subscribe( articles => {

        if (articles.length === this.articles.length) {
          this.infiniteScroll.disabled = true;
          return;
        }

        this.articles = articles;
        this.infiniteScroll.complete();
      })
  }
}
