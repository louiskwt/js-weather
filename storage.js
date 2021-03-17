class Storage {
    constructor() {
        this.city;
        this.defaultCity = 'Hong Kong';
    }

    // get location

    // set location
    setLocationData(city) {
        localStorage.setItem('city', city)
    }
}