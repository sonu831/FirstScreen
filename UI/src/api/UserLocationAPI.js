import axios from 'axios';

let config = {
    headers: {
            "Access-Control-Allow-Origin": true,
            "Content-Length": '',
}}

export const getAllContinent = () => axios.get(`http://localhost:3000/allContinents`,config);


export const getAllCountries = continentId => axios.get(`http://localhost:3000/allCountries/${continentId}`);


export const getAllCities = continentId => axios.get(`http://localhost:3000/allCities/${continentId}`);
