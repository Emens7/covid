import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './page/chart/chart.component';
import { WorldComponent } from './page/world/world.component';
import { HunComponent } from './page/hun/hun.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';

import { OrderModule } from 'ngx-order-pipe';
import { CountryPipePipe } from './pipe/country-pipe.pipe';
import { CountriesComponent } from './page/countries/countries.component';

import { ChartsModule } from 'ng2-charts';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    WorldComponent,
    HunComponent,
    FilterPipe,
    SortPipe,
    CountryPipePipe,
    CountriesComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
