import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfopageComponent } from './infopage/infopage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"infopage", component:InfopageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
