
var tagP = document.getElementById("ayuda");
var newP = document.createElement("goback");

var buenTrabajo = "Buen Trabajo";
tagP.onclick = function() {
  tagP.replaceWith(newP);
  newP.innerHTML = buenTrabajo;
}

newP.onclick = function() {
  newP.replaceWith(tagP);
  tagP.innerHTML = "Pulsame"
}

