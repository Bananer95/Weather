import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <h1>Oslo</h1>
      <div className="card_degrees">15 °С</div>
      <img
        className="card_img"
        src="http://openweathermap.org/img/w/04d.png"
        alt=""
      ></img>
      <div className="card_description">overcast clouds</div>
    </div>
  );
};

export default Card;
