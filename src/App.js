import { useEffect, useState,createContext } from "react";
import Header from "./components/Header";

import getWeatherData from "./services";
import Content from "./components/Content";


function App() {
  const [searchParam,setSearchParam]=useState({q:'chennai'})
  const [units,setUnits]=useState("metric")
  const [weatherData,setWeatherData]=useState()

  

  const getData=async()=>{


   const data=await  getWeatherData("weather",{...searchParam,units})

   setWeatherData(data)
  }

  useEffect(()=>{
  //getData()
  },[searchParam,units])



  return (
   
    <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center p-4">
        <Header setSearchParam={setSearchParam} weatherData={weatherData}/>
        <Content data={weatherData}/>
    </div>
    
  );
}

export default App;
