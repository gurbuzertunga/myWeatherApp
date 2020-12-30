import * as el from './dom-elements';

export default function populateDom() {
  const weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${el.input.value}&appid=${el.myApiKey}&units=metric`;
  fetch(weatherLink, { mode: 'cors' }).then((response) => {
    response.json().then((data) => {
      el.cityName.className = 'text-white text-5xl';
      el.cityName.textContent = data.name;
      el.defValue = parseInt(data.main.temp); // eslint-disable-line
      el.degree.textContent = `${el.defValue}°`;
      el.degree.className = 'text-white text-5xl';
      el.degreeType.textContent = 'Celcius';

      el.iconContainer.className = 'mx-auto';
      el.iconImg.className = 'h-full';
      el.iconImg.setAttribute(
        'src',
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      );

      el.weatherOutput.appendChild(el.cityName);
      el.weatherOutput.appendChild(el.degree);
      el.weatherOutput.appendChild(el.iconContainer);
      el.iconContainer.appendChild(el.iconImg);

      el.input.value = '';
      el.defUnit = 'celcius';
    });
  });
}
