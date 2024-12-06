console.log("Скрипт подключён!");
// Находим элемент хедера
const navbar = document.getElementById("navbar");
if (!navbar) {
  console.error("Элемент navbar не найден");
}

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

//Бургер

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});
