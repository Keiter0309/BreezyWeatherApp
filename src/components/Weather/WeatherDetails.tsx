import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wind,
  Droplets,
  Sun,
  Sunset,
  Umbrella,
  Gauge,
  GlassWater,
} from "lucide-react";
export const WeatherDetails: React.FC<WeatherData> = ({ city, list }) => {
  const currentWeather = list[0];
  return (
    <Card className="bg-white/10 border-white/20 text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Weather Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <Wind className="h-8 w-8 text-sky-300" />
            <div>
              <p className="font-semibold opacity-80">Wind</p>
              <p className="text-2xl">{currentWeather.wind.speed * 3.6} km/h</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Droplets className="h-8 w-8 text-blue-300" />
            <div>
              <p className="font-semibold opacity-80">Humidity</p>
              <p className="text-2xl">{currentWeather.main.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Sun className="h-8 w-8 text-yellow-300" />
            <div>
              <p className="font-semibold opacity-80">Feels like</p>
              <p className="text-2xl">
                {Math.round(currentWeather.main.feels_like)}°C
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Sunset className="h-8 w-8 text-orange-300" />
            <div>
              <p className="font-semibold opacity-80">Sunset</p>
              <p className="text-2xl">
                {new Date(city.sunset * 1000).toLocaleDateString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Droplets className="h-8 w-8 text-purple-300" />
            <div>
              <p className="font-semibold opacity-80">Sea level</p>
              <p className="text-2xl">{currentWeather.main.sea_level} hPa</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Gauge className="h-8 w-8 text-green-300" />
            <div>
              <p className="font-semibold opacity-80">Pressure</p>
              <p className="text-2xl">{currentWeather.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
