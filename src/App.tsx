import React from 'react';
import MainPage from './components/MainPage/Mainpage';
import axios from 'axios';

let weather: any;

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=18351a555c3ecf0a6dd1b5f48552ee14&lang=en&units=metric';

axios
  .get(url)
  .then(({ data }) => {
    console.log(data);
    weather = data;
  })
  .catch(console.error);

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
