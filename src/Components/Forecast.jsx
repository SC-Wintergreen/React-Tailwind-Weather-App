/* eslint-disable react/prop-types */

const Forecast = ({ title, data }) => {
  return (
    <>
      <div className="flex items-center justify-start mt-6 text-white">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />

      <div className="flex items-center justify-between text-white">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{d.title}</p>

            <img src={d.icon} alt="weather-icon" className="w-12 my-1"></img>
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
