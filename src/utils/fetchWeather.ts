import axios from "axios";

const fetchWeather = async (city: string) => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  console.log(apiKey);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log("Fetching weather data from", url);
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
};

export default fetchWeather;
