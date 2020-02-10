// Context fow Webaudio API
const context = new (window.AudioContext || window.webkitAudioContext)();

// My files
const audio1 = new Audio("assets/music/a1.mp3");
const audio2 = new Audio("assets/music/a2.mp3");
const audio3 = new Audio("assets/music/a3.mp3");
const audio4 = new Audio("assets/music/a4.mp3");
const audio5 = new Audio("assets/music/a5.mp3");
const audio6 = new Audio("assets/music/a6.mp3");
const audio7 = new Audio("assets/music/a7.mp3");
const audio8 = new Audio("assets/music/a8.mp3");
const audio9 = new Audio("assets/music/a9.mp3");
const audio10 = new Audio("assets/music/a10.mp3");
const audio11 = new Audio("assets/music/a11.mp3");
const audio12 = new Audio("assets/music/a12.mp3");

// My files in an array
// const bars = [
//   "assets/music/a1.mp3",
//   "assets/music/a2.mp3",
//   "assets/music/a3.mp3",
//   "assets/music/a4.mp3",
//   "assets/music/a5.mp3",
//   "assets/music/a6.mp3",
//   "assets/music/a7.mp3",
//   "assets/music/a8.mp3",
//   "assets/music/a9.mp3",
//   "assets/music/a10.mp3",
//   "assets/music/a11.mp3",
//   "assets/music/a12.mp3",
//   "assets/music/b1.mp3",
//   "assets/music/b2.mp3",
//   "assets/music/b3.mp3",
//   "assets/music/b4.mp3",
//   "assets/music/b5.mp3",
//   "assets/music/b6.mp3",
//   "assets/music/b7.mp3",
//   "assets/music/b8.mp3",
//   "assets/music/b9.mp3",
//   "assets/music/b10.mp3",
//   "assets/music/b11.mp3",
//   "assets/music/b12.mp3",
//   "assets/music/c1.mp3",
//   "assets/music/c2.mp3",
//   "assets/music/c3.mp3",
//   "assets/music/c4.mp3",
//   "assets/music/c5.mp3",
//   "assets/music/c6.mp3",
//   "assets/music/c7.mp3",
//   "assets/music/c8.mp3",
//   "assets/music/c9.mp3",
//   "assets/music/c10.mp3",
//   "assets/music/c11.mp3",
//   "assets/music/c12.mp3",
//   "assets/music/d1.mp3",
//   "assets/music/d2.mp3",
//   "assets/music/d3.mp3",
//   "assets/music/d4.mp3",
//   "assets/music/d5.mp3",
//   "assets/music/d6.mp3",
//   "assets/music/d7.mp3",
//   "assets/music/d8.mp3",
//   "assets/music/d9.mp3",
//   "assets/music/d10.mp3",
//   "assets/music/d11.mp3",
//   "assets/music/d12.mp3",
//   "assets/music/e1.mp3",
//   "assets/music/e2.mp3",
//   "assets/music/e3.mp3",
//   "assets/music/e4.mp3",
//   "assets/music/e5.mp3",
//   "assets/music/e6.mp3",
//   "assets/music/e7.mp3",
//   "assets/music/e8.mp3",
//   "assets/music/e9.mp3",
//   "assets/music/e10.mp3",
//   "assets/music/e11.mp3",
//   "assets/music/e12.mp3",
//   "assets/music/f1.mp3",
//   "assets/music/f2.mp3",
//   "assets/music/f3.mp3",
//   "assets/music/f4.mp3",
//   "assets/music/f5.mp3",
//   "assets/music/f6.mp3",
//   "assets/music/f7.mp3",
//   "assets/music/f8.mp3",
//   "assets/music/f9.mp3",
//   "assets/music/f10.mp3",
//   "assets/music/f11.mp3",
//   "assets/music/f12.mp3"
// ];

// const fileName = [
//   "a1",
//   "a2",
//   "a3",
//   "a4",
//   "a5",
//   "a6",
//   "a7",
//   "a8",
//   "a9",
//   "a10",
//   "a11",
//   "a12",
//   "b1",
//   "b2",
//   "b3",
//   "b4",
//   "b5",
//   "b6",
//   "b7",
//   "b8",
//   "b9",
//   "b10",
//   "b11",
//   "b12",
//   "c1",
//   "c2",
//   "c3",
//   "c4",
//   "c5",
//   "c6",
//   "c7",
//   "c8",
//   "c9",
//   "c10",
//   "c11",
//   "c12",
//   "d1",
//   "d2",
//   "d3",
//   "d4",
//   "d5",
//   "d6",
//   "d7",
//   "d8",
//   "d9",
//   "d10",
//   "d11",
//   "d12",
//   "e1",
//   "e2",
//   "e3",
//   "e4",
//   "e5",
//   "e6",
//   "e7",
//   "e8",
//   "e9",
//   "e10",
//   "e11",
//   "e12",
//   "f1",
//   "f2",
//   "f3",
//   "f4",
//   "f5",
//   "f6",
//   "f7",
//   "f8",
//   "f9",
//   "f10",
//   "f11",
//   "f12"
// ];

// const bar = [];

// let test = `<audio preload="auto" src="${bars[0]}"></audio>`;
// let tests = `<audio preload="auto" src="${bar[0]}"></audio>`;

// for (let index = 0; index < fileName.length; index++) {
//   const nameAndExtension = `${fileName[index]}.mp3`;
//   const path = `"assets/music/${nameAndExtension}"`;

//   console.log(path);
//   // console.log(object);
// }

const nombre = () => {};

// console.log(audio);
// console.log(test);
// console.log(bars[2]);
// console.log(path);

function playSound() {
  audio1.play();
}
function playSong() {
  audio1.play();
  setTimeout(function() {
    audio2.play();
  }, 2250);
  setTimeout(function() {
    audio3.play();
  }, 4500);
  setTimeout(function() {
    audio4.play();
  }, 6750);
  setTimeout(function() {
    audio5.play();
  }, 9000);
  setTimeout(function() {
    audio6.play();
  }, 11250);
  setTimeout(function() {
    audio7.play();
  }, 13500);
  setTimeout(function() {
    audio8.play();
  }, 15750);
  setTimeout(function() {
    audio9.play();
  }, 18000);
  setTimeout(function() {
    audio10.play();
  }, 20250);
  setTimeout(function() {
    audio11.play();
  }, 22500);
  setTimeout(function() {
    audio12.play();
  }, 24750);

  // test.play();
  console.log(audio1);
  // console.log(test);
  // console.log(tests);
}
