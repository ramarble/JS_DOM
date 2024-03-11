
const image = document.getElementById("mustelid");


const nakedRat =  "https://1.bp.blogspot.com/-0H_1I5fmsVo/XTPnyxpixeI/AAAAAAABTtU/tIzZ1Xxc6bcDqTdeq2rBD4k8y6ZsfaJlwCLcBGAs/s180-c/animal_mouse_baby_science.png";
const weasel = "https://1.bp.blogspot.com/-GyydZ2lEQQQ/X7zMFGNFjCI/AAAAAAABcX0/U8bbimVYP64s1Nvump-vSSJUj6gjBTFYACNcBGAsYHQ/s180-c/animal_okojo_summer.png"


image.src = weasel;
image.onmouseover = function () { image.src = nakedRat};
image.onmouseout = function () { image.src = weasel} 