export interface Vaccination {
  people_vaccinated: number;
  people_partially_vaccinated: number;
  country: string;
  life_expectancy: string;
  updated: string;
}

export interface VaccinationAll {
  All: Vaccination
}
