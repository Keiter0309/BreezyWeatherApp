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
  Gauge,
  Eye,
  Sunrise,
  Sunset,
} from "lucide-react";
import InfoCard from "./InfoCard";

export const WeatherCard: React.FC<WeatherCardProps> = ({
  coord,
  weather,
  base,
  main,
  visibility,
  wind,
  clouds,
  dt,
  sys,
  timezone,
  id,
  name,
  cod,
}) => {
  const description =
    weather && weather.length > 0
      ? weather[0].description
      : "No description available";
  const temperature = main ? main.temp : "N/A";
  const feelsLike = main ? main.feels_like : "N/A";
  const tempMin = main ? main.temp_min : "N/A";
  const tempMax = main ? main.temp_max : "N/A";
  const pressure = main ? main.pressure : "N/A";
  const humidity = main ? main.humidity : "N/A";
  const windSpeed = wind ? wind.speed : "N/A";
  const windDeg = wind ? wind.deg : "N/A";
  const cloudiness = clouds ? clouds.all : "N/A";
  const visibilityDistance = visibility ? visibility : "N/A";
  const sunrise = sys
    ? new Date(sys.sunrise * 1000).toLocaleTimeString()
    : "N/A";
  const sunset = sys ? new Date(sys.sunset * 1000).toLocaleTimeString() : "N/A";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-md border-none shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-bold text-center text-primary">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              className="text-7xl font-bold text-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {temperature}°C
            </motion.div>
            <div className="text-2xl text-gray-600 flex items-center space-x-2">
              {description === "Sunny" ? (
                <Sun className="w-8 h-8 text-yellow-500" />
              ) : (
                <Cloud className="w-8 h-8 text-gray-400" />
              )}
              <span>{description}</span>
            </div>
            <div className="grid grid-cols-2 gap-6 w-full">
              <InfoCard
                icon={<Droplets className="w-8 h-8 text-blue-500" />}
                title="Humidity"
                value={humidity}
                unit="%"
                bgColor="bg-blue-100"
                textColor="text-blue-700"
              />
              <InfoCard
                icon={<Wind className="w-8 h-8 text-green-500" />}
                title="Wind Speed"
                value={windSpeed}
                unit="km/h"
                bgColor="bg-green-100"
                textColor="text-green-700"
              />
              <InfoCard
                icon={<Thermometer className="w-8 h-8 text-yellow-500" />}
                title="Feels Like"
                value={feelsLike}
                unit="°C"
                bgColor="bg-yellow-100"
                textColor="text-yellow-700"
              />
              <InfoCard
                icon={<Gauge className="w-8 h-8 text-red-500" />}
                title="Pressure"
                value={pressure}
                unit="hPa"
                bgColor="bg-red-100"
                textColor="text-red-700"
              />
              <InfoCard
                icon={<Eye className="w-8 h-8 text-purple-500" />}
                title="Visibility"
                value={visibilityDistance}
                unit="m"
                bgColor="bg-purple-100"
                textColor="text-purple-700"
              />
              <InfoCard
                icon={<Sunrise className="w-8 h-8 text-orange-500" />}
                title="Sunrise"
                value={sunrise}
                bgColor="bg-orange-100"
                textColor="text-orange-700"
              />
              <InfoCard
                icon={<Sunset className="w-8 h-8 text-pink-500" />}
                title="Sunset"
                value={sunset}
                bgColor="bg-pink-100"
                textColor="text-pink-700"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
