import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { CountryData } from '../../model/country-data';
import { TimelineItem } from '../../model/timeline-item';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public lineChartOptions: (ChartOptions) = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  public lineChartLabels: Label[] = [];
  public lineChartData: ChartDataSets[] = [
    {data: [], label: 'Halottak száma naponta'}
  ];
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  @ViewChild(BaseChartDirective, { static: true }) chart?: BaseChartDirective;

  constructor(
    private covidSevice: ServiceService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.getInfoData();
  }

  public getInfoData(): void {
    this.covidSevice.getCountryHu().subscribe((items: CountryData) => {

      items.data.timeline.reverse();
      const deaths_labels = items.data.timeline.map((i: TimelineItem) => {
        return i.date;
      });

      const deaths_data = items.data.timeline.map((i: TimelineItem) => {
        return i.new_deaths;
      });

      console.log(deaths_labels);
      console.log(deaths_data);


      this.lineChartData[0].data = deaths_data;
      this.lineChartLabels = deaths_labels;

    })
  }
}
