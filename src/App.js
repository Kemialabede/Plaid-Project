import React from 'react';
import logo from './logo.svg';
import Mainpage from './Pages/MainPage/MainPage'
import Login from './Pages/Login/Login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component={Mainpage} />
          <Route exact path = '/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
