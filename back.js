var colorinput1 = document.getElementById("color1");
var colorinput2 = document.getElementById("color2");
var colorValue = document.getElementById("colorvalue");
var body = document.getElementById("gradient");
body.style.background = `linear-gradient(to right,${colorinput1.value},${colorinput2.value})`;
colorValue.innerText = body.style.background + ";";

function changeBackground(){
    body.style.background = `linear-gradient(to right,${colorinput1.value},${colorinput2.value})`;
    colorValue.innerText = body.style.background + ";";
}

colorinput1.addEventListener("input",changeBackground);
colorinput2.addEventListener("input",changeBackground);