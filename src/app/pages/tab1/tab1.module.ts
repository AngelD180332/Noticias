import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { ComponentsModule } from 'src/app/components/components-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ExploreContainerComponent,
    ComponentsModule
  ]
})
export class Tab1Module { }
