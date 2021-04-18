import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Country } from '../../model/country';
import { CountryData } from '../../model/country-data';
import { formatDate, formatNumber } from '@angular/common';

import { ShareService } from '../../services/share.service';
import { Vaccination, VaccinationAll } from '../../model/vaccination';
import { VaccinationService } from '../../services/vaccination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countryHu?: Country;

  vaccinationHu?: Vaccination;

  cards: {title: string, content: string, footer: string}[] = [

  ];

  constructor(
    private covidService: ServiceService,
    private shareService: ShareService,
    private vaccinationService: VaccinationService,
  ) { }

  ngOnInit(): void {

    this.getVaccinationData();

  }

  getVaccinationData(): void {

    this.vaccinationService.getVaccinationsHu().subscribe((apiResponse: VaccinationAll) => {
      console.log(apiResponse)
      this.vaccinationHu = apiResponse.All;

      this.cards.push({
        title: 'Egyszer beoltottak száma',
        content: formatNumber(this.vaccinationHu.people_partially_vaccinated, 'en') + ' fő',
        footer: 'Frissítve: ' + formatDate(this.vaccinationHu.updated, 'yyyy.MM.dd. HH:mm', 'en'),
      });

      this.cards.push({
        title: 'Kétszer beoltottak száma',
        content: formatNumber(this.vaccinationHu.people_vaccinated, 'en') + ' fő',
        footer: 'Frissítve: ' + formatDate(this.vaccinationHu.updated, 'yyyy.MM.dd. HH:mm', 'en'),
      });

      this.getCovidData();

    });

  }

  getCovidData(): void {

    this.covidService.getCountryHu().subscribe((apiResponse: CountryData) => {
      this.countryHu = apiResponse.data;

      this.cards.push({
        title: 'Új fertőzöttek száma',
        content: String(this.countryHu.today.confirmed) + ' fő',
        footer:  'Frissítve: ' + formatDate(this.countryHu.updated_at, 'yyyy.MM.dd. HH:mm', 'en')
      });

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

    });

  }


}
