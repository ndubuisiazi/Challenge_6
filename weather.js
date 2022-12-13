city_name = 'Atlanta'
state = ''
contry_code = 'US'
api_key = '1d4046e99daf5c87de29e897182ce9ce'

var sh = document.querySelector("#searchHistory1");
var sh1 = document.querySelector("#searchHistory2");
var sh2 = document.querySelector("#searchHistory3");
var sh3 = document.querySelector("#searchHistory4");
var sh4 = document.querySelector("#searchHistory5");

weatherData=""

let recentSearch=[]

var searchHistory =JSON.parse(localStorage.getItem("City"))

sh.textContent = searchHistory[0]; 
sh1.textContent = searchHistory[1]; 
sh2.textContent = searchHistory[2]; 
sh3.textContent = searchHistory[3]; 
sh4.textContent = searchHistory[4]; 




function getData(){
    city_name=document.getElementById("searchbx").value
    recentSearch.push(city_name)
    localStorage.setItem("City",JSON.stringify(recentSearch) )
  
    
    
    datapull = 'https://api.openweathermap.org/geo/1.0/direct?q='+city_name+','+state+','+contry_code+'&limit='+10+'&appid='+api_key+'';
    dataP = datapull;
    console.log(dataP)
    lat1 = dataP[0].lat;
    lon1 = dataP[0].lon;
    

    fullData = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat1+'&lon='+lon1+'&appid='+api_key+'&units=imperial'
    weatherData = fullData
    console.log(weatherData)



  


  $(".current").append(
    `
    <div  id="recent" class="col-start-1">
    <ol>
    <li id="searchHistory1" ></li>
    <li id="searchHistory2" ></li>
    <li id="searchHistory3" ></li>
    <li id="searchHistory4" ></li>
    <li id="searchHistory5" ></li>
  </ol>
  </div>
    <div class="col-start-2" id="currentForecastBox">
    <div >
        <div class="w-1/5 rounded overflow-hidden space-x-4">
        <div class="font-bold text-xl mb-2  ">${weatherData.city.name}</div>
         <img class="w-1/5" src=" http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">${weatherData.list[0].weather[0].description}</div>
           <ul>
           <li> ${(Date(Number(weatherData.list[0].dt))).slice(0, 11)}
           <li>High: ${weatherData.list[0].temp.max}
           <li>low: ${weatherData.list[0].temp.min}
           <li>Humidity: ${weatherData.list[0].humidity}
           <li>Humidity: ${weatherData.list[0].speed}
           </ul>
         </div>
     </div>
 </div>
 <div id= "forecastBox" class="col-span-2">
 <div  id= "forecast" class="flex flex-row">
     <div  class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-1/5" src=" http://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">${weatherData.list[1].weather[0].description}</div>
           <ul>
           <li> ${(Date(Number(weatherData.list[1].dt))).slice(0, 11)}
           <li>High: ${weatherData.list[1].temp.max}
           <li>low: ${weatherData.list[1].temp.min}
           <li>Humidity: ${weatherData.list[1].humidity}
           <li>Humidity: ${weatherData.list[1].speed}
           </ul>
         </div>
       </div>
       <div class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-1/5" src=" http://openweathermap.org/img/wn/${weatherData.list[2].weather[0].icon}@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">${weatherData.list[2].weather[0].description}</div>
           <ul>
           <li> ${(Date(Number(weatherData.list[2].dt))).slice(0, 11)}
           <li>High: ${weatherData.list[2].temp.max}
           <li>low: ${weatherData.list[2].temp.min}
           <li>Humidity: ${weatherData.list[2].humidity}
           <li>Humidity: ${weatherData.list[2].speed}
           </ul>
         </div>
       </div>
       <div class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-1/5" src=" http://openweathermap.org/img/wn/${weatherData.list[3].weather[0].icon}@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">${weatherData.list[3].weather[0].description}</div>
           <ul>
           <li> ${(Date(Number(weatherData.list[3].dt))).slice(0, 11)}
           <li>High: ${weatherData.list[3].temp.max}
           <li>low: ${weatherData.list[3].temp.min}
           <li>Humidity: ${weatherData.list[3].humidity}
           <li>Humidity: ${weatherData.list[3].speed}
           </ul>
         </div>
       </div>
       <div class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-1/5" src=" http://openweathermap.org/img/wn/${weatherData.list[4].weather[0].icon}@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">${weatherData.list[4].weather[0].description}</div>
           <ul>
           <li> ${(Date(Number(weatherData.list[4].dt))).slice(0, 11)}
           <li>High: ${weatherData.list[4].temp.max}
           <li>low: ${weatherData.list[4].temp.min}
           <li>Humidity: ${weatherData.list[4].humidity}
           <li>Humidity: ${weatherData.list[4].speed}
           </ul>
         </div>
       </div>
       <div class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-1/5" src=" http://openweathermap.org/img/wn/${weatherData.list[5].weather[0].icon}@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">${weatherData.list[5].weather[0].description}</div>
           <ul>
           <li> ${(Date(Number(weatherData.list[5].dt))).slice(0, 11)}
           <li>High: ${weatherData.list[5].temp.max}
           <li>low: ${weatherData.list[5].temp.min}
           <li>Humidity: ${weatherData.list[5].humidity}
           <li>Humidity: ${weatherData.list[5].speed}
           </ul>
         </div>
       </div>
     </div>`

);

}
    









function run() {
    $( "#currentForecastBox").remove()
    $( "#forecast" ).remove()
    $( "#recent" ).remove()
    getData()
    
    
}
