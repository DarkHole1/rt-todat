var genders = [0, 1];
var names = [
  ['Рина', 'Вадима', 'Алиса', 'Анна', 'Петра', 'Петя', 'Дима', 'Дмитрия', 'Романа', 'Мифа', 'Мифрилла', 'Иванна', 'Атлас', 'Илья', 'Кирилла', 'Чернёна'],
  ['Рин',  'Вадим',  'Алис',  'Анн',  'Петр',  'Петя', 'Дима', 'Дмитрий', 'Роман',  'Миф',  'Мифрил',   'Иван',   'Атлас', 'Илья', 'Кирилл',  'Чернен']
];
var surnames = [
  ['Лагутина', 'Субботина', 'Полански', 'Девятова', 'Филинцева', 'Платайс', 'Панк', 'Анучина', 'Черненко', 'Сидорова', 'Римто', 'Арджанова', 'Лост', 'Цветкова', 'Данилова', 'Дименко'],
  ['Лагутин',  'Субботин',  'Полански', 'Девятов',  'Филинцев',  'Платайс', 'Панк', 'Анучин',  'Черненко', 'Сидоров',  'Римто', 'Арджанов',  'Лост', 'Цветков',  'Данилов',  'Дименко']
];
var descriptions = [
  ['админ', 'искатель', 'пешка', 'линуксоид', 'шахматист', 'ало ну чо там с деньгами', 'симулякр', 'зевнула мат', 'написала книгу', 'диктатор', 'Изобарная', 'опал'],
  ['админ', 'искатель', 'пешка', 'линуксоид', 'шахматист', 'ало ну чо там с деньгами', 'симулякр', 'зевнул мат',  'написал книгу',  'диктатор', 'Изобарный', 'опал']
];

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomName(gender) {
  return random(names[gender]) + ' ' + random(surnames[gender]);
}

document.addEventListener('DOMContentLoaded', function() {
  if(!('madeby' in localStorage)) {
    localStorage.madeby = '© ' + randomName(random(genders)) + ', ' + randomInt(1950, 2020) + '-2020';
  }
  document.getElementById('madeby').innerText = localStorage.madeby;
  var content = document.getElementById('content');
  document.getElementById('btn').addEventListener('click', function() {
    this.innerText = 'Попробовать снова';
    var gender = random(genders);
    content.innerText = randomName(gender) + ' — ' + random(descriptions[gender]);
  })
})
