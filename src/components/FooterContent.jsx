import React from 'react'
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { PiWavesBold } from "react-icons/pi";

import Loader from './ui/Loader';

const FooterContent = ({data}) => {


    const convertTime = (timestamp) => {
        var date = new Date(timestamp * 1000);
      
      var hours = date.getHours();
      
      var minutes = "0" + date.getMinutes();
      
      let ampm = 'AM';
          if (hours >= 12) {
              ampm = 'PM';
              hours %= 12;
          }
         
          if (hours === 0) {
              hours = 12;
          }
      
      
      var formattedTime = hours + ':' + minutes.substr(-2)+" "+ ampm
      
      return formattedTime
    }
  return (
    <div className='flex flex-row items-center justify-around w-full mt-12 mb-2 md:mt-0'>
        {
            data ? (
          <>
            <div className='flex flex-row items-center space-x-2 md:space-x-4'>
                    <div className='flex items-center justify-center h-full'>
                        <FiSunrise className='w-8 h-8 md:h-12 md:w-12'/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-gray-400/80'>
                            Sunrise
                        </h2>
                        <h2 className='font-medium text-gray-600 md:text-xl'>
                            {convertTime(data.sunrise)}
                        </h2>
                    </div>
             </div>

             <div className='flex flex-row items-center space-x-2 md:space-x-4'>
                    <div className='flex items-center justify-center h-full'>
                        <FiSunset className='w-8 h-8 md:h-12 md:w-12'/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-gray-400/80'>
                            Sunset
                        </h2>
                        <h2 className='font-medium text-gray-600 md:text-xl'>
                            {convertTime(data.sunset)}
                        </h2>
                    </div>
             </div>


             <div className='flex flex-row items-center space-x-2 md:space-x-4'>
                    <div className='flex items-center justify-center h-full mt-2'>
                        <PiWavesBold className='w-8 h-8 md:h-12 md:w-12'/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-gray-400/80'>
                            Pressure
                        </h2>
                        <h2 className='font-medium text-gray-600 md:text-xl'>
                            {data.pressure}
                        </h2>
                    </div>
             </div>
          </>
            ):
            (
                <Loader/>
            )
        }
    </div>
  )
}

export default FooterContent