/* eslint-disable no-unused-expressions */
import React,{ useEffect } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import _ from 'lodash';
import {Select} from 'antd';
import * as LocationAction from '../../store/actions/LocationAction'
import * as UserAction from '../../store/actions/UserAction'

const { Option } = Select;

const AddUser =(props)=>{
  
 const {continentList,countryList,cityList} = props;

  const onSearch=(val)=> {
    console.log('search:', val);
  }
  useEffect(()=>{
     props.getAllContinent();
  },[props])

       return(
        <div>
        <h1>Add User</h1>
        <Formik
          initialValues={{ username: '',continents:continentList,'counties':countryList,'cities':cityList}}
          validate={values => {
            const errors = {};
            if (!values.username) {
              errors.username = 'username is Required';
            } 
            return errors;
          }}
          onSubmit={(values, { setSubmitting,resetForm }) => {
            const obj = {
                'username': values.username,
                'continent':values.continents,
                'country':values.counties,
                'city':values.cities,
            }
            const srtUser = localStorage.getItem('users');
            const users = srtUser && JSON.parse(srtUser);
            if(srtUser){
               users.push(values);
               localStorage.setItem('users',JSON.stringify(users));

            }else{
                 const arr = [];
                 arr.push(obj);
                 localStorage.setItem('users',JSON.stringify(arr));
            }
            resetForm();
          }}
        >
          {({ values,isSubmitting,handleChange,errors,touched,setFieldValue }) =>{
    
            return(
                (
                    <Form>
                    <label htmlFor="username">User Name</label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      onChange={handleChange}
                      value={values.username}
                    />
                    {touched.firstName && errors.firstName ? (
                        <div style={{color: "red"}}>{errors.firstName}</div>
                      ) : null}
                      <br/>
                      <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select a Continent"
                      optionFilterProp="children"
                      onChange={handleChange}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                     {
                       _.map(continentList,item=>{
                        <Option value={item.id}>{item.name}</Option>
                       })
                     }
                    </Select>
                    <label>Country</label>
                    <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a Country"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                   {
                     _.map(countryList,item=>{
                      <Option value={item.id}>{item.name}</Option>
                     })
                   }
                  </Select>
                  <label>City</label>
                    <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a City"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                   {
                     _.map(countryList,item=>{
                      <Option value={item.id}>{item.name}</Option>
                     })
                   }
                  </Select>    
                  <button type="submit" disabled={isSubmitting}>
                    Visited
                  </button>
                    </Form>
                  )
            )
          }}
        </Formik>
      </div>
       )
   };

   const mapStateToProps = state => ({
      continentList:state.LocationReducer.continentsList,
      countryList:state.LocationReducer.countryList,
      cityList:state.LocationReducer.cityList
  });
  
  const mapDispatchToProps = dispatch => ({
    getAllContinent: () => dispatch(LocationAction.getAllContinent()),
    getAllCountry: () => dispatch(LocationAction.getAllCountry()),
    getAllCities: () => dispatch(LocationAction.getAllCities()),
    userVisited: filter => dispatch(UserAction.createUser(filter)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddUser);