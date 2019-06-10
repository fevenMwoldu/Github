import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {  HomePageComponent } from './home-page/home-page.component';

import { ReposComponent } from './repos/repos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import { RoutingModule } from './routing/routing.module';
import { FmtResultsPipe } from './fmt-results.pipe';
import { ShadowDirective } from './shadow.directive'


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ReposComponent,
    PageNotFoundComponent,
    FmtResultsPipe,
    ShadowDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
