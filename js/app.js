const ejArray = [];
const br = document.createElement("br");

function crearEjercicios(n) {
  for (let i = 0; i < n; i++) {
    ejArray[i] = document.createElement("a")
    ejArray[i].setAttribute("href", ("./ejercicio" + (i + 1).toString() + ".html"));
    ejArray[i].appendChild(br);
    ejArray[i].innerHTML += "Ejercicio " + (i+1);
    document.body.appendChild(ejArray[i])
  }
}

crearEjercicios(8)
