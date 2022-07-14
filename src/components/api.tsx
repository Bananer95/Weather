import React from 'react';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=18351a555c3ecf0a6dd1b5f48552ee14&lang=eu';

axios
  .get(url)
  .then(({ data }) => {
    console.log(data);
  })
  .catch(console.error);
