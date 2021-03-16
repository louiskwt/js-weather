class UI {
    constructor() {
        this.loaction = document.getElementById('w-loaction');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.min = document.getElementById('w-min-temp');
        this.max = document.getElementById('w-max-temp');
        this.feelslike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    // paint method
    paint(weather) {
        this.loaction.textContent = weather.name;
        this.desc.textContent = weather.weather[0]["description"];
        this.temp.textContent = Math.floor(weather.main["temp"] - 273.15) + ' C';
        // work on icon later
        // this.details.textContent = weather.weather[0]["description"];
        this.feelslike.textContent = 'Feels like： ' + Math.floor(weather.main["feels_like"] - 273.15) + " C";
        this.max.textContent = 'High：' + Math.floor(weather.main["temp_min"] - 273.15) + ' C';
        this.min.textContent = 'Low ：' + Math.floor(weather.main["temp_max"] - 273.15) + ' C';
        this.humidity.textContent = 'Humidity：' + weather.main["humidity"]  + "%";

    }
}