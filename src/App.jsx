import { useEffect, useState } from "react";
import Forecast from "./Components/Forecast";
import Inputs from "./Components/Inputs";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButtons from "./Components/TopButtons";
import getFormattedWeatherData from "./services/weatherServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [query, setQuery] = useState({ q: "Tel Aviv" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // const getWeather = async () => {
  //   const message = query.q ? query.q : "current-location";
  //   toast.info(`Fetching Weather Data For ${message}`);
  //   await getFormattedWeatherData({ ...query, units }).then((data) => {
  //     setWeather(data);
  //   });
  // };

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name},${data.country}.`
        );
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) {
      return "from-cyan-600 to-blue-700";
    }

    const thresold = units === "metric" ? 20 : 60;
    if (weather.temp <= thresold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };
  return (
    <div
      className={`mx-auto max-w-screen-xl mt-4 py-5 px-16 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} units={units} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;
