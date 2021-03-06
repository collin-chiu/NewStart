import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { HeroesModule } from './heroes/heroes.module';
import { HerosRoutingModule } from './heroes/heros-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DemonstrateModule } from './demonstrate/demonstrate.module';
import { DemonstrateRoutingModule } from './demonstrate/demonstrate-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeroesModule,
    HerosRoutingModule,
    DashboardModule,
    DashboardRoutingModule,
    DemonstrateModule,
    DemonstrateRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
