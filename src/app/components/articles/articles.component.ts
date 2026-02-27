import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces';
import { NgFor, NgIf } from '@angular/common';
import {
  IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';
import { ArticleComponent } from '../article/article.component';  // ← faltaba

@Component({
  selector: 'app-articles',   // ← estaba 'app-article'
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  imports: [
    NgFor, NgIf,
    IonGrid, IonRow, IonCol,
    ArticleComponent           // ← faltaba para renderizar <app-article>
  ],
})
export class ArticlesComponent implements OnInit {  // ← estaba ArticleComponent
  @Input() articles: Article[] = [];  // ← tenía article e index, no articles[]

  constructor() {}
  ngOnInit() {}
}