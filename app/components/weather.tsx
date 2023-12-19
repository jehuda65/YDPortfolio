// import { useState, useEffect } from "react";

// const WeatherComponent = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         // Get user's location using Geolocation API
//         navigator.geolocation.getCurrentPosition(
//           async (position) => {
//             const { latitude, longitude } = position.coords;
//             const apiKey = "5deb2e2521mshd8e2fa707785629p1628fdjsn9f96ce4ee9ba"; // Replace with your Dark Sky API key
//             const url = `https://dark-sky.p.rapidapi.com/${latitude},${longitude}?units=auto&lang=en`;

//             const options = {
//               method: "GET",
//               headers: {
//                 "X-RapidAPI-Key": apiKey,
//                 "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
//               },
//             };

//             const response = await fetch(url, options);

//             if (!response.ok) {
//               throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const result = await response.json();
//             setWeatherData(result);
//             setLoading(false);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//             setError("Error getting user location");
//             setLoading(false);
//           }
//         );
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//         setError("Error fetching weather data");
//         setLoading(false);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Render different visuals based on weatherData
//   return (
//     <div>
//       <h1>Weather Component</h1>
//       {/* Add your logic to display different visuals based on weatherData */}
//       {weatherData && (
//         <div>
//           <p>Temperature: {weatherData.currently.temperature}°C</p>
//           <p>Summary: {weatherData.currently.summary}</p>
//           {/* Add more visuals based on weather conditions */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherComponent;
