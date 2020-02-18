// Constants
// GOOD Multidimensional array with all (unique) filenames in their columns
const fileName = [
  ["a01", "b01", "c01", "d01", "e01", "f01", "g01",'h01'],
  ["a02", "b02", "c02", "d02", "e02", "f02", "g02",'h02'],
  ["a03", "b03", "c03", "d03", "e03", "f03", "g03",'h03'],
  ["a04", "b04", "c04", "d04", "e04", "f04", "g04",'h04'],
  ["a05", "b05", "c05", "d05", "e05", "f05", "g05",'h05'],
  ["a06", "b06", "c06", "d06", "e06", "f06", "g06",'h06'],
  ["a07", "b07", "c07", "d07", "e07", "f07", "g07",'h07'],
  ["a08", "b08", "c08", "d08", "e08", "f08", "g08",'h08'],
  ["a09", "b09", "c09", "d09", "e09", "f09", "g09",'h09'],
  ["a10", "b10", "c10", "d10", "e10", "f10", "g10",'h10'],
  ["a11", "b11", "c11", "d11", "e11", "f11", "g11",'h11'],
  ["a12", "b12", "c12", "d12", "e12", "f12", "g12",'h12']
];

// Variables
let randomSelection = [];
let sequence = [];
let i;

// Functions
// GOOD Randomise array
// Tip from Bim to randomise through array
function randomise() {
  $("#play-minuetto").attr("disabled", false);

  sequence = fileName.map(option => {
    const random = Math.floor(Math.random() * 8);
    return option[random];
  });
  randomSelection = sequence.map(createURL);
  function createURL(fileName) {
    return `assets/audacity/${fileName}.mp3`;
  }
  defineSong();
  console.log(randomSelection);
  // Clears and adds class 'selected' to selected cells
  $(".selected").removeClass("selected");
  randomSelection.forEach(element => {
    let item = [`${element.slice(16, 19)}`];
    $(`#${item}`).addClass("selected");
  });
}

// GOOD Play array
// $("#play-minuetto").on("click", playSong);

function createSequence(bars) {
  let allHowls = [];
  let howl;
  for (i = 0; i <= bars; i++) {
    howl = new Howl({
      src: [randomSelection[i]],
      loop: false
    });
    allHowls.push(howl);
  }
  return allHowls;
}

let soundFiles = [];
function defineSong() {
  let isPlaying = false;
  if (soundFiles.length) {
    soundFiles.forEach(sound => {
      sound.unload();
    });
  }
  soundFiles = createSequence(12);
  for (i = 0; i < soundFiles.length - 1; ++i) {
    soundFiles[i].on(
      "end",
      (function(i) {
        return function() {
          soundFiles[i + 1].play();
        };
      })(i)
    );
  }
  soundFiles[i].on("end", function() {
    isPlaying = false;
  });
  handlers(isPlaying, soundFiles);
}

// btnPlayText.text("Stop");
// btnPlayText.text("Play Minuetto");

// Event Listeners
// Randomise event
$("#btn-randomise").on("click", randomise);
// Play & Pause event
function handlers(isPlaying, soundFiles) {
  let playButton = $("#play-minuetto"),
    pauseButton = $("#pause-button");
  playButton.on("click", function() {
    if (!isPlaying) {
      isPlaying = true;
      soundFiles[0].play();
      let lengthSong = soundFiles.length - 2;
      console.log(lengthSong);
      soundFiles[lengthSong].on("end", function() {
        isPlaying = false;
      });
      // playButton.html("Stop");
      // console.log(playing);
      console.log(`Is playing? ${isPlaying}`);
    }
    $("#play-minuetto").attr("disabled", true);
    // Restores the play button after finishing song
    let length = soundFiles.length - 2;
    soundFiles[length].on("end", function() {
      $("#play-minuetto").attr("disabled", false);
    });
    // $("#play-minuetto").attr("id", 'pause-button');
  });
  pauseButton.on("click", function() {
    if (isPlaying) {
      isPlaying = false;
      soundFiles.forEach(bar => {
        bar.stop();
      });
      $("#play-minuetto").attr("disabled", false);
    }
    console.log(`Is playing? ${isPlaying}`);
  });
  // Grid play event
  $(".bar").on("click", function() {
    let id = this.id;
    let barPath = `assets/audacity/${id}.mp3`;
    let cell = new Howl({
      src: [barPath],
      volume: 0.4
    });
    cell.play();
  });
}
// Previous method to play cells in grid with Audio
// $(".bar").on("click", function() {
//   let id = this.id;
//   let barPath = `assets/music/${id}.mp3`;
//   let bar = new Audio(barPath);
//   bar.play();
// });

// Calls randomise() on load to have a valid array in case
// playSong() is called from the page before randomising
randomise();

$(window).on("load", defineSong);
