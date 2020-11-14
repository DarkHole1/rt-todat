var genders = [0, 1];
var names = [
  ['Рина', 'Рин'], ['Вадима', 'Вадим'], ['Алиса', 'Алис'], ['Анна', 'Анн'],
  ['Петра', 'Петр'], ['Петя', 'Петя'], ['Дима', 'Дима'], ['Дмитрия', 'Дмитрий'],
  ['Романа', 'Роман'], ['Мифа', 'Миф'], ['Мифрилла', 'Мифрил'],
  ['Иванна', 'Иван'], ['Атлас', 'Атлас'], ['Илья', 'Илья'],
  ['Кирилла', 'Кирилл'], ['Чернёна', 'Чернен']
];
var surnames = [
  ['Лагутина', 'Лагутин'], ['Субботина', 'Субботин'], ['Полански', 'Полански'],
  ['Девятова', 'Девятов'], ['Филинцева', 'Филинцев'], ['Платайс', 'Платайс'],
  ['Панк', 'Панк'], ['Анучина', 'Анучин'], ['Черненко', 'Черненко'],
  ['Сидорова', 'Сидоров'], ['Римто', 'Римто'], ['Арджанова', 'Арджанов'],
  ['Лост', 'Лост'], ['Цветкова', 'Цветков'], ['Данилова', 'Данилов'],
  ['Дименко', 'Дименко']
];
var statuses = [
  ['админ', 'админ'], ['искатель', 'искатель'], ['пешка', 'пешка'],
  ['линуксоид', 'линуксоид'], ['шахматист', 'шахматист'],
  ['ало ну чо там с деньгами', 'ало ну чо там с деньгами'],
  ['симулякр', 'симулякр'], ['зевнула мат', 'зевнул мат'],
  ['написала книгу', 'написал книгу'], ['диктатор', 'диктатор'],
  ['Изобарная', 'Изобарный'], ['опал', 'опал'], ['пишет посты', 'пишет посты'],
  ['потерялась в Вавилонской Библиотеке', 'потерялся в Вавилонской Библиотеке'],
  ['кидает треки', 'кидает треки'], ['записывает PRB', 'записывает PRB']
];

var actions = [
  'Решал'
];

var subjects = [
  'архивы'
];

function randomName(gender) {
  return _.sample(names)[gender] + ' ' + _.sample(surnames)[gender];
}

function randomStatus(gender) {
  return _.sample(statuses)[gender];
}

function randomGender() {
  return _.sample(genders);
}

function randomUniqueNames(n) {
  return _.zip(_.sampleSize(names, n), _.sampleSize(surnames, n));
}

function randomUniqueStatuses(n) {
  return _.sampleSize(statuses, n);
}

function randomF() {
  var r = _.random(0, 99);
  return r < 10 ? 'F0' + r : 'F' + r;
}

function randomAction() {
  return _.sample(actions);
}

function randomSubject() {
  return _.sample(subjects);
}

function madeby() {
  if(!('madeby' in localStorage)) {
    localStorage.madeby = '© ' + randomName(randomGender()) + ', ' + _.random(1990, 2020) + '-2020';
  }
  return localStorage.madeby;
}
