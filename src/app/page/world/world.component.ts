import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country';
import { Data } from 'src/app/model/data';
import { ServiceService } from 'src/app/services/service.service';
import { OrderPipe } from 'ngx-order-pipe';
import { CountryPipePipe } from '../../pipe/country-pipe.pipe';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  countries: Country[] = [];

  keyWord: string = '';
  reverse: boolean = false;
  order: string = 'name';
  key: number = 0;

  constructor(
    private covidSevice: ServiceService,
  ) { }

  ngOnInit(): void {
    this.covidSevice.getCountries().subscribe((apiResponse: Data) => {
      this.countries = apiResponse.data;
    });
  }

  onFilter(event: Event): void {
    this.keyWord = (event.target as HTMLInputElement).value;
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

}
