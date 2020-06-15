import React ,{useState } from 'react';
import { fetchWeather } from './api/fetchWeather'
import './App.scss';


const App = () => {

  const [query , setQuery] = useState('');
  const [weather , setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery('');
    }
  }
  return (
    <div className="main-container">
      <h1>WEATHER APP</h1>
      <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}, {weather.sys.country}</span>
          </h2>
          <div className="info-grid">
          <div className="info">
              <div className="info-img"> 
              <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              
              </div>
            <div className="info-weather">
            <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
            <p>{weather.weather[0].description}</p>
          </div>
         
            </div>
            
          </div>
          <div className="more-info">
          <div className="first-info">
            <div className="humidity">
            {Math.round(weather.main.humidity)}<br/>
            <span>humidity</span>
            
            </div>
            <div className="low">
            {Math.round(weather.main.temp_min)}
            <sup>&deg;C</sup><br/>
            <span>LOW</span>
            
            </div>
          </div>
          <div className="second-info">
          <div className="high">
          {Math.round(weather.main.temp_max)}
          <sup>&deg;C</sup><br/>
          <span>HIGH</span>
          
          </div>
          <div className="wind">
          {Math.round(weather.wind.speed)}
          mph<br/>
          <span>WIND</span>
          
          </div>
          </div>
          </div>
          
          </div>
          
        </div>
      )}
    </div>
  );
}

export default App;
