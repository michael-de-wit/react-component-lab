// src/components/WeatherForecast/WeatherForecast.jsx

import './WeatherForecast.css';
import WeatherData from './WeatherData/WeatherData.jsx';
import WeatherIcon from './WeatherIcon/WeatherIcon.jsx';

const WeatherForecast = (props) => {
    //   const {day, img, imgAlt, conditions, time} = props;
    const { dayArray } = props;
    console.log(props);
    return (
        <div className='weather'>
            {dayArray.map((dayOfWeek, index) => (
                <>
                    <h2>{dayOfWeek.day}</h2>
                    <WeatherIcon key={index} img={dayOfWeek.img} imgAlt={dayOfWeek.imgAlt} />
                    <WeatherData key={index} conditions={dayOfWeek.conditions} time={dayOfWeek.time} />
                </>
            ))}
        </div>
    )
}

export default WeatherForecast;