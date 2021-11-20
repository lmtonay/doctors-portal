import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from '../pages/Homepage';
import Appointment from 'pages/Appointment';
import Dashboard from 'pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>
        <Route exact path='/appointment'>
          <Appointment></Appointment>
        </Route>
        <Route exact path='/'>
          <Homepage></Homepage>
        </Route>
        <Route exact path='*'>
          <div className="text-center m-5 text-danger">
            <h2>404! Not Found</h2>
            <Link to='/'><button className="btn btn-danger">Back to home</button></Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
