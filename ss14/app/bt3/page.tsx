import axios from "axios";
import React from "react";

async function getWeatherData() {
  const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: 21.03333,
      longitude: 105.85,
      current_weather: true,
    },
  });
  return res.data.current_weather;
}

export default async function Page() {
  const weatherData = await getWeatherData();
  console.log(weatherData);
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Current Weather</h1>
      <div className="border border-gray-200 rounded-lg p-4 shadow-md">
        <p className="text-lg">Temperature: {weatherData.temperature}°C</p>
        <p className="text-lg">Weather: {weatherData.weathercode}</p>
      </div>
    </div>
  );
}
