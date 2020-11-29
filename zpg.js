var state = null;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('madeby').innerText = madeby();

  var handler = null;

  var content = document.getElementById('content');
  var header = document.getElementById('header');
  var btn = document.getElementById('btn');
  btn.addEventListener('click', function() {
    try {
      handler();
    } catch (e) { }
  })

  loadstate();
})

function loadstate() {
  var json = localStorage.getItem('zpg');
  if(!json) {
    state = createstate();
  } else {
    state = JSON.parse(json);
  }
}

function createstate() {
  return {
    last: Date.now(),
    messages: ['Беседа создана']
  }
}

function savestate() {
  localStorage.setItem('zpg', JSON.stringify(state));
}
