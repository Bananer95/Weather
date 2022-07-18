import React, { useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Search from '../Search/Search';
import './MainPage.css';
import { IWeatherInterface } from '../types';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=18351a555c3ecf0a6dd1b5f48552ee14&lang=en&units=metric';

const MainPage = () => {
  const [api, setApi] = useState<IWeatherInterface>();

  axios
    .get(url)
    .then(({ data }) => {
      setApi(data);
    })
    .catch(console.error);

  return (
    <div className="mainpage">
      <h1>Weather</h1>
      <br />{' '}
      <div className="top_container">
        <Search />
        <Button />
      </div>
      {api !== undefined ? (
        <Card
          name={api.name}
          temp={Math.trunc(api.main.temp)}
          img={api.weather[0].icon}
          description={api.weather[0].description}
        />
      ) : null}
    </div>
  );
};

export default MainPage;
