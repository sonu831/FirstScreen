/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Select } from 'antd';
import * as LocationAction from '../../store/actions/LocationAction';
import * as UserAction from '../../store/actions/UserAction';

const { Option } = Select;

const AddUser = (props) => {
	const { continentList, countryList, cityList, getAllCountry, getAllCities } = props;

	const onSearch = (val) => {
		console.log('search:', val);
	};
	useEffect(() => {
		props.getAllContinent();
	}, []);
	return (
		<div className="user-form">
			<h1>Add User</h1>
			<Formik
				enableReinitialize
				initialValues={{
					username: '',
					continent: '',
					continentList,
					country: '',
					countryList,
					city: '',
					cityList
				}}
				validate={(values) => {
					const errors = {};
					if (_.isNil(values.username)) {
						errors.username = 'username is Required';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					const obj = {
						username: values.username,
						continent: values.continents,
						country: values.counties,
						city: values.cities
					};
					
					// const srtUser = localStorage.getItem('users');
					// const users = srtUser && JSON.parse(srtUser);
					// if (srtUser) {
					// 	users.push(values);
					// 	localStorage.setItem('users', JSON.stringify(users));
					// } else {
					// 	const arr = [];
					// 	arr.push(obj);
					// 	localStorage.setItem('users', JSON.stringify(arr));
					// }
					resetForm();
				}}
			>
				{({ values, isSubmitting, handleChange, errors, touched }) => {
					return (
						<Form>
							<div>
								<label htmlFor="username">User Name</label>
								<input
									id="username"
									name="username"
									type="text"
									onChange={handleChange}
									value={values.username}
								/>
								{touched.username && errors.username ? (
									<div style={{ color: 'red' }}>{errors.username}</div>
								) : null}
								<br />
								<div>
									<label>Please select Continent</label>
									<Select
										name="continent"
										showSearch
										style={{ width: 200 }}
										placeholder="Select a Continent"
										optionFilterProp="children"
										onChange={(e) => {
											getAllCountry(e);
											getAllCities(e);
											handleChange(e);
										}}
										onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
									>
										{_.map(continentList, (item, index) => (
											<Option key={index} value={item.id}>
												{item.name}
											</Option>
										))}
									</Select>
								</div>
								<div>
									<label>Country</label>
									<Select
										showSearch
										name="country"
										style={{ width: 200 }}
										placeholder="Select a Country"
										optionFilterProp="children"
										onChange={handleChange}
										onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
									>
										{_.map(countryList, (item, index) => (
											<Option value={item.id}>{item.name}</Option>
										))}
									</Select>
								</div>
								<div>
									<label>City</label>
									<Select
										showSearch
										name="city"
										style={{ width: 200 }}
										placeholder="Select a City"
										optionFilterProp="children"
										onChange={handleChange}
										onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
									>
										{_.map(cityList, (item, index) => <Option value={item.id}>{item.name}</Option>)}
									</Select>
								</div>
								<button type="submit" disabled={isSubmitting}>
									Visited
								</button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

const mapStateToProps = (state) => ({
	continentList: state.LocationReducer.continentsList,
	countryList: state.LocationReducer.countryList,
	cityList: state.LocationReducer.cityList
});

const mapDispatchToProps = (dispatch) => ({
	getAllContinent: () => dispatch(LocationAction.getAllContinent()),
	getAllCountry: (parm) => dispatch(LocationAction.getAllCountry(parm)),
	getAllCities: (parm) => dispatch(LocationAction.getAllCities(parm)),
	userVisited: (filter) => dispatch(UserAction.createUser(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
