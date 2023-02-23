import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div class="container-fluid example-wrapper">
          <div class="row">
              <div class="col-xs-12 col-sm-4 example-col">
                  <p>Country:</p>
                  <kendo-dropdownlist
                      [data]="dataCountry"
                      [value]="selectedCountry"
                      [defaultItem]="defaultItemCountries"
                      textField="countryName"
                      valueField="countryId"
                      (valueChange)="handleCountryChange($event)"
                  >
                  </kendo-dropdownlist>
              </div>
              <div class="col-xs-12 col-sm-4 example-col">
                  <p>State:</p>
                  <kendo-dropdownlist
                      [disabled]="isDisabledStates"
                      [defaultItem]="defaultItemStates"
                      [data]="dataResultStates"
                      [value]="selectedState"
                      textField="stateName"
                      valueField="stateId"
                      (valueChange)="handleStateChange($event)"
                  >
                  </kendo-dropdownlist>
              </div>
              <div class="col-xs-12 col-sm-4 example-col">
                  <p>City:</p>
                  <kendo-dropdownlist
                      [disabled]="isDisabledCities"
                      [defaultItem]="defaultItemCities"
                      [data]="dataResultCities"
                      [value]="selectedCity"
                      textField="cityName"
                      valueField="cityId"
                      (valueChange)="handleCityChange($event)"
                  >
                  </kendo-dropdownlist>
              </div>
          </div>
      </div>
    `,
  styles: [
    `
        kendo-dropdownlist {
            width: 170px;
        }
    `,
  ],
})
export class AppComponent {
  public isDisabledStates = true;
  public isDisabledCities = true;

  public defaultItemCountries: { countryName: string; countryId: number } = {
    countryName: 'Select country',
    countryId: null,
  };

  public defaultItemStates: { stateName: string; stateId: number } = {
    stateName: 'Select state',
    stateId: null,
  };

  public defaultItemCities: { cityName: string; cityId: number } = {
    cityName: 'Select city',
    cityId: null,
  };

  public dataCountry: Array<{ countryName: string; countryId: number }> = [
    { countryName: 'India', countryId: 1 },
    { countryName: 'Singapore', countryId: 2 },
    { countryName: 'maleysia', countryId: 3 },
  ];

  public dataStates: Array<{
    stateName: string;
    stateId: number;
    countryId: number;
  }> = [
    { stateName: 'Tamilnadu', stateId: 1, countryId: 1 },
    { stateName: 'Kerala', stateId: 2, countryId: 1 },
    { stateName: 'Central Singapore', stateId: 3, countryId: 2 },
    { stateName: 'North West', stateId: 4, countryId: 2 },
    { stateName: 'Sabah', stateId: 5, countryId: 3 },
    { stateName: 'Terengganu', stateId: 6, countryId: 3 },
  ];

  public dataCities: Array<{
    cityName: string;
    cityId: number;
    stateId: number;
  }> = [
    { cityName: 'Chennai', cityId: 1, stateId: 1 },
    { cityName: 'tenkasi', cityId: 2, stateId: 1 },
    { cityName: 'kochi', cityId: 3, stateId: 2 },
    { cityName: 'Thiruvananthapuram', cityId: 4, stateId: 2 },
    { cityName: 'Jalan Kayu', cityId: 5, stateId: 3 },
    { cityName: 'Kampong Chai Chee', cityId: 6, stateId: 3 },
    { cityName: 'Teacher’s Housing Estate', cityId: 7, stateId: 4 },
    { cityName: 'West Coast Village', cityId: 8, stateId: 4 },
    { cityName: 'George Town.', cityId: 9, stateId: 5 },
    { cityName: 'Johor Bahru..', cityId: 10, stateId: 5 },
    { cityName: 'Kuala Terengganu.', cityId: 11, stateId: 6 },
    { cityName: 'Alor Setar.', cityId: 12, stateId: 6 },
  ];

  public dataResultStates: Array<{
    stateName: string;
    stateId: number;
    countryId: number;
  }>;

  public dataResultCities: Array<{
    cityName: string;
    cityId: number;
    stateId: number;
  }>;

  public selectedCountry: { countryName: string; countryId: number };
  public selectedState: { stateName: string; stateId: number };
  public selectedCity: { cityName: string; cityId: number };

  handleCountryChange(value) {
    this.selectedCountry = value;
    this.selectedState = undefined;
    this.selectedCity = undefined;

    if (value.countryId === this.defaultItemCountries.countryId) {
      this.isDisabledStates = true;
      this.dataResultStates = [];
    } else {
      this.isDisabledStates = false;
      this.dataResultStates = this.dataStates.filter(
        (s) => s.countryId === value.countryId
      );
    }

    this.isDisabledCities = true;
    this.dataResultCities = [];
  }

  handleStateChange(value) {
    this.selectedState = value;
    this.selectedCity = undefined;

    if (value.stateId === this.defaultItemStates.stateId) {
      this.isDisabledCities = true;
      this.dataResultCities = [];
    } else {
      this.isDisabledCities = false;
      this.dataResultCities = this.dataCities.filter(
        (s) => s.stateId === value.stateId
      );
    }
  }

  handleCityChange(value) {
    this.selectedCity = value;
  }
}
