document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('madeby').innerText = madeby();

  var content = document.getElementById('content');
  document.getElementById('btn').addEventListener('click', function() {
    this.innerText = 'Попробовать снова';
    content.innerText = randomF() + ': ' + randomAction() + ' ' + randomSubject();
  })
})
