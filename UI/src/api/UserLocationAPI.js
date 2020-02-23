import axios from 'axios';


export const getAllContinent = token => axios.get(`http://localhost:3000/allContinents`);


export const getAllCountries = continetId => axios.get(`http://localhost:3000/allCountries/${continetId}`);


export const getAllCities = countryId => axios.get(`http://localhost:3000/allCities/${countryId}`);
