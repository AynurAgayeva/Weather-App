const btn = document.querySelector("button");
const input = document.querySelector(".search-bar");
const weather =  document.querySelector(".weather");
  let apiKey = "4efa1baf08634965386b3424394aa85b";
btn.addEventListener("click", e =>{
  e.preventDefault();
  e.stopPropagation();
// fetch(`https://api.openweathermap.org/data/2.5/weather?q&appid=${apiKey}&units=metric&lang=az`)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)
.then(res=>res.json())
.then(data => {
  console.log(data)
const city = data["name"];
const temp = parseInt(data["main"]["temp"]);
const icon = data["weather"][0]['icon'];

var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
const description = data["weather"][0]["description"];
const humidity = data["main"]["humidity"];
const wind = data["wind"]["speed"];

weather.innerHTML = 
`
  <h2 class="city">Weather in ${city}</h2>
  <div class="all">
   <div class="temp">${temp}°C</div>
  <img src="${iconurl}" width="100px" height="100px" alt="" class="icon">
  </div>

 <div class="description">${description}</div>
 <div class="humidity">Humidity: ${humidity}%</div>
 <div class="wind">Wind speed: ${wind}km/h</div>

`

console.log(data);
});





});