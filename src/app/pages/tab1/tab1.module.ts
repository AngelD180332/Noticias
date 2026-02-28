import { Component, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { IonInfiniteScroll, IonInfiniteScrollContent} from '@ionic/angular/standalone';
import { Article } from 'src/app/interfaces';
import { ArticleComponent } from 'src/app/components/article/article.component';
import { NewsService } from 'src/app/services/news';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ExploreContainerComponent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    ArticleComponent,
  ]
})
export class Tab1Module {
  constructor( private newsService: NewsService ) {}

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll!: IonInfiniteScroll;

  ngOnInit(){
    this.newsService.getTopHeadlines().subscribe(articles => this.articles.push(...articles));
  }


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
