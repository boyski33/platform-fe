import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'survey', loadChildren: './survey/survey.module#SurveyModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
