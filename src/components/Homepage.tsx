"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import WeatherCard from "./WeatherCard";
import { Header } from "./Header";
import fetchWeather from "@/utils/fetchWeather";
import { getCurrentPosition, getCityName } from "@/utils/getCityName";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) {
      setError("City name cannot be empty.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(city)) {
      setError("City name can only contain letters and spaces.");
      return;
    }
    setError(null);
    setIsLoading(true);
    const data = await fetchWeather(city);
    setTimeout(() => {
      setWeatherData(data);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const cityName = await getCityName(latitude, longitude);
        const data = await fetchWeather(cityName);
        setWeatherData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 to-indigo-900 dark:from-blue-800 dark:to-purple-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <motion.div
          className="mx-auto space-y-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Enter city name"
                value={city}
                aria-required
                onChange={(e) => setCity(e.target.value)}
                className="flex-grow bg-background/80 backdrop-blur-md border-none"
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
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
          <div className="space-y-8">
            {weatherData && <WeatherCard {...weatherData} />}
          </div>
        </motion.div>
      </main>
    </div>
  );
}