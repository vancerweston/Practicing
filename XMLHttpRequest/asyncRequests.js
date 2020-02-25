console.log('Before asyncAPI call.');

function callWeatherApiAsync() {
    console.log('Setting up API url.');
    let url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f8e49b232c9b9f98d8cb2f2627dbf178";

    console.log('Setting up XMLHttpRequestObject.');
    let xhttp =  new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){

            // pull the responce body and parse it for use in our UI
            console.log(this.responseText);
            console.log(typeof this.responseText);

            let weatherData = JSON.parse(this.responseText);
            console.log(weatherData);
            console.log(typeof weatherData);

            console.log(weatherData.base);

        } else {
            console.log('API status changed: ' +this.statusText);
            // show API status in UI
        }
    }

    xhttp.open('GET', url, true);
    xhttp.send();
    console.log('Sent async request.');


}

callWeatherApiAsync();

console.log('After the asyncAPI call.');