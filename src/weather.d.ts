// Types for the coming information from the API

export interface CityLocation {
    country: string
    lat: number
    lon: number
    local_names: string[]
    state: string
}

export interface WeatherData {
    city: any
    dt: number
    sunrise: number
    sunset: number
    temp: number
    dew_point: number
    uvi: number
    clouds: Clouds
    visibility: number
    wind: Wind
    rain?: rain1hr
    snow?: snow1hr
    weather: Weather[]
    name: string
    city: string[]
    list?: any[]
    main: Main
    dt_txt: string
}

export type Main = {
    feels_like: number
    humidity: number
    pressure: number
    sea_level: number
    temp_max: number
    temp_min: number
}

export type Clouds = {
    all: number
}

export type Wind = {
    speed: number
    gust: number
    deg: number
}

export type Weather = {
    id: number
    main: string
    description: string
    icon: string
}

export type rain1hr = {
    "1h": number
}

export type snow1hr = {
    "1h": number
}