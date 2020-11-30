import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfopageComponent } from './infopage/infopage.component';
import { HomeComponent } from './home/home.component';
import { TabletComponent } from './tablet/tablet.component';
import { MobileComponent } from './mobile/mobile.component';
import { PowerbankComponent } from './powerbank/powerbank.component';
import { MobileaccComponent } from './mobileacc/mobileacc.component';
import { TvComponent } from './tv/tv.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PdComponent } from './pd/pd.component';
import { CompaccComponent } from './compacc/compacc.component';
import { RefrigatorComponent } from './refrigator/refrigator.component';
import { MicrowaveComponent } from './microwave/microwave.component';
import { DishwasherComponent } from './dishwasher/dishwasher.component';
import { OtherComponent } from './other/other.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { HeadphoneComponent } from './headphone/headphone.component';
import { NavbarComponent } from './navbar/navbar.component';

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
  {
    path:"tablet", component:TabletComponent
  },
  {
    path:"mobile", component:MobileComponent
  },
  {
    path:"powerbank", component:PowerbankComponent
  },
  {
    path:"mobileacc", component:MobileaccComponent
  },
  {
    path:"tv", component:TvComponent
  },
  {
    path:"laptop", component:LaptopComponent
  },
  {
    path:"pd", component:PdComponent
  },
  {
    path:"compacc", component:CompaccComponent
  },
  {
    path:"refrigator", component:RefrigatorComponent
  },
  {
    path:"microwave", component:MicrowaveComponent
  },
  {
    path:"dishwasher", component:DishwasherComponent
  },
  {
    path:"other", component:OtherComponent
  },
  {
    path:"speaker", component:SpeakerComponent
  },
  {
    path:"headphone", component:HeadphoneComponent
  },
  {
    path:"navbar", component:NavbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
