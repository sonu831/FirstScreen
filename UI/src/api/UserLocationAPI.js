import axios from 'axios';

export const getAllContinent = token => axios.get(`http://localhost:3000/allContinents`);


export const getAllCountries = continentId => axios.get(`http://localhost:3000/allCountries/${continentId}`);


export const getAllCities = countryId => axios.get(`http://localhost:3000/allCities/${countryId}`);
