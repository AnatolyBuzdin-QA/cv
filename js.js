/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector("button");

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener("click", function () {
  alert("Цель всегда Рядом - нужно просто Оглянуться!:D ^:^");
});

VANTA.CELLS({
  el: "intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  color1: 0x761da2,
  color2: 0x6f6812,
  size: 1.6,
  speed: 2.4,
});
