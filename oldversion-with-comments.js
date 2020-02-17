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
let randomSelection = [];
let sequence = [];
// Tip from Bim to randomise through array
function randomise() {
  sequence = fileName.map(option => {
    const random = Math.floor(Math.random() * 6);
    return option[random];
  });
  randomSelection = sequence.map(createURL);
  function createURL(fileName) {
    return `assets/audacity/${fileName}.mp3`;
  }
  defineSong();
}

// KEEP Calls randomise() on load to have a valid array in case
// playSong() is called from the page before randomising
randomise();

// FIXME: Plays all indexes of array one after each other after a set timeout
// Function playSong is called by 'onclick' in HTML
// let audio;
// function playSong() {
//   i = -1;
//   (function f() {
//     i = (i + 1) % 72;
//     let menuet = randomSelection[i];
//     audio = new Audio(menuet);
//     audio.load();
//     audio.play();
//     setTimeout(f, 2250);
//   })();
// }

// GOOD Allows each button on the grid to play their corresponding bar
$(".bar").on("click", function() {
  let id = this.id;
  let barPath = `assets/music/${id}.mp3`;
  let bar = new Audio(barPath);
  bar.play();
});

// GOOD Randomise
$("#btn-randomise").on("click", randomise);
// GOOD Play array
// $("#play-minuetto").on("click", playSong);

// TRY Async Waterfall FIXME: Not working on mobile (iOS) KEEP Last functioning one beforee HOWLER
// function playSong() {
//   async.waterfall(
//     [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10, bar11, bar12],
//     function() {
//       console.log("tasks done!");
//     }
//   );
//   function bar1(cb) {
//     console.log(`${randomSelection[0]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[0];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 1000);
//   }
//   function bar2(cb) {
//     console.log(`${randomSelection[1]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[1];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2500);
//   }
//   function bar3(cb) {
//     console.log(`${randomSelection[2]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[2];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
//   function bar4(cb) {
//     console.log(`${randomSelection[3]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[3];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
//   function bar5(cb) {
//     console.log(`${randomSelection[4]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[4];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
//   function bar6(cb) {
//     console.log(`${randomSelection[5]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[5];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
//   function bar7(cb) {
//     console.log(`${randomSelection[6]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[6];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
//   function bar8(cb) {
//     console.log(`${randomSelection[7]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[7];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
//   function bar9(cb) {
//     console.log(`${randomSelection[8]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[8];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
//   function bar10(cb) {
//     console.log(`${randomSelection[9]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[9];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
//   function bar11(cb) {
//     console.log(`${randomSelection[10]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[10];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
//   function bar12(cb) {
//     console.log(`${randomSelection[11]}:started`);
//     setTimeout(function() {
//       let menuet = randomSelection[11];
//       audio = new Audio(menuet);
//       audio.play();
//       console.log(`Finished`);
//       cb();
//     }, 2250);
//   }
// }

// TRY: https://stackoverflow.com/questions/31060642/preload-multiple-audio-files

// KEEP this from https://codepen.io/SitePoint/pen/JRaLVR

// TRY this from https://stackoverflow.com/questions/37459231/webaudio-seamlessly-playing-sequence-of-audio-chunks

// TRY Howler

function createSequence(bars) {
  let allHowls = [];
  for (var i = 0; i <= bars; i++) {
    let howl = new Howl({
      src: [randomSelection[i]],
      loop: false
    });
    allHowls.push(howl);
  }
  return allHowls;
}

function defineSong() {
  let isPlaying = false;
  let soundFiles = [];
  if (soundFiles.length) {
    soundFiles.forEach(sound => {
      sound.unload();
    });
  }
  soundFiles = createSequence(12);
  // using var because let isn't in scope
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
  handlers(isPlaying, soundFiles);
}

function handlers(playing, soundFiles) {
  let playButton = $("#play-minuetto"),
    pauseButton = $("#pause-button");
  playButton.click(function() {
    if (!playing) {
      isPlaying = true;
      soundFiles[0].play();
    }
  });
  pauseButton.click(function() {
    if (playing) {
      isPlaying = false;
      soundFiles[0].stop();
    }
  });
}

$(window).on("load", defineSong);
