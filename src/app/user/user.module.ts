import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserDetailsComponent,
    ProfileDashboardComponent,
    UserSubmissionsComponent,
  ]
})
export class UserModule {
}
