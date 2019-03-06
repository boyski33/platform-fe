import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserHistoryComponent } from './user/profile/user-history/user-history.component';
import { NavigationComponent } from './general/navigation/navigation.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './general/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHistoryComponent,
    NavigationComponent,
    NotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
