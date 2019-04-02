import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

const routes: Routes = [
  {
    path: 'my-profile',
    component: ProfileDashboardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-profile'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {
}
