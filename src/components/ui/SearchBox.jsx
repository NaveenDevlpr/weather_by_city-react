import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";

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
            localStorage.setItem('recents', JSON.stringify(updatedRecent));
        } else {
           
            setRecent([...recent, search]);
            localStorage.setItem('recents', JSON.stringify([...recent, search]));
            
        }
        
    }


    const removeRecent=(i)=>{
     
        const localRecents=localStorage.getItem('recents')
        
        if(localRecents)
        {
            var r=JSON.parse(localRecents)
        
            r.splice(i,1)

            localStorage.setItem('recents',JSON.stringify(r))
            setRecent(r);
            
        }
    }
    const getRecents=()=>{
        const data=localStorage.getItem('recents') 
        if(data){
         setRecent(JSON.parse(data))
        }
    }
    useEffect(()=>{
      getRecents()
    },[])
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
            className='rounded-3xl px-5 py-3 text-white bg-[#BFA2DB]'>
                Search
            </button>
            
        </div>
        
        {
                recent.length>0 && (
                    <div className='grid items-center justify-center w-full grid-cols-3 gap-2 px-2 space-x-5 md:flex-row md:flex'>
                        <h2 className='font-medium text-black text-md whitespace-nowrap'>Recently Searched :</h2>
                        {
                            recent.map((e,i)=>{
                                return( 
                                    <div key={i} className='flex flex-row items-center justify-center px-4 py-2 space-x-2 text-sm bg-gray-200 border-gray-200 rounded-3xl'>
                                        <h2>{e}</h2>
                                        <IoClose className='w-4 h-4 cursor-pointer' onClick={()=>{removeRecent(i)}}/>
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