import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private readonly httpService: HttpClient
  ) { }

  async getCountries(): Promise<any> {
    try {
      return await this.httpService.get('https://restcountries.eu/rest/v2/all').toPromise();
    } catch(error) {
      throw error;
    }
  }
}
