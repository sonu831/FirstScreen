'use strict';
module.exports = function(app) {
	var locationList = require('../controllers/locationController');
	var userList = require('../controllers/userController');

	// country/location Routes
	app.route('/allContinents').get(locationList.list_all_continents);

	app.route('/allCountries/:continentId').get(locationList.list_all_countries);

	app.route('/allCities/:continentId').get(locationList.list_all_cities);

	// user routes
	// app.route('/users/:cityId/:countryId')
	// .get(userList.read_a_user)
	// .post(todoList.create_a_user)
	// .put(todoList.update_a_task);

	// app.route('/users/mostVisited')
	// .get(userList.read_a_task)
};
