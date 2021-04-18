import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../model/data';
import { CountryData } from '../model/country-data';
import { Country } from '../model/country';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url =  'https://corona-api.com';

  constructor(
    private httpclient: HttpClient
  ) { }

  getCountries(): Observable<Data> {
    return this.httpclient.get<Data>(`${this.url}/countries`);
  }

  getCountryHu(): Observable<CountryData> {
    return this.httpclient.get<CountryData>(`${this.url}/countries/hu`);
  }

  getCountry(code: string): Observable<CountryData> {
    return this.httpclient.get<CountryData>(`${this.url}/countries/${code}`)
  }

}
