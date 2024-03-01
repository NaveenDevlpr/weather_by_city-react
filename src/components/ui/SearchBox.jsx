import React, { useState } from 'react'

const SearchBox = ({setSearchParam}) => {
    const [recent,setRecent]=useState([])
    const [search,setSearch]=useState('')

    const searchFunc=()=>{
        setSearchParam((prevValue)=>(
            {...prevValue,q:search}
          ))
        if (recent.length === 5) {
           
            const updatedRecent = [...recent.slice(1), search];
            setRecent(updatedRecent);
        } else {
           
            setRecent([...recent, search]);
        }
        
    }
  return (
   <div className='flex flex-col w-full space-y-4'>
        <div className='flex flex-row items-center justify-center w-full space-x-2'>
            <input 
            type='text'
            placeholder='Enter a city...'
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            className='w-full px-4 py-3 bg-transparent border-2 outline-none md:w-1/2 rounded-3xl border-gray-400/50 focus:border-gray-500 focus:outline-none focus:bg-gray-100'>
            </input>
            <button 
            onClick={()=>{searchFunc()}}
            className='rounded-3xl px-5 py-3 text-white bg-[#B1B2FF]'>
                Search
            </button>
            
        </div>
        
        {
                recent.length>0 && (
                    <div className='grid items-center w-full grid-cols-3 gap-2 px-2 space-x-5 md:flex-row md:flex'>
                        <h2 className='font-medium text-black text-md whitespace-nowrap'>Recently Searched :</h2>
                        {
                            recent.map((e,i)=>{
                                return( 
                                    <div className='px-4 py-2 text-sm text-center text-black bg-gray-200 border-gray-200 rounded-3xl'>
                                        {e}
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        
   </div>
  )
}

export default SearchBox