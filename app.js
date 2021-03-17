// Init storage
const storage = new Storage();

const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);
const ui = new UI();


// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}

// Change location event
document.getElementById('w-changeBtn').addEventListener('click', (e) => {
    const cityInput = document.getElementById('city');
    // const state = document.getElementById('state').value;
    // const country = document.getElementById('country').value;
    if(cityInput.value === '') {
        cityInput.classList.add('is-invalid');
    } else {
        // Change location
        weather.changeLocation(cityInput.value);
        // Set location in local storage
        storage.setLocationData(cityInput.value);
        // get and display modal
        getWeather();
        // close modal
        $('#locModal').modal('hide');
    }
    cityInput.value = '';
})