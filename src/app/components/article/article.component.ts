import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol,
  IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonImg
} from '@ionic/angular/standalone';  // ← este "from" sigue faltando
import { Article } from '../../interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [
    NgFor, NgIf,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol,
    IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonImg,
  ],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  @Input() index!: number;

  constructor() {}
  ngOnInit() {}
}