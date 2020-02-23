import React from 'react';
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
        <Route path="/addUser" component={AddUser} />
        <Route path="/userList" component={UserList} />
      </Switch>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
