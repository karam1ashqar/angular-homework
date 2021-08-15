import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries = [];
  filteredCountries = [];
  searchValue = '';

  constructor(
    private readonly countriesService: CountriesService
  ) { }

  onSearchChange(event) {
    this.filteredCountries = (this.countries || []).filter((country) => {
      return (country.name || '').toLowerCase().includes(event) || (country.nativeName || '').toLowerCase().includes(event);
    })
  }

  async loadCountries() {
    this.countries = await this.countriesService.getCountries();
    this.filteredCountries = this.countries;
  }

  ngOnInit() {
    this.loadCountries();
  }

}
