const WeatherData = (props) => {
    const { conditions,time } = props;
    return (
        <>
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </>
    )
}

export default WeatherData;
