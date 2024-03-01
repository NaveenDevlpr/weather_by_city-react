import React from 'react'
import Loader from './ui/Loader'
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";


const Content = ({data}) => {
  return (
    <div className='grid items-center justify-between grid-cols-1 gap-x-[50px] md:-mt-10 md:grid-cols-3'>
        {
          data ? (
           <>
           
           <div className='relative flex flex-col items-center justify-center w-full h-full'>
            <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt='weather' className='object-center w-full h-full'></img>
            <h2 className='absolute  text-xl font-medium text-gray-400/70 top-[80%] left-[33%]'>{data.details}</h2>
        </div>
        <div className='flex flex-col items-center justify-center space-x-2'>
           
              <h2 className='text-black text-[120px] font-light ml-12'>{Math.ceil(data.temp)}&deg;</h2>
            <div className='flex flex-row items-center justify-center space-x-2'>
               <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-gray-400 text-md'>Maximum</h2>
                    <h2 className='font-medium text-gray-500 text-md'>{Math.ceil(data.temp_max)}&deg;</h2>
               </div>
                <h2 className='text-3xl'>|</h2>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-gray-400 text-md'>Minimum</h2>
                    <h2 className='font-medium text-gray-500 text-md'>{Math.floor(data.temp_min)}&deg;</h2>
               </div>
            </div>
        </div>

        <div className='flex-row items-center mt-12 space-y-2 md:flex md:justify-center md:flex-col'>
            <div className='flex flex-row items-center justify-around md:space-x-12 md:ml-1'>
                <div className='flex flex-col items-center justify-center'>
                    <FaWind className='w-6 h-6'/>
                    <h2 className='text-gray-400/80'>Wind</h2>
                </div>
              <h2 className='text-xl font-medium text-gray-600'>{data.speed}</h2>
            </div>

            <div className='flex flex-row items-center justify-around space-x-4 md:space-x-8'>
              <div className='flex flex-col items-center justify-center'>
              <WiHumidity className='w-8 h-8'/>
              <h2 className='text-gray-400/80'>Humidity</h2>
              </div>
              <h2 className='ml-2 text-xl font-medium text-gray-600'>{data.humidity} %</h2>
            </div>

            <div className='flex flex-row items-center justify-around ml-4 space-x-8 md:ml-9'>
              <div className='flex flex-col items-center justify-center'>
              <MdOutlineVisibility className='w-6 h-6'/>
              <h2 className='text-gray-400/80'>Visibility</h2>
              </div>
              <h2 className='text-xl font-medium text-gray-600'>{data.visibility} m</h2>
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

export default Content