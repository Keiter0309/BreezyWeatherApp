"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { WeatherCard } from "./WeatherCard";
import { Header } from "./Header";
import fetchWeather from "@/utils/fetchWeather";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherCardProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const data = await fetchWeather(city);
    setTimeout(() => {
      setWeatherData(data);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-800 dark:to-purple-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <motion.div
          className="max-w-md mx-auto space-y-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-grow bg-white/80 backdrop-blur-md border-none"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Search className="w-4 h-4" />
                </motion.div>
              ) : (
                <Search className="w-4 h-4" />
              )}
              <span className="sr-only">Search</span>
            </Button>
          </form>
          {weatherData && <WeatherCard {...weatherData} />}
        </motion.div>
      </main>
    </div>
  );
}
