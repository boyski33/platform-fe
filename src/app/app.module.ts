import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserHistoryComponent } from './user/profile/user-history/user-history.component';
import { NavigationComponent } from './general/navigation/navigation.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './general/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './general/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHistoryComponent,
    NavigationComponent,
    NotFoundComponent,
    HomePageComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
