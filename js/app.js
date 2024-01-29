function createNElements(n) {
  for (let i = 0; i < n; i++) {
    document.body.appendChild(document.createElement("ej" +i))
  }
}

createNElements(13)
let regExpTagNameEj = /[0-9]/i
var bodyChildren = document.body.childNodes
var paragraphElements = bodyChildren.item(2).nodeName


function fuckgin() {
  document.body.innerHTML += paragraphElements
  if (paragraphElements == ("EJ0")) {
    document.body.innerHTML += "woaw"
  }
}
fuckgin()
function addInfoInBodyChildren() {
  for (let i = 0; i < bodyChildren.length; i++) {
    bodyChildren.item(i).innerHTML += "Ejercicio " + i;
  }
}

//addInfoInBodyChildren();
