import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';
import { HomeComponent } from './home/home.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { ThumbnailComponent } from './thumbnail-list/thumbnail/thumbnail.component';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';


@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule
  ],
  declarations: [
    HomeComponent,
    CreationFormComponent,
    ThumbnailComponent,
    ThumbnailListComponent
  ]
})
export class SurveyModule {
}
