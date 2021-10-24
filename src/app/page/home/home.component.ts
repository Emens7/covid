import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Country } from '../../model/country';
import { CountryData } from '../../model/country-data';
import { formatDate, formatNumber } from '@angular/common';

import { ShareService } from '../../services/share.service';
import { Vaccination, VaccinationAll } from '../../model/vaccination';
import { VaccinationService } from '../../services/vaccination.service';
import { TimelineItem } from 'src/app/model/timeline-item';
import { DataHopkins } from 'src/app/model/data-hopkins';
import { HopkinsService } from 'src/app/services/hopkins.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  last?: DataHopkins;

  data?: DataHopkins[];

  countryHu?: Country;

  timelineItem?: TimelineItem;

  vaccinationHu?: Vaccination;

  cards: {title: string, content: string, footer?: string}[] = [

  ];

  constructor(
    private covidService: ServiceService,
    private shareService: ShareService,
    private vaccinationService: VaccinationService,
    private hopkinsService: HopkinsService
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
        //footer: 'Frissítve: ' + formatDate(this.vaccinationHu.updated, 'yyyy.MM.dd. HH:mm', 'en'),
      });

      this.cards.push({
        title: 'Kétszer beoltottak száma',
        content: formatNumber(this.vaccinationHu.people_vaccinated, 'en') + ' fő',
        //footer: 'Frissítve: ' + formatDate(this.vaccinationHu.updated, 'yyyy.MM.dd. HH:mm', 'en'),
      });

      this.getCovidData();

    });

  }

  getCovidData(): void {

    this.hopkinsService.getHunData().subscribe((apiResponse: DataHopkins[]) => {
      this.data = apiResponse;
      this.last = this.data[this.data.length-1];

      this.cards.push({
        title: 'Új fertőzöttek száma',
        content: String(this.last.confirmed_daily) + ' fő',
        //footer:  'Frissítve: ' + formatDate(this.last.date, 'yyyy.MM.dd. HH:mm', 'en')
      });

      this.cards.push({
        title: 'Halottak száma a tegnapi napon',
        content: String(this.last.deaths_daily) + ' fő',
        //footer: 'Frissítve: ' + formatDate(this.last.date, 'yyyy.MM.dd. HH:mm', 'en')
      });
      this.cards.push({
        title: 'Elhunytak száma összesen',
        content: String(this.last.deaths) + ' fő',
        //footer: 'Frissítve: ' + formatDate(this.last.date, 'yyyy.MM.dd. HH:mm', 'en')
      });

    });

  }


}
