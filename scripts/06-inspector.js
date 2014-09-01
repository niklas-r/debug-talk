function deleteJumbotron() {
  var jumbotron = document.querySelector('.jumbotron');
  jumbotron.parentNode.removeChild(jumbotron);
}

function getData() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () { console.log(this.responseText); };
  xhr.open("get", "dataz.json", true);
  xhr.send();
}

function listenForClick() {
  var body = document.querySelector('body');

  body.addEventListener('click', function () {
    console.log('click!');
  });
}
