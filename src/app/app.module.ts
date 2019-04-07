import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './general/navigation/navigation.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './general/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './general/confirmation-dialog/confirmation-dialog.component';
import { SingleButtonDialogComponent } from './general/single-button-dialog/single-button-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
    HomePageComponent,
    ConfirmationDialogComponent,
    SingleButtonDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    ConfirmationDialogComponent,
    SingleButtonDialogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
