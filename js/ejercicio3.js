var rgb = new Uint8Array([0,0,0]);

const RGBstuffs = document.createElement("RGBstuffs");
document.body.appendChild(RGBstuffs)

function updateString() {
  RGBstuffs.innerHTML = "Element Span " + rgb[0] + " " + rgb[1] + " " + rgb[2];
}


var isMouseOver;
updateString(); 

function rgbIncrease() {
  if (!isMouseOver) {
    isMouseOver = setInterval(function() {
        RGBstuffs.style.color = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        rgb[0] += 41;
        rgb[1] += 71;
        rgb[2] += 97;
        updateString();
      }, 30);
  }
}



RGBstuffs.onmouseenter = function () { rgbIncrease()};
RGBstuffs.onmouseleave = function () { clearInterval(isMouseOver); isMouseOver = null; }