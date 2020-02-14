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
    return `assets/audacity/${fileName}.mp3`;
  }
  console.log(randomSelection);

  // var sounds = new Array(
  //   new Audio(randomSelection[0]),
  //   new Audio(randomSelection[1]),
  //   new Audio(randomSelection[2]),
  //   new Audio(randomSelection[3]),
  //   new Audio(randomSelection[4]),
  //   new Audio(randomSelection[5]),
  //   new Audio(randomSelection[6]),
  //   new Audio(randomSelection[7]),
  //   new Audio(randomSelection[8]),
  //   new Audio(randomSelection[9]),
  //   new Audio(randomSelection[10]),
  //   new Audio(randomSelection[11])
  // );
  // var i = -1;
  // playSnd();

  // function playSnd() {
  //   i++;
  //   if (i == sounds.length) return;
  //   sounds[i].addEventListener("ended", playSnd);
  //   sounds[i].play();
  // }
}
// Calls randomise() on load to have a valid array in case
// playSong() is called from the page before randomising
randomise();

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

// Experiment adding event listeners
const btnRandomise = document.getElementById("btn-randomise");
btnRandomise.addEventListener("click", () => {
  randomise();
});

const btnPlay = document.getElementById("play-minuetto");
btnPlay.addEventListener("click", () => {
  playSong();
});

// // Experiment with short files and no timeout
// var sounds = new Array(
//   new Audio(randomSelection[0]),
//   new Audio(randomSelection[1]),
//   new Audio(randomSelection[2]),
//   new Audio(randomSelection[3]),
//   new Audio(randomSelection[4]),
//   new Audio(randomSelection[5]),
//   new Audio(randomSelection[6]),
//   new Audio(randomSelection[7]),
//   new Audio(randomSelection[8]),
//   new Audio(randomSelection[9]),
//   new Audio(randomSelection[10]),
//   new Audio(randomSelection[11])
// );
// var i = -1;
// playSnd();

// function playSnd() {
//   i++;
//   if (i == sounds.length) return;
//   sounds[i].addEventListener("ended", playSnd);
//   sounds[i].play();
// }

//// This comes from https://stackoverflow.com/questions/31060642/preload-multiple-audio-files

// function preloadAudio(url) {
//   var audio = new Audio();
//   // once this file loads, it will call loadedAudio()
//   // the file will be kept by the browser as cache
//   audio.addEventListener('canplaythrough', loadedAudio, false);
//   audio.src = url;
// }

// var loaded = 0;
// function loadedAudio() {
//   // this will be called every time an audio file is loaded
//   // we keep track of the loaded files vs the requested files
//   loaded++;
//   if (loaded == randomSelection.length){
//     // all have loaded
//     init();
//   }
// }

// var player = document.getElementById('player');
// function play(index) {
//   player.src = randomSelection[index];
//   player.play();
// }

// function init() {
//   // do your stuff here, audio has been loaded
//   // for example, play all files one after the other
//   var i = 0;
//   // once the player ends, play the next one
//   player.onended = function() {
//     i++;
//       if (i >= randomSelection.length) {
//           // end
//           return;
//       }
//     play(i);
//   };
//   // play the first file
//   play(i);
// }

// // we start preloading all the audio files
// for (var i in randomSelection) {
//   preloadAudio(randomSelection[i]);
// }
