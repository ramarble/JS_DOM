const suma = document.createElement("suma");
document.body.appendChild(suma)

function updateString() {
  suma.innerHTML = "3 + 2 es " + (3 + 2);
}

updateString();