// Context fow Webaudio API (Web Audio API not currently used here)
// const context = new (window.AudioContext || window.webkitAudioContext)();

// My files in an array
const bars = [
  "assets/music/a1.mp3",
  "assets/music/a2.mp3",
  "assets/music/a3.mp3",
  "assets/music/a4.mp3",
  "assets/music/a5.mp3",
  "assets/music/a6.mp3",
  "assets/music/a7.mp3",
  "assets/music/a8.mp3",
  "assets/music/a9.mp3",
  "assets/music/a10.mp3",
  "assets/music/a11.mp3",
  "assets/music/a12.mp3",
  "assets/music/b1.mp3",
  "assets/music/b2.mp3",
  "assets/music/b3.mp3",
  "assets/music/b4.mp3",
  "assets/music/b5.mp3",
  "assets/music/b6.mp3",
  "assets/music/b7.mp3",
  "assets/music/b8.mp3",
  "assets/music/b9.mp3",
  "assets/music/b10.mp3",
  "assets/music/b11.mp3",
  "assets/music/b12.mp3",
  "assets/music/c1.mp3",
  "assets/music/c2.mp3",
  "assets/music/c3.mp3",
  "assets/music/c4.mp3",
  "assets/music/c5.mp3",
  "assets/music/c6.mp3",
  "assets/music/c7.mp3",
  "assets/music/c8.mp3",
  "assets/music/c9.mp3",
  "assets/music/c10.mp3",
  "assets/music/c11.mp3",
  "assets/music/c12.mp3",
  "assets/music/d1.mp3",
  "assets/music/d2.mp3",
  "assets/music/d3.mp3",
  "assets/music/d4.mp3",
  "assets/music/d5.mp3",
  "assets/music/d6.mp3",
  "assets/music/d7.mp3",
  "assets/music/d8.mp3",
  "assets/music/d9.mp3",
  "assets/music/d10.mp3",
  "assets/music/d11.mp3",
  "assets/music/d12.mp3",
  "assets/music/e1.mp3",
  "assets/music/e2.mp3",
  "assets/music/e3.mp3",
  "assets/music/e4.mp3",
  "assets/music/e5.mp3",
  "assets/music/e6.mp3",
  "assets/music/e7.mp3",
  "assets/music/e8.mp3",
  "assets/music/e9.mp3",
  "assets/music/e10.mp3",
  "assets/music/e11.mp3",
  "assets/music/e12.mp3",
  "assets/music/f1.mp3",
  "assets/music/f2.mp3",
  "assets/music/f3.mp3",
  "assets/music/f4.mp3",
  "assets/music/f5.mp3",
  "assets/music/f6.mp3",
  "assets/music/f7.mp3",
  "assets/music/f8.mp3",
  "assets/music/f9.mp3",
  "assets/music/f10.mp3",
  "assets/music/f11.mp3",
  "assets/music/f12.mp3"
];

// const fileName = [
//   ["a1", "b1", "c1", "d1", "e1", "f1"],
//   ["a2", "b2", "c2", "d2", "e2", "f2"],
//   ["a3", "b3", "c3", "d3", "e3", "f3"],
//   ["a4", "b4", "c4", "d4", "e4", "f4"],
//   ["a5", "b5", "c5", "d5", "e5", "f5"],
//   ["a6", "b6", "c6", "d6", "e6", "f6"],
//   ["a7", "b7", "c7", "d7", "e7", "f7"],
//   ["a8", "b8", "c8", "d8", "e8", "f8"],
//   ["a9", "b9", "c9", "d9", "e9", "f9"],
//   ["a10", "b10", "c10", "d10", "e10", "f10"],
//   ["a11", "b11", "c11", "d11", "e11", "f11"],
//   ["a12", "b12", "c12", "d12", "e12", "f12"]
// ];

const fileName = [
  [
    "assets/music/a1.mp3",
    "assets/music/b1.mp3",
    "assets/music/c1.mp3",
    "assets/music/d1.mp3",
    "assets/music/e1.mp3",
    "assets/music/f1.mp3"
  ],
  [
    "assets/music/a2.mp3",
    "assets/music/b2.mp3",
    "assets/music/c2.mp3",
    "assets/music/d2.mp3",
    "assets/music/e2.mp3",
    "assets/music/f2.mp3"
  ],
  [
    "assets/music/a3.mp3",
    "assets/music/b3.mp3",
    "assets/music/c3.mp3",
    "assets/music/d3.mp3",
    "assets/music/e3.mp3",
    "assets/music/f3.mp3"
  ],
  [
    "assets/music/a4.mp3",
    "assets/music/b4.mp3",
    "assets/music/c4.mp3",
    "assets/music/d4.mp3",
    "assets/music/e4.mp3",
    "assets/music/f4.mp3"
  ],
  [
    "assets/music/a5.mp3",
    "assets/music/b5.mp3",
    "assets/music/c5.mp3",
    "assets/music/d5.mp3",
    "assets/music/e5.mp3",
    "assets/music/f5.mp3"
  ],
  [
    "assets/music/a6.mp3",
    "assets/music/b6.mp3",
    "assets/music/c6.mp3",
    "assets/music/d6.mp3",
    "assets/music/e6.mp3",
    "assets/music/f6.mp3"
  ],
  [
    "assets/music/a7.mp3",
    "assets/music/b7.mp3",
    "assets/music/c7.mp3",
    "assets/music/d7.mp3",
    "assets/music/e7.mp3",
    "assets/music/f7.mp3"
  ],
  [
    "assets/music/a8.mp3",
    "assets/music/b8.mp3",
    "assets/music/c8.mp3",
    "assets/music/d8.mp3",
    "assets/music/e8.mp3",
    "assets/music/f8.mp3"
  ],
  [
    "assets/music/a9.mp3",
    "assets/music/b9.mp3",
    "assets/music/c9.mp3",
    "assets/music/d9.mp3",
    "assets/music/e9.mp3",
    "assets/music/f9.mp3"
  ],
  [
    "assets/music/a10.mp3",
    "assets/music/b10.mp3",
    "assets/music/c10.mp3",
    "assets/music/d10.mp3",
    "assets/music/e10.mp3",
    "assets/music/f10.mp3"
  ],
  [
    "assets/music/a11.mp3",
    "assets/music/b11.mp3",
    "assets/music/c11.mp3",
    "assets/music/d11.mp3",
    "assets/music/e11.mp3",
    "assets/music/f11.mp3"
  ],
  [
    "assets/music/a12.mp3",
    "assets/music/b12.mp3",
    "assets/music/c12.mp3",
    "assets/music/d12.mp3",
    "assets/music/e12.mp3",
    "assets/music/f12.mp3"
  ]
];

// Generates a random array from each column
let randomSelection = [
  fileName[0][Math.floor(Math.random() * 6)],
  fileName[1][Math.floor(Math.random() * 6)],
  fileName[2][Math.floor(Math.random() * 6)],
  fileName[3][Math.floor(Math.random() * 6)],
  fileName[4][Math.floor(Math.random() * 6)],
  fileName[5][Math.floor(Math.random() * 6)],
  fileName[6][Math.floor(Math.random() * 6)],
  fileName[7][Math.floor(Math.random() * 6)],
  fileName[8][Math.floor(Math.random() * 6)],
  fileName[9][Math.floor(Math.random() * 6)],
  fileName[10][Math.floor(Math.random() * 6)],
  fileName[11][Math.floor(Math.random() * 6)]
];

console.log(randomSelection);

// let test = `<audio preload="auto" src="${bars[0]}"></audio>`;
// let tests = `<audio preload="auto" src="${bar[0]}"></audio>`;

// for (let index = 0; index < fileName.length; index++) {
//   const nameAndExtension = `${fileName[index]}.mp3`;
//   const path = `"assets/music/${nameAndExtension}"`;

// Plays one file on one button click from the grid
const audio1 = new Audio("assets/music/a1.mp3");

function playSound() {
  audio1.play();
}

// Plays all indexes of array one after each other after a set timeout
let interval;
function playSong() {
  i = -1;
  (function f() {
    i = (i + 1) % bars.length;
    // console.log(bars[i]);
    let menuet = bars[i];
    let audio = new Audio(menuet);
    audio.play();
    setTimeout(f, 2250);
  })();
}
