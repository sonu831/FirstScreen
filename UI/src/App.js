import React from 'react';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import AddUser from './components/AddUser'
import UserList from './components/UserList';
const store = configureStore();

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route default path="/addUser" component={AddUser} />
        <Route path="/userList" component={UserList} />
      </Switch>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
