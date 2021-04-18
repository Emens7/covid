import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country';
import { CountryData } from 'src/app/model/country-data';
import { ServiceService } from 'src/app/services/service.service';
import { OrderPipe } from 'ngx-order-pipe';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-hun',
  templateUrl: './hun.component.html',
  styleUrls: ['./hun.component.scss']
})
export class HunComponent implements OnInit {

  countryHu?: Country;

  reverse: boolean = false;

  keyWord: string = '';

  order: string = 'date';

  key: number = 0;

  cards: {title: string, content: string, footer: string}[] = [

  ];

  constructor(
    private covidService: ServiceService,
    private orderPipe: OrderPipe
  ) { }

  ngOnInit(): void {
    this.covidService.getCountryHu().subscribe((apiResponse: CountryData) => {
      this.countryHu = apiResponse.data;
    });

    this.covidService.getCountryHu().subscribe((apiResponse: CountryData) => {
      this.countryHu = apiResponse.data;
      this.cards.push({
        title: 'Halottak száma a mai napon',
        content: String(this.countryHu.today.deaths) + ' fő',
        footer: 'Frissítve: ' + formatDate(this.countryHu.updated_at, 'yyyy.MM.dd. HH:mm', 'en')
      });
      this.cards.push({
        title: 'Elhunytak száma összesen',
        content: String(this.countryHu.latest_data.deaths) + ' fő',
        footer: 'Frissítve: ' + formatDate(this.countryHu.updated_at, 'yyyy.MM.dd. HH:mm', 'en')
      });
      this.cards.push({
        title: 'Új fertőzöttek száma',
        content: String(this.countryHu.today.confirmed) + ' fő',
        footer:  'Frissítve: ' + formatDate(this.countryHu.updated_at, 'yyyy.MM.dd. HH:mm', 'en')
      });
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


