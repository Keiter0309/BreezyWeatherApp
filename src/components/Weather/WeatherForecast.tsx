import React from "react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const getWeatherIcon = (description: string) => {
  switch (description.toLowerCase()) {
    case "clear":
      return Sun;
    case "clouds":
      return Cloud;
    case "rain":
      return CloudRain;
    case "snow":
      return CloudSnow;
    case "thunderstorm":
      return CloudLightning;
    default:
      return Cloud;
  }
};

export const WeatherForecast: React.FC<WeatherData> = ({ list }) => {
  const forecastData = list
    .filter((item, index) => index % 6 == 0)
    .slice(0, 7)
    .map((item) => {
      const date = new Date(item.dt_txt);
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      const icon = getWeatherIcon(item.weather[0].main);
      const temp = Math.round(item.main.temp);
      const description = item.weather[0].description;

      return {
        day,
        icon,
        temp,
        description,
      };
    });

  return (
    <Card className="bg-white/10 border-white/20 text-white">
      <CardHeader>
        <CardTitle className="text-2xl">7-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {forecastData.map((day, index) => (
            <div
              key={index}
              className="text-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <p className="font-semibold">{day.day}</p>
              <day.icon className="h-10 w-10 mx-auto my-2 text-sky-300" />
              <p className="text-2xl font-bold">{day.temp}°C</p>
              <p className="text-sm opacity-80">{day.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
