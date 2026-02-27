import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol,
  IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonImg
} from '@ionic/angular/standalone';   // ← faltaba este "from '...'"
import { Article } from '../../interfaces';  // ← faltaba el import de la interfaz

@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  imports: [
    NgFor, NgIf,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol,
    IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonImg,
  ],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;   // ← faltaban ambos @Input
  @Input() index!: number;

  constructor() {}
  ngOnInit() {}
}
