const WeatherIcon = (props) => {
    const { img, imgAlt } = props;
    return (
        <>
            <img src={img} alt={imgAlt} />
        </>
    )
}

export default WeatherIcon;
