const API_KEY='d4d3a060e8b93750087d999c945e392d'
const BASE_URL='https://api.openweathermap.org/data/2.5'
const getWeatherData=async(type,searchParam)=>{
    
    const url=new URL(BASE_URL +'/'+ type)

    url.search=new URLSearchParams({...searchParam,appid:API_KEY})
   

    const data= await fetch(url).then((res)=>res.json()).then((data)=>data)

    
    if(data && data.coord){
        const {
            coord:{lon,lat},
            main:{temp,feels_like,temp_min,temp_max,humidity,pressure},
            name,
            dt,
            sys:{country,sunrise,sunset},
            weather,
            visibility,
            wind:{speed}
        
         }=data
        
         const {main:details,icon}=weather[0]
         return{
            lat,lon,temp,feels_like,temp_max,temp_min,humidity,name,dt,country,sunrise,sunset,details,icon,speed,pressure,visibility 
         }
    }
    else{
        
        return false
    }
}


export default getWeatherData