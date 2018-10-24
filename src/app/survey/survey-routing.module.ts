import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SurveyCreationFormComponent } from './creation-form/survey-creation-form.component';

const routes: Routes = [
  { path: 'new', component: SurveyCreationFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'new' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class SurveyRoutingModule {
}
