// Получение элементов div по их ID
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");
let div6 = document.getElementById("div6");
let div7 = document.getElementById("div7");
let div8 = document.getElementById("div8");
let div9 = document.getElementById("div9");
let div10 = document.getElementById("div10");
let div11 = document.getElementById("div11");

// Получение всех радиокнопок с значением "true"
var radios = document.querySelectorAll('input[type="radio"][value="true"]');

// Переменные для отслеживания текущего вопроса и количества правильных ответов
let g = 0; // Текущий вопрос (начиная с 1)
let n = 1; // Количество правильных ответов (начиная с 0)

// Функции перехода к следующему вопросу для каждого вопроса
function next1() {
  div1.style.display = "none"; // Скрыть текущий вопрос (div1)
  div2.style.display = "block"; // Показать следующий вопрос (div2)
  g++; // Увеличить номер текущего вопроса
}

function next2() {
  div2.style.display = "none";
  div3.style.display = "block";
  g++;
}

function next3() {
  div3.style.display = "none";
  div4.style.display = "block";
  g++;
}

function next4() {
  div4.style.display = "none";
  div5.style.display = "block";
  g++;
}

function next5() {
  div5.style.display = "none";
  div6.style.display = "block";
  g++;
}

function next6() {
  div6.style.display = "none";
  div7.style.display = "block";
  g++;
}

function next7() {
  div7.style.display = "none";
  div8.style.display = "block";
  g++;
}

function next8() {
  div8.style.display = "none";
  div9.style.display = "block";
  g++;
}

function next9() {
  div9.style.display = "none";
  div10.style.display = "block";
  g++;
}

// Функции возврата к предыдущему вопросу для каждого вопроса
function back2() {
  div2.style.display = "none";
  div1.style.display = "block";
}

function back3() {
  div3.style.display = "none";
  div2.style.display = "block";
}

function back4() {
  div4.style.display = "none";
  div3.style.display = "block";
}

function back5() {
  div5.style.display = "none";
  div4.style.display = "block";
}

function back6() {
  div6.style.display = "none";
  div5.style.display = "block";
}

function back7() {
  div7.style.display = "none";
  div6.style.display = "block";
}

function back8() {
  div8.style.display = "none";
  div7.style.display = "block";
}

function back9() {
  div9.style.display = "none";
  div8.style.display = "block";
}

function back10() {
  div10.style.display = "none";
  div9.style.display = "block";
}

// Функция отображения результатов викторины
function result() {
  // Скрытие последнего вопроса (div10)
  div10.style.display = "none";

  // Отображение блока с результатами (div11)
  div11.style.display = "block";

  // Счетчик выбранных правильных ответов
  var activatedRadios = 0;

  // Перебор всех радиокнопок с значением "true"
  for (var i = 0; i < radios.length; i++) {
    // Если радиокнопка отмечена, увеличиваем счетчик правильных ответов
    if (radios[i].checked) {
      activatedRadios++;
    }
  }

  // Вывод количества правильных ответов в элемент с ID "result"
  document.getElementById("result").innerHTML = activatedRadios + " из 10 правильно";
}

// Функция возврата к началу викторины после просмотра результатов
function next11() {
  // Скрытие блока с результатами (div11)
  div11.style.display = "none";

  // Отображение первого вопроса (div1)
  div1.style.display = "block";
}
