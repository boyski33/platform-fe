import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyCreationFormComponent } from './creation-form/survey-creation-form.component';
import { SurveyRoutingModule } from './survey-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule
  ],
  declarations: [
    SurveyCreationFormComponent
  ]
})
export class SurveyModule {
}
