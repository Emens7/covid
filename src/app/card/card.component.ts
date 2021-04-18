import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../model/country';
import { CountryData } from '../model/country-data';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  content: string = '';

  @Input()
  footer: string = '';



  constructor(
    private covidService: ServiceService,
  ) { }

  ngOnInit(): void {

  }

}
