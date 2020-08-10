import React from 'react';
// import logo from './logo.svg';
// import HomePage from './container/home/HomePage';
// import MovieInfo from './container/home/MovieInfo';
// import PageNotFound from './container/home/PageNotFound';
import Navbar from './Components/Navbar'
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/movieinfo" component={MovieInfo}></Route>
        <Route path="" component={PageNotFound}></Route>
      </Switch> */}
    </BrowserRouter>
  )
}

export default App;
