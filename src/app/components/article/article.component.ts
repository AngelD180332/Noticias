import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol,
  IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonImg
}
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
export class ArticleComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
