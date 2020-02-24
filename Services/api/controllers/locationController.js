var Request = require('request');
var axios = require('axios');
var _ = require('lodash');
var baseUrl = 'https://api.teleport.org/api';

exports.list_all_continents = function(req, res) {
	var result = [];
	axios
		.get('https://api.teleport.org/api/continents/')
		.then((resp) => {
			if (resp.data) {
				_.map(resp.data._links['continent:items'], (i) => {
					var splitted = i.href.split('/');
					result.push({ name: i.name, id: splitted[5] });
				});
				res.json(result);
			}
		})
		.catch((err) => {
			console.dir(err);
			res.send(err);
		});
};

exports.list_all_countries = function(req, res) {
	var result = [];
	var url;
	if (req.params.continentId) {
		url = `https://api.teleport.org/api/continents/${req.params.continentId}/countries/`;
	} else {
		url = 'https://api.teleport.org/api/countries/';
	}
	axios
		.get(url)
		.then((resp) => {
			if (resp.data) {
				_.map(resp.data._links['country:items'], (i) => {
					var splitted = i.href.split('/');
					result.push({ name: i.name, id: splitted[5] });
				});
				res.json(result);
			}
		})
		.catch((err) => {
			console.dir(err);
			res.send(err);
		});
};

exports.list_all_cities = function(req, res) {
	var result = [];
	var url;
	if (req.params.continentId) {
		url = `https://api.teleport.org/api/continents/${req.params.continentId}/urban_areas/`;
	} else {
		url = 'https://api.teleport.org/api/urban_areas/';
	}
	axios
		.get(url)
		.then((resp) => {
			if (resp.data) {
				_.map(resp.data._links['ua:items'], (i) => {
					var splitted = i.href.split('/');
					result.push({ name: i.name, id: splitted[5] });
				});
				res.json(result);
			}
		})
		.catch((err) => {
			console.dir(err);
			res.send(err);
		});
};
