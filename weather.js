class Weather{
    constructor(city, country){
        this.apiKey = '3c3b002695fd537bf7c8e51524387bd6';
        this.city = city;
        this.country = country;
    }

    async getWeather(){
         const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

         const responseData = await response.json();

         return responseData;
    }

    changeLocation(city,country){
        this.city = city;
        this.country = country;
    }
}