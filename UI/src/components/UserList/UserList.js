import React, { Component } from 'react';
import _ from 'lodash';


class UserList extends Component{
    constructor(props) {
    super(props);
    const srtUser = localStorage.getItem('users');
    this.state = {
      users: srtUser && JSON.parse(srtUser),
    }
  }

  handleFilter=(e)=>{
    const filterString = e.target.value;
    const {users} = this.state;
     if(filterString){
       const filterUsers = _.filter(users,item => item.gender === filterString ||item.department === filterString );
       if(filterUsers && filterUsers.length){
          this.setState({users:filterUsers});
       }
     } else{
        const srtUser = localStorage.getItem('users');
        if(srtUser){
             this.setState({users:JSON.parse(srtUser)});
        }
     }
  }
  
    render(){
      const {users}= this.state;
      const sorterUser = _.orderBy(users,['firstName'],['asc']);
        return(
        <>
        <br/>
        <br/>
        <div>Filter</div> <input type = "text" onChange={(e)=>this.handleFilter(e)}/>
        <table>
        <tr>
          <th onClick = {(e)=>{sorterUser()}}>First Name</th> 
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Department</th>
        </tr>{
          sorterUser && 
          sorterUser.length
           &&
          _.map(sorterUser, item => {
            return(
              <tr>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.department}</td>
            </tr>
            )
          })
        }
         </table>
         </>
    );
    }
}



export default UserList;