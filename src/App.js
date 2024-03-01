import { useEffect, useState,createContext } from "react";
import Header from "./components/Header";

import getWeatherData from "./services";
import Content from "./components/Content";
import FooterContent from "./components/FooterContent";


function App() {
  const [searchParam,setSearchParam]=useState({q:'chennai'})
  const [units,setUnits]=useState("metric")
  const [weatherData,setWeatherData]=useState()
  const [error,setError]=useState(false)

  

  const getData=async()=>{
    try {
      
      const data=await  getWeatherData("weather",{...searchParam,units})
      if(data){
        setWeatherData(data)
      setError(false)
      }
      else{
        setError(true)
      }
      
    } catch (error) {
      
    }
  
  }

  useEffect(()=>{
     //getData()
  },[searchParam,units])



  return (
   
    <div className="flex flex-col items-center justify-around min-h-screen px-4 py-8 mx-auto max-w-7xl">
        {
          error && (<div  className="w-full py-2 text-xl font-bold text-white bg-red-400">
              The location is incorrect
          </div>)
            
          
        }
        <Header setSearchParam={setSearchParam} weatherData={weatherData}/>
        <Content data={weatherData}/>
        <FooterContent data={weatherData}/>
    </div>
    
  );
}

export default App;
