// Multidimensional array with all (unique) filenames in their columns
const fileName = [
  ["a1", "b1", "c1", "d1", "e1", "f1"],
  ["a2", "b2", "c2", "d2", "e2", "f2"],
  ["a3", "b3", "c3", "d3", "e3", "f3"],
  ["a4", "b4", "c4", "d4", "e4", "f4"],
  ["a5", "b5", "c5", "d5", "e5", "f5"],
  ["a6", "b6", "c6", "d6", "e6", "f6"],
  ["a7", "b7", "c7", "d7", "e7", "f7"],
  ["a8", "b8", "c8", "d8", "e8", "f8"],
  ["a9", "b9", "c9", "d9", "e9", "f9"],
  ["a10", "b10", "c10", "d10", "e10", "f10"],
  ["a11", "b11", "c11", "d11", "e11", "f11"],
  ["a12", "b12", "c12", "d12", "e12", "f12"]
];

let randomSelection;
let sequence;
// Tip from Bim
function randomise() {
  sequence = fileName.map(option => {
    const random = Math.floor(Math.random() * 6);
    return option[random];
  });

  // try contruct new array
  randomSelection = sequence.map(createURL);
  function createURL(fileName) {
    return `assets/music/${fileName}.mp3`;
  }
  console.log(randomSelection);
}

// Plays all indexes of array one after each other after a set timeout
// Function playSong is called by 'onclick' in HTML
function playSong() {
  i = -1;
  (function f() {
    i = (i + 1) % 72;
    let menuet = randomSelection[i];
    let audio = new Audio(menuet);
    audio.play();
    setTimeout(f, 2250);
  })();
}

// Plays one file on one button click from the grid
// Need to make this dynamic
const audio1 = new Audio("assets/music/a1.mp3");
// Function playSound is called by onclick in HTML
function playSound() {
  audio1.play();
}
