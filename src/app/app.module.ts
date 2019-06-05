import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { TvService } from './tv/tv.service';


@NgModule({
  declarations: [
    AppComponent,
    TvShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
