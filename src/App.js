import React from 'react';
import Dashboard from './pages/Dashboard';
import AddEvents from './pages/AddEvents';
import DetailCard from './pages/DetailCard';
import { 
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/add">
          <AddEvents />
        </Route>
        <Route exact path="/:id">
          <DetailCard />
        </Route>
      </Switch>
    </Router>
  )
}