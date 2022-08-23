const URL =
  'https://api.openweathermap.org/data/2.5/weather?lat=-24.18&lon=-65.33&lang=es&units=metric&appid=ec72693024ff3528187442d9519966be';

const list = document.querySelector('.cities');
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const { main, name, sys, weather } = data;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`;
    const temp = main.temp.toFixed(1);
    const div = document.createElement('div');

    console.log(data);
    div.classList.add('city');
    const markup = ` <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp">${temp}<sup>°C</sup></div>
    <figure>
    <img class="city-icon" src=${icon} alt="${weather[0]['description']}">
    <figcaption>${weather[0]['description']}</figcaption>
    </figure>`;
    div.innerHTML = markup;
    list.appendChild(div);
  });

document.getElementById('enviar');
