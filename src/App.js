import { useEffect, useState,createContext } from "react";
import Header from "./components/Header";

import getWeatherData from "./services";
import Content from "./components/Content";
import FooterContent from "./components/FooterContent";


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
   
    <div className="flex flex-col items-center justify-around min-h-screen px-4 py-8 mx-auto max-w-7xl">
        
        <Header setSearchParam={setSearchParam} weatherData={weatherData}/>
        <Content data={weatherData}/>
        <FooterContent data={weatherData}/>
    </div>
    
  );
}

export default App;
