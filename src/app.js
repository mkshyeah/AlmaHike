// Находим элемент хедера
const navbar = document.getElementById("navbar");

// Отслеживание последней позиции прокрутки
let lastScrollY = window.scrollY;

// Добавляем событие прокрутки
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Прокрутка вниз - скрываем хедер
    navbar.classList.remove("navbar-visible");
    navbar.classList.add("navbar-hidden");
  } else {
    // Прокрутка вверх - показываем хедер
    navbar.classList.remove("navbar-hidden");
    navbar.classList.add("navbar-visible");
  }
  lastScrollY = window.scrollY; // Обновляем позицию прокрутки
});

//

const lat = 43.03;
const lon = 77.06;

const apiKey = "99ed8539e8a46322affc805ad209b4d6";
// const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&lang=ru&units=metric`;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ru&units=metric`;

function getWeather() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка при запросе данных: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Проверьте, что данные приходят
      displayCurrentWeather(data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

function displayCurrentWeather(data) {
  if (!data.main || !data.wind) {
    console.error("Некорректные данные:", data);
    document.getElementById("safety").textContent = "Нет данных";
    return;
  }

  const temp = data.main.temp; // Температура
  const humidity = data.main.humidity; // Влажность
  const windSpeed = data.wind.speed; // Скорость ветра

  document.getElementById("temp").textContent = `${Math.round(temp)}°C`;
  document.getElementById("humi").textContent = `${humidity}%`;
  document.getElementById("wind").textContent = `${Math.round(windSpeed)} м/с`;

  safetyMeasurement(Math.round(windSpeed), Math.round(temp));
}

function safetyMeasurement(windSpeed, temp) {
  const safetyCell = document.getElementById("safety");

  if (windSpeed > 15 || temp > 30 || temp < -30) {
    safetyCell.style.background = "red";
    safetyCell.textContent = "Опасно";
  } else if (temp < -10 || windSpeed > 10) {
    safetyCell.style.backgroundColor = "yellow";
    safetyCell.textContent = "Не рекомендуется";
  } else {
    safetyCell.style.backgroundColor = "green";
    safetyCell.textContent = "Безопасно";
  }
}

// Запускаем функцию
getWeather();

//Бургер

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});
