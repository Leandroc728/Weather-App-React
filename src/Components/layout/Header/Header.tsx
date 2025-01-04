import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import SearchBar from '../../common/SearchBar/SearchBar'
import { getWeatherInfo } from '../../../api'
import { WeatherData } from '../../../weather';

// Types for the component

interface Props {
    setCurrentWeather: Dispatch<SetStateAction<WeatherData | undefined>>;
}

const Header : React.FC<Props> = ({ setCurrentWeather }) => {

    // Will hold the search bar input
    
    const [search, setSearch] = useState<string>('')

    // Will hold the current time

    const [time, setTime] = useState<Date>(new Date())

    // Responsible for loading the function that will update de time

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
    
        return () => clearInterval(intervalId)
    }, [])

    // On submit of the location put in the search bar

    const onSearchSubmit = async (e: any) => {
        e.preventDefault()

        setSearch('')

        const weather = await getWeatherInfo(search)

        setCurrentWeather(weather)

    }

    // Update the value of search on each change

    const handleSearchChange = (e: any) => {
        setSearch(e.target.value)
    }

    // Configs for the time

    const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    };
    
    return (
        <div className='flex sm:py-4 flex-col sm:flex-row lg:justify-around lg:items-center px-1 bg-slate-900 relative top-0 left-0 right-0 py-2'>
            <h3 className='w-full flex items-center justify-center py-2'>Daily Weather</h3>
            <SearchBar onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
            <p className='w-full flex items-center justify-center pt-4 pb-2 sm:py-0'>{ time.toLocaleTimeString([], options) }, { time.toLocaleDateString('en-us', { weekday:'long' })}</p>
        </div>
    )
}

export default Header