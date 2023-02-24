import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isDisabledStates = true;
  public isDisabledCities = true;
  public isDisabledPincodes = true;

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
  public defaultItemPincodes: { pincodeName: string; pincodeId: number } = {
    pincodeName: 'Select pincode',
    pincodeId: null,
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
  public dataPincodes: Array<{
    pincodeName: string;
    pincodeId: number;
    cityId: number;
  }> = [
    { pincodeName: '600001', pincodeId: 1, cityId: 1 },
    { pincodeName: '627803', pincodeId: 2, cityId: 1 },
    { pincodeName: '605036', pincodeId: 3, cityId: 2 },
    { pincodeName: '682001', pincodeId: 4, cityId: 2 },
    { pincodeName: '799436', pincodeId: 5, cityId: 3 },
    { pincodeName: '469752', pincodeId: 6, cityId: 3 },
    { pincodeName: '787694', pincodeId: 7, cityId: 4 },
    { pincodeName: '127999', pincodeId: 8, cityId: 4 },
    { pincodeName: '10000', pincodeId: 9, cityId: 5 },
    { pincodeName: '79100', pincodeId: 10, cityId: 5 },
    { pincodeName: '20000', pincodeId: 11, cityId: 6 },
    { pincodeName: '05000', pincodeId: 12, cityId: 6 },
    { pincodeName: '600001', pincodeId: 13, cityId: 7 },
    { pincodeName: '627803', pincodeId: 14, cityId: 7 },
    { pincodeName: '605036', pincodeId: 15, cityId: 8 },
    { pincodeName: '682001', pincodeId: 16, cityId: 8 },
    { pincodeName: '799436', pincodeId: 17, cityId: 9 },
    { pincodeName: '469752', pincodeId: 18, cityId: 9 },
    { pincodeName: '787694', pincodeId: 19, cityId: 10 },
    { pincodeName: '127999', pincodeId: 20, cityId: 10 },
    { pincodeName: '10000', pincodeId: 21, cityId: 11 },
    { pincodeName: '79100', pincodeId: 22, cityId: 11 },
    { pincodeName: '20000', pincodeId: 23, cityId: 12 },
    { pincodeName: '05000', pincodeId: 24, cityId: 12 },
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
  public dataResultPincodes: Array<{
    pincodeName: string;
    pincodeId: number;
    cityId: number;
  }>;

  public selectedCountry: { countryName: string; countryId: number };
  public selectedState: { stateName: string; stateId: number };
  public selectedCity: { cityName: string; cityId: number };
  public selectedPincode: { pincodeName: string; pincodeId: number };

  handleCountryChange(value) {
    this.selectedCountry = value;
    this.selectedState = undefined;
    this.selectedCity = undefined;
    this.selectedPincode = undefined;

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
    this.selectedPincode = undefined;
    if (value.stateId === this.defaultItemCities.cityId) {
      this.isDisabledPincodes = true;
      this.dataResultPincodes = [];
    } else {
      this.isDisabledPincodes = false;
      this.dataResultPincodes = this.dataPincodes.filter(
        (s) => s.cityId === value.cityId
      );
    }
  }
  handlePincodeChange(value) {
    this.selectedPincode = value;
  }
}
