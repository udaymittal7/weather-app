class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.details = document.getElementById('w-details');
        this.string = document.getElementById('w-string');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.tempMin = document.getElementById('w-temp-min');
        this.tempMax = document.getElementById('w-temp-max');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = `${document.getElementById('city').value} ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;
        this.tempMax.textContent = `Max Temp: ${weather.main.temp_max}`;
        this.tempMin.textContent = `Min Temp: ${weather.main.temp_min}`;
    }
}