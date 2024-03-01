import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <div className='flex items-center justify-center felx-row'>
        <AiOutlineLoading3Quarters className='block w-5 h-5 animate-spin'/>
    </div>
  )
}

export default Loader