// // Check if Geolocation API is supported
// if ("geolocation" in navigator) {
//     // Request the user's current position
//     navigator.geolocation.getCurrentPosition(
//         function(position) {
//             // Success callback
//             var latitude = position.coords.latitude;
//             var longitude = position.coords.longitude;
//             console.log("Latitude:", latitude);
//             console.log("Longitude:", longitude);
            
//             // You can now use latitude and longitude to do further processing
//         }
//     );
// } else {
//     console.error("Geolocation is not supported by this browser.");
// }
// const userTab = document.querySelector("[data-userWeather]")
// const searchTab = document.querySelector("[data-searchWeather]")
// const userInfoContainer = document.querySelector(".weather-container")
// const grantAccessContainer = document.querySelector(".grant-location-container")
// const searchForm = document.querySelector("[data-searchForm]")
// const loadingScreen = document.querySelector(".loading-container")
// const unserInfoContainer = document.querySelector(".user-info-container")


// let oldTab = userTab;
// // const API_KEY = 'https://api.weatherapi.com/v1/current.json?key=d282f40f914f41fea91215520240603&q=London&aqi=no';
// oldTab.classList.add("current-tab");
// getfromSessionStorage();
// function switchTab(newTab){
//     if(newTab != oldTab){
//         oldTab.classList.remove('current-tab');
//         oldTab = newTab;
//         oldTab.classList.add('current-tab')

//         if(!searchForm.classList.contains("active")){

//             //searchform vala container invisible ,make it visible 
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             //in your weather tab make weather display.
//             //check local storage for cordinates first if saved
//             searchForm.classList.add("active")

//         }
//         else{
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             getfromSessionStorage();
//         }
//     }
// }

// userTab.addEventListener('click', () =>{
//     //pass Clicked tab as input parameter
//     switchTab(userTab);
// });

// searchTab.addEventListener('click', ()=>{
//     //pass Clicked tab as input parameter
//     switchTab(searchTab)
// });

// //check if cordinates already present in session storage
//  function getfromSessionStorage(){
//     const localCoordinates = sessionStorage.getItem("user-coordinates");
//     if(!localCoordinates){
//         grantAccessContainer.classList.add("active");
//     }
//     else{
//         const coordinates = JSON.parse(localCoordinates);
//         fetchUserWeatherInfor(coordinates);
//     }
//  }

//  async function fetchUserWeatherInfor(coordinates){
     
//     const {lat, lon} = coordinates;
//     grantAccessContainer.classList.remove("active");
//     loadingScreen.classList.add("active");

//     //API CALL
//     try{
//         const response = await fetch('https://api.weatherapi.com/v1/current.json?key=d282f40f914f41fea91215520240603&q=`${city}`&aqi=no')
//         const data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err){
//         loadingScreen.classList.remove("active");
//         console.log("Fetch error");
//         // Home Work

//     }
//  }

//  function renderWeatherInfo(weatherInfo){
//     //fetch the elements
//     const cityName = document.querySelector("[data-cityName]");
//     const countryIcon = document.querySelector("[data-countryIcon]");
//     const desc = document.querySelector("[data-weatherDesc]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]");
//     const temp = document.querySelector("[data-temp]");
//     const windspeed = document.querySelector("[data-windspeed]");
//     const humidity = document.querySelector("[data-humidity]");
//     const cloudiness = document.querySelector("[data-cloudiness]");

//     cityName.innerText = weatherInfo?.location.region;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.location?.country.toLowerCase()}.png`;
//     desc.innerText = weatherInfo?.current?.condition?.text;
//     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.current?.condition?.icon}.png`;
//     temp.innerText = `${weatherInfo?.current?.temp_c} °C`;
//     windspeed.innerText = `${weatherInfo?.current?.wind_mph} m/s`;
//     humidity.innerText = `${weatherInfo?.current?.humidity}%`;
//     cloudiness.innerText = `${weatherInfo?.current?.cloud}%`;


//  }
// function getlocation(){
//     if(navigator.geolocation){
//          navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         //HM show an alert for no geolocation support available
//         alert("No support")
//     }
// }
// function showPosition(position){
//     const userCoordinates={
//         lat:position.coords.latitude,
//         lon:position.coords.longitude

//     }

//     sessionStorage.getItem("user-cordinates", JSON.stringify(userCoordinates));
//     fetchUserWeatherInfor(userCoordinates);
// }
// // function x(){
// //     if (navigator.geolocation) {
// //         // Geolocation is supported, proceed with obtaining the user's position
// //     console.log("s");
// //     } else {
// //         console.log("Geolocation is not supported by this browser.");
// //     }
// // }
// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener('click', getlocation);

// const searchInput = document.querySelector("[data-searchInput") 
// searchForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let cityName = searchInput.value;
    
//     if(cityName === "") 
//         return;
//     else
//         fetchUserWeatherInfor(cityName);
// });

// async function fetchUserWeatherInfor(city){
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try {
//         const response = await fetch('https://api.weatherapi.com/v1/current.json?key=d282f40f914f41fea91215520240603&q=`${city}`&aqi=no');
//         const data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data)
//     } catch (error) {
//         console.log("city not found");
        
//     }

// }