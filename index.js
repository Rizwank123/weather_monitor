let data_div = document.getElementById("data");

async function getWeather() {
    try {
        let city = document.getElementById("city").value;
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4c70ce6a6821649a416cb9521d5f4f8&units=metric`
        );
        let data = await response.json();
        let lon = data.coord.lon;
        let lat = data.coord.lat;

        let response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=e4c70ce6a6821649a416cb9521d5f4f8&units=metric`)
        let data2 = await response2.json();



        showWeather(data);
        WeathersevenDay(data2.daily)
        console.log("data:", data);
        console.log("data7", data2)
    } catch (err) {
        console.log("err", err)
    }
}
var seven = document.querySelector(".show7");
function showWeather(weather) {
    seven.innerHTML = "";
    data_div.innerHTML = "";

    let riseDate = new Date((weather.sys.sunrise) * 1000);
    let rhour = riseDate.getHours();
    let rminute = riseDate.getMinutes();
    let risetime = `${rhour}:${rminute}`

    let setDate = new Date((weather.sys.sunset) * 1000);
    let shour = setDate.getHours();
    let sminute = setDate.getMinutes();
    let setime = `${shour}:${sminute}`


    let time = document.createElement("p")
    var now = new Date();
    time.innerText = now.toDateString();
    let wind = document.createElement("h3")
    let city = document.createElement("h1")
    let temp = document.createElement("h2");
    let pressure = document.createElement("h6");
    let humidity = document.createElement("h3");
    let sunset = document.createElement("h6")
    let temp_div = document.createElement("div")
    let cloud_img = document.createElement("div")
    let minmax_div = document.createElement("div")
    let sun_div = document.createElement("div")
    let min_temp = document.createElement("h3")
    let max_temp = document.createElement("h3")
    let wind_cloud_div = document.createElement("div");
    let min_image = document.createElement("img")
    let max_image = document.createElement("img")
    let cloud_image = document.createElement("img")
    let sunrise = document.createElement("img")
    let sunset_img = document.createElement("img")
    let wether_type = document.createElement("h3")


    wind.innerText = `Wind-${weather.wind.speed} km/h`;
    city.innerText = `${weather.name}`;
    temp.innerText = `${Math.round(weather.main.temp)}°c`;

    humidity.innerText = `Humidity- ${weather.main.humidity}%`;
    pressure.innerText = `${risetime} AM`;
    sunset.innerText = `${setime} PM`;
    temp_div.setAttribute("id", "temp_div")
    minmax_div.setAttribute("id", "minmax_div")
    min_temp.innerText = `Min-${weather.main.temp_min}°c`
    max_temp.innerText = `Max-${weather.main.temp_max}°c`
    wind_cloud_div.setAttribute("id", "wind_cloud_div")
    cloud_img.setAttribute("id", "cloud_img")
    sun_div.setAttribute("id", "sun_div")
    min_image.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/223/223730.png")
    max_image.setAttribute("src", "https://i.ibb.co/q5FRkpP/images-removebg-preview.png")
    sunrise.setAttribute("src", "https://i.ibb.co/mhZMVzL/eftrt.png")
    sunset_img.setAttribute("src", "https://i.ibb.co/xYb1WDM/muje-upload-ker.png")
    wether_type.innerText = `${weather.weather[0].main}`;



    cloud_image.setAttribute("src", `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)


    sun_div.append(sunrise, pressure, sunset_img, sunset)
    temp_div.append(temp, cloud_image, wether_type)
    wind_cloud_div.append(min_image, min_temp, max_image, max_temp)
    minmax_div.append(humidity, wind);
    data_div.append(city, time, temp_div, minmax_div, wind_cloud_div, sun_div);//

    showmap();


}

function showmap() {
    let city = document.getElementById("city").value;
    var map = document.getElementById("map");
    map.innerHTML = "";
    let frame = document.createElement("iframe");
    frame.setAttribute("src", `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
    frame.setAttribute("id", "frame")
    map.append(frame);

}

function WeathersevenDay(weather7) {
    weather7.map(function (event) {
        var divshow7 = document.createElement("div");
        var imgDiv = document.createElement("div");
        var icon = document.createElement("img")
        var day = document.createElement("p");
        var maxtp = document.createElement("p");
        var mintp = document.createElement("p")

        let date = new Date(event.dt * 1000);
        if (date.getDay() == 0) {
            day.textContent = "Sun";
            icon.src = `http://openweathermap.org/img/wn/${event.weather[0].icon}@2x.png`
            maxtp.textContent = `Max-${Math.floor(event.temp.max)}°c`;
            mintp.textContent = `Max-${Math.floor(event.temp.min)}°c`;
        }
        else if (date.getDay() == 1) {
            day.textContent = "Mon";
            icon.src = `http://openweathermap.org/img/wn/${event.weather[0].icon}@2x.png`
            maxtp.textContent = `Max-${Math.floor(event.temp.max)}°c`;
            mintp.textContent = `Max-${Math.floor(event.temp.min)}°c`;
        }
        else if (date.getDay() == 2) {
            day.textContent = "Tue";
            icon.src = `http://openweathermap.org/img/wn/${event.weather[0].icon}@2x.png`
            maxtp.textContent = `Max-${Math.floor(event.temp.max)}°c`;
            mintp.textContent = `Max-${Math.floor(event.temp.min)}°c`;
        }
        else if (date.getDay() == 3) {
            day.textContent = "Wed";
            icon.src = `http://openweathermap.org/img/wn/${event.weather[0].icon}@2x.png`
            maxtp.textContent = `Max-${Math.floor(event.temp.max)}°c`;
            mintp.textContent = `Max-${Math.floor(event.temp.min)}°c`;
        }
        else if (date.getDay() == 4) {
            day.textContent = "Thu";
            icon.src = `http://openweathermap.org/img/wn/${event.weather[0].icon}@2x.png`
            maxtp.textContent = `Max-${Math.floor(event.temp.max)}°c`;
            mintp.textContent = `Max-${Math.floor(event.temp.min)}°c`;
        }
        else if (date.getDay() == 5) {
            day.textContent = "Fri";
            icon.src = `http://openweathermap.org/img/wn/${event.weather[0].icon}@2x.png`
            maxtp.textContent = `Max-${Math.floor(event.temp.max)}°c`;
            mintp.textContent = `Max-${Math.floor(event.temp.min)}°c`;
        }
        else if (date.getDay() == 6) {
            day.textContent = "Sat";
            icon.src = `http://openweathermap.org/img/wn/${event.weather[0].icon}@2x.png`
            maxtp.textContent = `Max-${Math.floor(event.temp.max)}°c`;
            mintp.textContent = `Max-${Math.floor(event.temp.min)}°c`;
        }
        else if (date.getDay() == 7) {
            day.textContent = "Sun";
            icon.src = `http://openweathermap.org/img/wn/${event.weather[0].icon}@2x.png`
            maxtp.textContent = `Max-${Math.floor(event.temp.max)}°c`;
            mintp.textContent = `Max-${Math.floor(event.temp.min)}°c`;
        }
        imgDiv.append(icon);
        divshow7.append(day, imgDiv, maxtp, mintp)
        seven.append(divshow7);

    })
}

