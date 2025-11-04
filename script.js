
function toggleMenu(){
  var m = document.getElementById('menu');
  if(m.classList.contains('open')) m.classList.remove('open');
  else m.classList.add('open');
}

document.addEventListener('DOMContentLoaded', function(){
  var y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
});
