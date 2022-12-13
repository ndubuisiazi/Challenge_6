city_name = 'Atlanta'
state = ''
contry_code = 'US'
api_key = '1d4046e99daf5c87de29e897182ce9ce'
date1 =[]
date2=[]
date3=[]
date4=[]
date5=[]
date6=[]
fiveDay=[date1,date2,date3,date4,date5,date6]
dayofWeek=["Sun","Mon","Tues", "Weds","Thurs","Fri","Sat"]
icon1 =[]
icon2=[]
icon3=[]
icon4=[]
icon5=[]
icon6=[]
icons=[icon1,icon2,icon3,icon4,icon5,icon6]


forecast_length = 60

highs=[]
lows =[]

const newComentHandler = () => {
  
  fetch('https://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat1+'&lon='+lon1+'&cnt=7&&appid='+api_key+'&units=imperial')
  .then(res=> res.json())
  .then(data => console.log(data.list))

};



async function getData(){
    city_name=document.getElementById("searchbx").value
    
    datapull = await fetch('https://api.openweathermap.org/geo/1.0/direct?q='+city_name+','+state+','+contry_code+'&limit='+10+'&appid='+api_key+'');
    dataP = await datapull.json();
    lat1 = dataP[0].lat;
    lon1 = dataP[0].lon;

    console.log("***********"+lat1)
    console.log("***********"+lon1)

    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat1+'&lon='+lon1+'&appid='+api_key+'&units=imperial')
  .then(res=> res.json())
  .then(data => console.log(data.list[0].weather[0].description))
  $(".current").append(
    ` <div id="currentForecastBox">
    <div>
        <div class="w-1/5 rounded overflow-hidden space-x-4">
         <img class="w-3/5" src=" http://openweathermap.org/img/wn/10d@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">${data.list[0].weather[0].description}</div>
           <p class=" text-base">
             Lorem ipsum dolor sit amet
           </p>
         </div>
     </div>
 </div>
 <div id= "forecastBox" class="col-span-2">
 <div  id= "forecast" class="flex flex-row">
     <div  class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-3/5" src=" http://openweathermap.org/img/wn/10d@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">The Coldest Sunset</div>
           <p class=" text-base">
             Lorem ipsum dolor sit amet
           </p>
         </div>
       </div>
       <div class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-3/5" src=" http://openweathermap.org/img/wn/10d@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">The Coldest Sunset</div>
           <p class=" text-base">
             Lorem ipsum dolor sit amet
           </p>
         </div>
       </div>
       <div class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-3/5" src=" http://openweathermap.org/img/wn/10d@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">The Coldest Sunset</div>
           <p class=" text-base">
             Lorem ipsum dolor sit amet
           </p>
         </div>
       </div>
       <div class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-3/5" src=" http://openweathermap.org/img/wn/10d@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">The Coldest Sunset</div>
           <p class=" text-base">
             Lorem ipsum dolor sit amet
           </p>
         </div>
       </div>
       <div class="w-1/5 rounded overflow-hidden shadow-lg space-x-4">
         <img class="w-3/5" src=" http://openweathermap.org/img/wn/10d@2x.png" alt="Sunset in the mountains">
         <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2 ">The Coldest Sunset</div>
           <p class=" text-base">
             Lorem ipsum dolor sit amet
           </p>
         </div>
       </div>
     </div>`

)
}
    



    







function run() {
    $( "#currentForecastBox").remove()
    $( "#forecast" ).remove()
    getData()
    // day =new Date().getDay()
    // console.log(day+1)    
    
}
