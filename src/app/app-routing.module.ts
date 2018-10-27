import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './survey/home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [
  { path: 'survey', loadChildren: './survey/survey.module#SurveyModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', pathMatch: 'full', redirectTo: 'survey' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
