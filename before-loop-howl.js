// GOOD Multidimensional array with all (unique) filenames in their columns
const fileName = [
  ["a01", "b01", "c01", "d01", "e01", "f01"],
  ["a02", "b02", "c02", "d02", "e02", "f02"],
  ["a03", "b03", "c03", "d03", "e03", "f03"],
  ["a04", "b04", "c04", "d04", "e04", "f04"],
  ["a05", "b05", "c05", "d05", "e05", "f05"],
  ["a06", "b06", "c06", "d06", "e06", "f06"],
  ["a07", "b07", "c07", "d07", "e07", "f07"],
  ["a08", "b08", "c08", "d08", "e08", "f08"],
  ["a09", "b09", "c09", "d09", "e09", "f09"],
  ["a10", "b10", "c10", "d10", "e10", "f10"],
  ["a11", "b11", "c11", "d11", "e11", "f11"],
  ["a12", "b12", "c12", "d12", "e12", "f12"]
];

// GOOD Randomise array
let randomSelection;
let sequence;

// Tip from Bim to randomise through array
function randomise() {
  sequence = fileName.map(option => {
    const random = Math.floor(Math.random() * 6);
    return option[random];
  });

  // Contructs new random array with path
  randomSelection = sequence.map(createURL);
  function createURL(fileName) {
    return `assets/audacity/${fileName}.mp3`;
  }
  soundFiles.unload();
  playSong();
}
/** Calls randomise() on load to have a valid array in case
playSong() is called from the page before randomising **/
randomise();

$("#btn-randomise").on("click", randomise);

// Uses Howler to preload and play - Good timing and Good on mobile
function playSong() {
  let isPlaying = false;
  let soundFiles = [
    new Howl({
      src: [randomSelection[0]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[1]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[2]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[3]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[4]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[5]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[6]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[7]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[8]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[9]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[10]],
      loop: false
    }),
    new Howl({
      src: [randomSelection[11]],
      loop: false
    })
  ];
  let playButton = $("#play-minuetto"),
    pauseButton = $("#pause-button");
  for (var i = 0; i < soundFiles.length - 1; ++i) {
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
  playButton.click(function() {
    if (!isPlaying) {
      isPlaying = true;
      soundFiles[0].play();
    }
  });
  pauseButton.click(function() {
    if (isPlaying) {
      isPlaying = false;
      soundFiles[0].stop();
    }
  });
}

// Loads the Howler - FIXME: Not clearing previous Howl when new randomSelection is passed!
$(window).on("load", playSong);
