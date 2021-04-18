import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country';
import { CountryData } from 'src/app/model/country-data';
import { ServiceService } from 'src/app/services/service.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  country?: Country;

  reverse: boolean = false;

  keyWord: string = '';

  order: string = 'date';

  key: number = 0;

  name: string = '';

  constructor(
    private covidService: ServiceService,
    private orderPipe: OrderPipe,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const countryCode = this.route.snapshot.paramMap.get('code');

    if (countryCode) {
      this.covidService.getCountry(countryCode).subscribe((apiResponse: CountryData) => {
        this.country = apiResponse.data;
      });
    }


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

