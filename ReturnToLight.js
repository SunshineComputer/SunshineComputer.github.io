

/*
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'P') {
      document.body.style.backgroundColor = 'white';
    }
  });
  
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
      document.body.style.backgroundColor = 'white';
    }
  });
*/
  
  
function returnToLight() {
  var body = document.body;
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'black';
  } else {
    body.style.backgroundColor = 'white';
  }
}

