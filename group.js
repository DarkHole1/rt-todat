document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('madeby').innerText = madeby();

  var content = document.getElementById('content');
  var header = document.getElementById('header');
  document.getElementById('btn').addEventListener('click', function() {
    this.innerText = 'Попробовать снова';
    content.innerText = _.zip(randomUniqueNames(10), randomUniqueStatuses(10)).map(function(e) {
      var gender = randomGender();
      return e[0][0][gender] + ' ' + e[0][1][gender] + ' — ' + e[1][gender];
    }).join('\n');
    header.innerText = 'RT-' + _.random(1000, 9999);
  })
})
