import { useEffect, useState,createContext } from "react";
import Header from "./components/Header";
import { IoClose } from "react-icons/io5";
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
     getData()
  },[searchParam,units])



  return (
   
    <div className="flex flex-col items-center justify-around min-h-screen px-4 py-8 mx-auto max-w-7xl">
        {
          error && (<div  className="flex flex-row items-center justify-between w-full px-4 py-2 text-xl font-bold text-white bg-red-400 rounded-xl">
            <h2>  The location is incorrect. Search by a proper City name 
              </h2>
              <IoClose className="cursor-pointer" onClick={()=>{setError(!error)}}/>
          </div>)
            
          
        }
        <Header setSearchParam={setSearchParam} weatherData={weatherData} setUnits={setUnits}/>
        <Content data={weatherData}/>
        <FooterContent data={weatherData}/>
    </div>
    
  );
}

export default App;
