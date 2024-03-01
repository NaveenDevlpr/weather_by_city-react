import React, { useState } from 'react'

const SearchBox = () => {
    const [recent,setRecent]=useState([])
    const [search,setSearch]=useState('')

    const searchFunc=()=>{
        
        if (recent.length === 5) {
           
            const updatedRecent = [...recent.slice(1), search];
            setRecent(updatedRecent);
        } else {
           
            setRecent([...recent, search]);
        }
        
    }
  return (
   <div className='w-full flex flex-col space-y-4'>
        <div className='w-full flex flex-row space-x-2 items-center justify-center'>
            <input 
            type='text'
            placeholder='Enter a city...'
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            className='w-1/2 rounded-3xl border-2 border-gray-400/50 outline-none focus:border-gray-500 focus:outline-none focus:bg-white px-4 py-3'>
            </input>
            <button 
            onClick={()=>{searchFunc()}}
            className='rounded-3xl px-5 py-3 text-white bg-black'>
                Search
            </button>
            
        </div>
        
        {
                recent.length>0 && (
                    <div className='flex flex-row space-x-5 items-center w-full px-2'>
                        <h2 className='text-black text-md whitespace-nowrap font-medium'>Recently Searched :</h2>
                        {
                            recent.map((e,i)=>{
                                return( 
                                    <div className='rounded-3xl border-gray-200 bg-gray-200 text-black text-sm px-4 py-2 text-center'>
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