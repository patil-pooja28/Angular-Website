import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfopageComponent } from './infopage/infopage.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    InfopageComponent,
    HomeComponent,
    ProductCardComponent,
    LoadingSpinnerComponent,
    TabletComponent,
    MobileComponent,
    PowerbankComponent,
    MobileaccComponent,
    TvComponent,
    LaptopComponent,
    PdComponent,
    CompaccComponent,
    RefrigatorComponent,
    MicrowaveComponent,
    DishwasherComponent,
    OtherComponent,
    SpeakerComponent,
    HeadphoneComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
