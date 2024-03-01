import React from 'react'
import SearchBox from './ui/SearchBox'

const Header = () => {
  return (
    <div className='w-full flex flex-col  space-y-8'>
        <SearchBox/>

        <div className='flex flex-row items-center justify-center space-x-4'>
            <h2 className='text-3xl text-gray-400/60 font-medium'>
                Right now in
            </h2>
            <h2 className='text-black text-xl font-bold'>
                {

                }
            </h2>
            <h2 className='text-3xl text-gray-400/60 font-medium'>
                , its {}
            </h2>
        </div>
    </div>
  )
}

export default Header