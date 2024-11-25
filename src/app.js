// Находим элемент навигации
const navbar = document.getElementById("navbar");

// Отслеживание последней позиции прокрутки
let lastScrollY = window.scrollY;

// Добавляем событие scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Если прокручиваем вниз, скрываем навигацию
    navbar.classList.add("-translate-y-full");
  } else {
    // Если прокручиваем вверх, показываем навигацию
    navbar.classList.remove("-translate-y-full");
  }
  lastScrollY = window.scrollY; // Обновляем последнюю позицию прокрутки
});
