import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";

const SearchBox = ({setSearchParam,setUnits}) => {
    const [recent,setRecent]=useState([])
    const [search,setSearch]=useState('')
    const [celcius,setCelcius]=useState(true)
    const [farenheit,setFarenheit]=useState(false)

    const searchFunc=()=>{
        if(search)
       {
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


    const changeCelcius=()=>{
        setUnits("metric")
        setCelcius(true)
        setFarenheit(false)
    }

    const changeFarenheit=()=>{
        setUnits("imperila")
        setCelcius(false)
        setFarenheit(true)
    }
    

    const revisit=(i)=>{
        const data=localStorage.getItem('recents')
        var r=JSON.parse(data)
        var needed=r[i]
        setSearch(needed)
        setSearchParam((prevValue)=>(
            {...prevValue,q:needed}
          ))
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
           <div className='flex flex-row items-center ring-2 ring-gray-400/50 rounded-xl'>
                <button className={`w-1/2 px-4 py-2 rounded-l-xl ${celcius?'bg-[#BFA2DB] text-white':'text-black'}`} onClick={()=>changeCelcius()}>
                    &deg;C
                </button>
                <button className={`w-1/2 px-4 py-2 rounded-r-xl ${farenheit?'bg-[#BFA2DB] text-white':'text-black'}`} onClick={()=>{changeFarenheit()}}>
                    &deg;F
                </button>
            <div/>
        </div>

        </div>
        
        {
                recent.length>0 && (
                    <div className='grid items-center justify-center w-full grid-cols-3 gap-2 px-2 space-x-5 md:flex-row md:flex'>
                        <h2 className='font-medium text-black text-md whitespace-nowrap'>Recently Searched :</h2>
                        {
                            recent.map((e,i)=>{
                                return( 
                                    <div 
                                   
                                    key={i} className='flex flex-row items-center justify-center px-4 py-2 space-x-2 text-sm bg-gray-200 border-gray-200 cursor-pointer rounded-3xl'>
                                        <h2  onClick={()=>{revisit(i)}}>{e}</h2>
                                        <IoClose className='inline-block w-4 h-4 cursor-pointer' onClick={()=>{removeRecent(i)}}/>
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