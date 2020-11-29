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
})
