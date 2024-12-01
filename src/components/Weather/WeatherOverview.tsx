import { Cloud, Sun, Thermometer, Droplets } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

export const WeatherOverview: React.FC<WeatherData> = ({ city, list }) => {
  const currentWeather = list[0];
  return (
    <Card className="bg-white/10 border-white/20 text-white overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2">{city.name}</h2>
            <p className="text-xl opacity-80">
              {new Date(currentWeather.dt_txt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                weekday: "short",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end mb-2">
              <Sun className="h-16 w-16 mr-4 text-yellow-300" />
              <span className="text-6xl font-bold">
                {Math.round(currentWeather.main.temp)}°C
              </span>
            </div>
            <p className="text-xl opacity-80">Partly Cloudy</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-8 w-8 text-red-400" />
            <div>
              <p className="font-semibold">High</p>
              <p className="text-2xl">
                {Math.round(currentWeather.main.temp_max)}°C
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Thermometer className="h-8 w-8 text-blue-400" />
            <div>
              <p className="font-semibold">Low</p>
              <p className="text-2xl">
                {Math.round(currentWeather.main.temp_min)}°C
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-gray-300" />
            <div>
              <p className="font-semibold">Clouds</p>
              <p className="text-2xl">{currentWeather.clouds.all}%</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-blue-300" />
            <div>
              <p className="font-semibold">Humidity</p>
              <p className="text-2xl">{currentWeather.main.humidity}%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
