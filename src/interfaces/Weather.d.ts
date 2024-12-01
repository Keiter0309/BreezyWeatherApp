interface WeatherData {
  cod?: number;
  message?: number;
  city: City;
  list: Array<WeatherEntry>;
}

interface City {
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  name: string;
  population: number;
  sunprise: number;
  sunset: number;
  timezone: number;
}

interface WeatherEntry {
  clouds: {
    all: number
  }
  dt: date,
  dt_txt: string,
  main: {
    feels_like: number,
    grnd_level: number
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_kf: number,
    temp_max: number,
    temp_min: number
  }
  pop: number,
  sys: {
    pod: string
  }
  visibility: number
  weather: Array<WeatherDescription>;
  wind: {
    deg: number;
    gust:number;
    speed: number
  }
}

interface WeatherDescription {
  id: number,
  main: string,
  description: string,
  icon: string
}
