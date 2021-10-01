import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataHopkins } from '../model/data-hopkins'


@Injectable({
  providedIn: 'root'
})
export class HopkinsService {

  url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?country=Hungary'


  constructor(
    private httpClient: HttpClient
  ) { }

  getHunData(): Observable<DataHopkins[]> {
    return this.httpClient.get<DataHopkins[]>(`${this.url}`);
  }

}
