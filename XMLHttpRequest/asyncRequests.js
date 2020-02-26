console.log('Before asyncAPI call.');

function apiReturnHandler() {
    if(this.readyState == 4 && this.status == 200){

        // pull the responce body and parse it for use in our UI
        console.log(this.responseText);
        console.log(typeof this.responseText);

        let weatherData = JSON.parse(this.responseText);
        console.log(weatherData);
        console.log(typeof weatherData);

        console.log(weatherData.base);

    } 

    // Handling Errors Here
    if(this.status == 401){
        console.log('You are not authorized. Your API key may be invalid.');
    }

    if(this.status == 404){
        console.log('The function you requested does not exsist. Please provide a valid one.');
    }
}

function apiErrorHandler(error) {
    console.log('There has been a horrible error.');
    console.log(error);
    console.log(this);
}

function apiProgressHandler(event) {
    console.log(event);
    let percentLoaded = event.loaded / event.total;
    console.log('Percentage Loaded: ' + Math.floor(percentLoaded * 100) + '%');

    // Update the UI (pie chart or loading bar) with the current percentage.
}

function apiTimeoutHandler(event){
    console.log(event);
    console.log('The request has taken too long and will be terminated. You may want to retry in a few minutes.');
}

function callWeatherApiAsync() {
    console.log('Setting up API url.');
    let url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f8e49b232c9b9f98d8cb2f2627dbf178";

    console.log('Setting up XMLHttpRequestObject.');
    let xhttp =  new XMLHttpRequest();
    xhttp.onreadystatechange = apiReturnHandler;
    xhttp.onerror = apiErrorHandler;
    xhttp.onprogress = apiProgressHandler;

    xhttp.timeout = 2000; //time in milliseconds
    xhttp.ontimeout = apiTimeoutHandler;
    
    xhttp.open('GET', url, true);
    xhttp.send();
    console.log('Sent async request.');
}

callWeatherApiAsync();

console.log('After the asyncAPI call.');