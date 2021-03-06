class Weather {
    constructor(city) {
        this.apiKey = '64bbc6074df6622114643520067a3825';
        this.city = city;
    }
    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&appid=${this.apiKey}&lang=zh-tw`);
        const responseData = await response.json();

        return responseData
    }
    // change weather location
    changeLocation(city) {
        this.city = city;
    }
}