function getDogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("card-img").src = data.message;
    })
    .catch((error) => console.log(error));
}

function getWeather(event) {
  event.preventDefault();
  let city = event.target.data;
  let url = "https://goweather.herokuapp.com/weather/{city}".replace(
    "{city}",
    city
  );
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("api-content1").innerHTML = `
        <p>Temperature: ${data.temperature}</p>
        <p>Winds: ${data.wind}</p>
        <p>description: ${data.description}</p>
        `;
    })
    .catch((error) => console.log(error));
}
