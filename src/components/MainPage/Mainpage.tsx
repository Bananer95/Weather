import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Search from '../Search/Search';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="mainpage">
      <h1>Weather</h1>
      <br />{' '}
      <div className="top_container">
        <Search />
        <Button />
      </div>
      <Card />
    </div>
  );
};

export default MainPage;
