/* eslint-disable no-unused-expressions */
import React,{ useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import _ from 'lodash';
import {Select} from 'antd';

const { Option } = Select;

const AddUser =()=>{
  
  const [continentList,setContinentList ] = useState([]);
  const [countryList,setCountryList] = useState([]);
  const [cityList,setCityList] = useState([]);

  const onSearch=(val)=> {
    console.log('search:', val);
  }
  useEffect(()=>{
     
  },[])

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
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={handleChange}
                      value={values.firstName}
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



export default AddUser;
