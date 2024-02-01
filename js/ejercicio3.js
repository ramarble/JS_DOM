const span = document.createElement("span")

span.innerHTML = "spanspanspanspanspanspanspan"
document.body.appendChild(span)

span.onmouseover = function() {
  span.style.color = "blue";
}
span.onmouseleave = function() {
  span.style.color = "black"
}


const hi = document.createElement("hi");
hi.innerHTML="sdsdkhg";
document.body.appendChild(hi)

var r = 0;
var g = 0;
var b = 0;
hi.onmouseover = function() {
  hi.style.color = "rgb("+r+", "+g+", "+b+")";
  gIncrease()
}
function bIncrease() {
  for (let i = 0; i < 255; i++) {
    b += i;
  }
  if (r < 255) {
    gIncrease()
  }
}
function gIncrease() {
  b = 0;
  for (let i = 0; i <255; i++) {
    g += i;
  }
}

function rIncrease() {
  for (let i = 0; i <255; i++) {
    r += i;
  }
}
