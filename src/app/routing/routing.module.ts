import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ReposComponent } from '../repos/repos.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes:Routes=[
  { path:"users", component: HomePageComponent },
  { path:"repos/:username", component: ReposComponent },
  { path:"repos", component: ReposComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

