import { useState, useEffect } from "react";
import moment from "moment";

const WeatherComponent = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a1a3a6d8fa1c3f9ac94900bb06abbfd8`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  const refresh = () => {
    window.location.reload();
  };

  //
  // Render different visuals based on weatherData
  return (
    <div className="bg-white bg-opacity-20 p-2 rounded-lg">
      <div>
        <div className="text-base text-left">
          {data ? (
            <>
              <div className="flex pb-2 gap-2">
                <button
                  className="basis-1/4 text-center text-sm bg-zinc-200 text-zinc-800 rounded-md cursor-none hover:bg-zinc-400 duration-300"
                  onClick={refresh}
                >
                  Refresh
                </button>
                <p className="font-bold text-amber-400 basis-1/2 text-center">
                  Location: {data.name}
                </p>
              </div>

              <p>
                {moment().format("dddd")} {moment().format("LL")}
              </p>

              {/* {<p> {data.weather[0].description}</p>} */}
              {data.main && <p>Temperature: {data.main.temp}&deg;F</p>}
              <div className="flex text-xs text-center pt-2">
                {" "}
                {data.sys && (
                  <p className="font-bold text-zinc-800 bg-amber-400 rounded-l-md px-2 pb-0.5">
                    Sunrise: <br />
                    <p>
                      {new Date(data.sys.sunrise * 1000).toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </p>
                )}
                {data.sys && (
                  <p className="text-zinc-200 font-bold bg-cyan-800 rounded-r-md px-2 pb-0.5">
                    Sunset: <br />
                    {new Date(data.sys.sunset * 1000).toLocaleString("en-IN")}
                  </p>
                )}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
