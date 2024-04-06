const iframe = document.getElementById("frame");
const tools = document.getElementById("tools");
const personalizar = document.getElementById("personalizar");
const root = document.querySelector(":root");
const container = document.getElementById("container");
const loading = document.getElementById("loading");
document.body.style.zoom = "67%";

let color = 0;
let zoom = 100;
let bright = 100;

document.body.onload = () => (loading.style.display = "none");

function start() {
  container.style.display = "none";
  iframe.src = "https://www.google.com/webhp?igu=1";
  tools.style.display = "flex";
  iframe.style.display = "block";
}

function menu() {
  iframe.src = "#";
  iframe.style.display = "none";
  tools.style.display = "none";
  container.style.display = "flex";
}

function blackAndWhite() {
  if (iframe.style.filter == "grayscale(100%)")
    iframe.style.filter = "grayscale(0%)";
  else iframe.style.filter = "grayscale(100%)";
}

function invert() {
  if (iframe.style.filter == "invert(100%)") iframe.style.filter = "invert(0%)";
  else iframe.style.filter = "invert(100%)";
}

function highContrast() {
  if (iframe.style.filter == "contrast(150%)")
    iframe.style.filter = "contrast(100%)";
  else iframe.style.filter = "contrast(150%)";
}

function satured() {
  if (iframe.style.filter == "saturate(200%)")
    iframe.style.filter = "saturate(100%)";
  else iframe.style.filter = "saturate(200%)";
}

function colorBlind() {
  color += 90;
  iframe.style.filter = "hue-rotate(" + color + "deg)";
}

function moreBright() {
  if (bright <= 200) bright += 10;
  iframe.style.filter = "brightness(" + bright + "%)";
}

function lessBright() {
  if (bright >= 20) bright -= 10;
  iframe.style.filter = "brightness(" + bright + "%)";
}
