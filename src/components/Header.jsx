import React from 'react'
import SearchBox from './ui/SearchBox'
import Loader from './ui/Loader'
const Header = ({setSearchParam,weatherData}) => {

  return (
    <div className='flex flex-col w-full space-y-8'>
        <SearchBox setSearchParam={setSearchParam}/>

        {
            weatherData ? (
                <div className='flex flex-row items-center justify-center space-x-4'>
            <h2 className='text-3xl font-medium text-gray-400/60'>
                Right now in
            </h2>
            <h2 className='text-3xl font-bold text-black'>
                {
                    weatherData.name
                }
            </h2>
            <h2 className='text-3xl font-medium text-gray-400/60'>
                , its {weatherData.details}
            </h2>
        </div>
            ):
            (
             <Loader/>   
            )
        }
    </div>
  )
}

export default Header