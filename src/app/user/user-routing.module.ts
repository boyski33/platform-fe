import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile.component';

const routes: Routes = [
  { path: 'my-profile', component: UserProfileComponent },
  { path: '', pathMatch: 'full', redirectTo: 'my-profile' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {
}
