const iframe = document.getElementById("frame");
const tools = document.getElementById("tools");
const container = document.getElementById("container");
const loading = document.getElementById("loading");

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
  iframe.style.display = "none";
  container.style.display = "flex";
  tools.style.display = "none";
}

function reset() {
  iframe.style.filter = "none";
  iframe.style.transform = "scale(1)";
}

function zoomIn() {
  zoom += 10;
  iframe.style.transform = "scale(" + zoom / 100 + ")";
}

function zoomOut() {
  zoom -= 10;
  iframe.style.zoom = zoom + "%";
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
