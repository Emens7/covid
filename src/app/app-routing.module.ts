import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { WorldComponent } from './page/world/world.component';
import { HunComponent } from './page/hun/hun.component';
import { CountriesComponent } from './page/countries/countries.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Hun',
    component: HunComponent
  },
  {
    path: 'World',
    component: WorldComponent,
  },
  {
    path: 'World/:code',
    component: CountriesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
