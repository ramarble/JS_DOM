const button = document.createElement("button")
let newChild = document.createElement("OutputOfButton");
button.innerHTML = "button"
document.body.appendChild(button)
document.body.appendChild(newChild);

button.onclick = function() {
  newChild.innerHTML = "hi"
  document.body.style.background = "green";
}
