import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaccinationAll } from '../model/vaccination';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  url = "https://covid-api.mmediagroup.fr/v1/vaccines?country=Hungary";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getVaccinationsHu(): Observable<VaccinationAll> {
    return this.httpClient.get<VaccinationAll>(`${this.url}`);
  }
}
