import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

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
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
