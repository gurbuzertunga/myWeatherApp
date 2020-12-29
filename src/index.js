const weatherOutput = document.getElementById('weather-output');
const input = document.getElementById('degree');
const button = document.getElementById('clickDegree');
const myApiKey = '827dd5ea0e30919f428e83ad227c3851'

// async await
// button.addEventListener('click',(e) => {
//     const weatherLink = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=827dd5ea0e30919f428e83ad227c3851`;
//     (async function getWeather() {
//         const promise = await fetch(weatherLink, {mode: 'cors'})
        
//         promise.json().then((data) => {
//             div.innerHTML = fahToCel(data.main.temp);
//             const p = document.createElement('p');
//             p.innerHTML = data.weather[0].description;
//             document.body.appendChild(p);
//         })
//     })();
// })


// plain promise
button.addEventListener('click',(e) => {
    while (weatherOutput.firstChild) {
        weatherOutput.removeChild(weatherOutput.firstChild);
    }
    const weatherLink = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${myApiKey}`;
    fetch(weatherLink, {mode: 'cors'}).then((response) => {
        response.json().then((data) => {
            console.log(data);

            const cityName = document.createElement('p');
            cityName.className = 'text-white text-5xl';
            cityName.textContent = data.name;

            const degree = document.createElement('p');
            degree.textContent = kelToCel(data.main.temp) + '°';
            degree.className = 'text-white text-5xl';

            const iconContainer = document.createElement('div');
            iconContainer.className = 'mx-auto';
            const iconImg = document.createElement('img');
            iconImg.className = 'h-full';
            const icon = data.weather[0].icon;
            iconImg.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);
            weatherOutput.appendChild(cityName);
            weatherOutput.appendChild(degree);
            weatherOutput.appendChild(iconContainer);

            
            iconContainer.appendChild(iconImg);

        });
    });
    
});


function kelToCel(kel) {
    cels = parseInt(kel - 273.15);
    console.log(cels);
    return cels;
}