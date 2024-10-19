// Определение переменной для элемента div-test-under
const div_test_under = document.querySelector(".div-test-under");

// Функция для скрытия блока div-test-under
function slide() {
  // Установка свойств CSS transform для элемента div-test-under
  div_test_under.style.transform = "translateX(-100%) translateY(-100%)";
  // Перевод блока div-test-under влево на 100% и вниз на 100%, скрывая его из видимой области
}

// Функция для отображения блока div-test-under
function slidel() {
  // Установка свойств CSS transform для элемента div-test-under
  div_test_under.style.transform = "translateX(0) translateY(-100%)";
  // Перевод блока div-test-under обратно на 0% по оси X, сохраняя его скрытым по оси Y
}
