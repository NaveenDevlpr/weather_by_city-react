import React from 'react'
import SearchBox from './ui/SearchBox'
import { useContext } from 'react'
import { WeatherContext } from '../App'
const Header = ({setSearchParam,weatherData}) => {

    


  return (
    <div className='w-full flex flex-col  space-y-8'>
        <SearchBox setSearchParam={setSearchParam}/>

        <div className='flex flex-row items-center justify-center space-x-4'>
            <h2 className='text-3xl text-gray-400/60 font-medium'>
                Right now in
            </h2>
            <h2 className='text-black text-3xl font-bold'>
                {
                    weatherData.name
                }
            </h2>
            <h2 className='text-3xl text-gray-400/60 font-medium'>
                , its {weatherData.details}
            </h2>
        </div>
    </div>
  )
}

export default Header