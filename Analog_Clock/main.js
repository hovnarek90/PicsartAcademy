const secDiv = document.getElementById("sec");
const minDiv = document.getElementById("min");
const hourDiv = document.getElementById("hour");
const body = document.getElementById("body");
const clock = document.getElementById("clock");
const btn = document.getElementById("btn");
const num = document.getElementsByClassName("num");
const middle = document.getElementById("middle");
const digitalHour = document.getElementById("digital-hour");
const digitalMin = document.getElementById("digital-min");
const digitalSec = document.getElementById("digital-sec");
const calendar = document.getElementById("calendar");
const container = document.getElementById("container");

function randomColor() {
  let r = () => (Math.random() * 256) >> 0;
  return `rgb(${r()}, ${r()}, ${r()})`;
}

btn.addEventListener("click", (e) => {
  //   console.log(e);
  clock.classList.toggle("dark");
  secDiv.classList.toggle("dark");
  minDiv.classList.toggle("dark");
  hourDiv.classList.toggle("dark");
  middle.classList.toggle("dark");
  calendar.classList.toggle("dark");
  container.classList.toggle("dark");
  btn.classList.toggle("dark");
});
setInterval(updateClock, 1000);

function updateClock() {
  // play();
  let date = new Date();
  let sec = date.getSeconds() / 60;
  let min = (date.getMinutes() + sec) / 60;
  let hour = (date.getHours() + min) / 12;

  secDiv.style.transform = "rotate(" + sec * 360 + "deg)";
  minDiv.style.transform = "rotate(" + min * 360 + "deg)";
  hourDiv.style.transform = "rotate(" + hour * 360 + "deg)";
  body.style.backgroundColor = randomColor();
  // clock.style.backgroundColor = randomColor();
  if (date.getHours() < 10) {
    digitalHour.innerHTML = "0" + date.getHours();
  } else {
    digitalHour.innerHTML = date.getHours();
  }
  if (date.getMinutes() < 10) {
    digitalMin.innerHTML = "0" + date.getMinutes();
  } else {
    digitalMin.innerHTML = date.getMinutes();
  }
  // with ternary operator ))
  date.getSeconds() < 10
    ? (digitalSec.innerHTML = "0" + date.getSeconds())
    : (digitalSec.innerHTML = date.getSeconds());
  calendar.innerHTML = date.getDate();
}

updateClock();

// console.log(randomColor());
// console.log(secDiv.classList);

function play() {
  let audio = new Audio("./audio/clock.mp3");
  audio.play();
}
