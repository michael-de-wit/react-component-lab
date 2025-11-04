// src/components/WeatherForecast/WeatherForecast.jsx

import './WeatherForecast.css';

const WeatherForecast = ( props ) => {
  const {day, img, imgAlt, conditions, time} = props;
    return (
        <div className='weather'>
            <h2>{day}</h2>
            <img src={img} alt={imgAlt}></img>
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </div>
    )
}

export default WeatherForecast;