import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Country } from '../../model/country';
import { CountryData } from '../../model/country-data';
import { formatDate } from '@angular/common';

import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countryHu?: Country;

  cards: {title: string, content: string, footer: string}[] = [

  ];

  constructor(
    private covidService: ServiceService,
    private shareService:ShareService,
  ) { }

  ngOnInit(): void {



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


}
