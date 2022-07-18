import React from 'react';
import './Card.css';
import { ICardProps } from '../types';

const Card: React.FC<ICardProps> = ({ name, temp, img, description }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <div className="card_degrees">{temp} °С</div>
      <img
        className="card_img"
        src={`http://openweathermap.org/img/w/${img}.png`}
        alt={description}
      ></img>
      <div className="card_description">{description}</div>
    </div>
  );
};

export default Card;
