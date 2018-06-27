import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
export default class App extends Component {
  render() {
    return (
      <div >
        
        <nav className="navbar navbar-dark bg-dark " style={{background :'blue',marginTop:'1%'}}>
   <div style={{color:'white', textAlign:'center'}}>Weather Forecast </div> 
</nav>
<div  style={{marginTop :'1%'}}>
        <SearchBar />
        <WeatherList />
        </div>
        </div>
    );
  }
}
