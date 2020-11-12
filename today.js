document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('madeby').innerText = madeby();

  var content = document.getElementById('content');
  document.getElementById('btn').addEventListener('click', function() {
    this.innerText = 'Попробовать снова';
    var gender = randomGender();
    content.innerText = randomName(gender) + ' — ' + randomStatus(gender);
  })
})
