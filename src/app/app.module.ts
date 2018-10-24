import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './survey/home/home.component';
import { UserHistoryComponent } from './survey/user-history/user-history.component';
import { NavigationComponent } from './common/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserHistoryComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
