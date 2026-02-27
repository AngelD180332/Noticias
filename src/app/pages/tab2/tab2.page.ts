import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, SegmentChangeEventDetail } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel,
            ExploreContainerComponent,
            IonSegment, IonSegmentButton
          ],
})
export class Tab2Page {

  public categories: string[] = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  public selectedCategory: string = this.categories[0];

  constructor() {}

  segmentChanged( category: any ) {
    console.log(category);
  }

}