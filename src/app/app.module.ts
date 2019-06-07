import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReposComponent } from './repos/repos.component';


const routes:Routes=[
  {path:"Search",component:ReposComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
