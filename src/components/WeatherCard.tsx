"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Cloud,
  Sun,
  Droplets,
  Wind,
  Thermometer,
  CloudRain,
  CloudSnow,
  CloudLightning,
} from "lucide-react";
import InfoCard from "./InfoCard";
import { WeatherDetails } from "./Weather/WeatherDetails";
import { WeatherForecast } from "./Weather/WeatherForecast";
import { WeatherOverview } from "./Weather/WeatherOverview";

const getWeatherIcon = (description: string) => {
  switch (description.toLowerCase()) {
    case "clear":
      return <Sun className="w-12 h-12 text-yellow-500" />;
    case "clouds":
      return <Cloud className="w-12 h-12 text-gray-400" />;
    case "rain":
      return <CloudRain className="w-12 h-12 text-blue-400" />;
    case "snow":
      return <CloudSnow className="w-12 h-12 text-blue-200" />;
    case "thunderstorm":
      return <CloudLightning className="w-12 h-12 text-yellow-400" />;
    default:
      return <Cloud className="w-12 h-12 text-gray-400" />;
  }
};

const WeatherCard: React.FC<WeatherData> = ({ city, list }) => {
  const currentWeather = list[0];
  const fiveDayForecast = list
    .filter((item, index) => index % 8 === 0)
    .slice(0, 7);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <div className="space-y-8">
        <WeatherOverview city={city} list={list} />
        <WeatherDetails city={city} list={list} />
        <WeatherForecast city={city} list={list}/>
      </div>
      {/* <Card className="w-full max-w-4xl bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-lg border-none shadow-xl rounded-3xl overflow-hidden">
        <CardHeader className="pb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardTitle className="text-4xl font-bold text-center">
            {city.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-8">
            <div className="flex justify-between items-center">
              <motion.div
                className="text-7xl font-bold text-blue-800"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {Math.round(currentWeather.main.temp)}°C
              </motion.div>
              <div className="text-2xl text-gray-700 flex flex-col items-center space-y-2">
                {getWeatherIcon(currentWeather.weather[0].main)}
                <span className="font-semibold">
                  {currentWeather.weather[0].description}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <InfoCard
                icon={<Droplets className="w-8 h-8 text-blue-500" />}
                title="Humidity"
                value={currentWeather.main.humidity}
                unit="%"
                bgColor="bg-blue-100"
                textColor="text-blue-700"
              />
              <InfoCard
                icon={<Wind className="w-8 h-8 text-green-500" />}
                title="Wind Speed"
                value={Math.round(currentWeather.wind.speed * 3.6)}
                unit="km/h"
                bgColor="bg-green-100"
                textColor="text-green-700"
              />
              <InfoCard
                icon={<Thermometer className="w-8 h-8 text-yellow-500" />}
                title="Feels Like"
                value={Math.round(currentWeather.main.feels_like)}
                unit="°C"
                bgColor="bg-yellow-100"
                textColor="text-yellow-700"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                5-Day Forecast
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {fiveDayForecast.map((day, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-sm font-medium text-gray-600">
                      {new Date(day.dt_txt).toLocaleDateString("en-US", {
                        weekday: "short",
                      })}
                    </span>
                    {getWeatherIcon(day.weather[0].main)}
                    <span className="text-lg font-bold text-blue-800 mt-2">
                      {Math.round(day.main.temp)}°C
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </motion.div>
  );
};

export default WeatherCard;
