var state = null;
var timer = -1;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('madeby').innerText = madeby();

  var content = document.getElementById('content');
  var header = document.getElementById('header');
  var btn = document.getElementById('btn');
  btn.addEventListener('click', function() {
    btn.classList.add('hidden');
    loadstate(header, content, true);
    startGame();
  });

  loadstate(header, content, false);
  // if(true) {
  if(Date.now() - state.last > 24 * 60 * 60 * 1000) {
    var ban;
    if('ban' in state) {
      ban = state.ban;
    } else {
      ban = 'По причине ' + randomF() + ': ' + randomAction() + ' ' + randomSubject();
      state.ban = ban;
      savestate();
    }
    header.innerText = 'Вас забанили';
    content.innerText = ban;
    btn.classList.remove('hidden');
  } else {
    startGame();
  }
});

function startGame() {
  timer = setInterval(function() {
    addmsg(content, randomEvent());
  }, 30 * 1000);
}

function loadstate(header, content, type) {
  var json = localStorage.getItem('zpg');
  if(type || !json) {
    state = createstate();
  } else {
    state = JSON.parse(json);
  }
  header.innerText = state.header;
  content.innerText = '';
  for(var i = 0; i < state.messages.length; i++) {
    var newel = document.createElement('div');
    newel.innerText = state.messages[i];
    content.appendChild(newel);
  }
}

function createstate() {
  return {
    last: Date.now(),
    header: 'RT-'+_.random(1000, 9999),
    messages: ['Беседа создана']
  };
}

function savestate() {
  localStorage.setItem('zpg', JSON.stringify(state));
}

function addmsg(content, msg) {
  state.last = Date.now();
  state.messages.push(msg);
  var newel = document.createElement('div');
  newel.innerText = msg;
  content.appendChild(newel);
  if(state.messages.length > 5) {
    state.messages.shift();
    content.removeChild(content.firstChild);
  }
  savestate();
}
