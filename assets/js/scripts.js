// Multidimensional array with all (unique) filenames in their columns
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
  // FIXME: Declaring element to add class - NEEDS TO CLEAR CLASS ON NEW ARRAY
  let element;
  // Contructs new random array with path
  randomSelection = sequence.map(createURL);
  function createURL(fileName) {
    return `assets/music/${fileName}.mp3`;
  }
  // FIXME: Calls addClass to highlight selection - NEEDS TO CLEAR CLASS ON NEW ARRAY
  addClass();
  console.log(randomSelection);

  // FIXME: Highlight selected cells - NEEDS TO CLEAR CLASS ON NEW ARRAY
  function addClass() {
    for (let index = 0; index < randomSelection.length; index++) {
      let selectedId = randomSelection[index].slice(13, 16);
      element = document.getElementById(selectedId);
      element.classList.add("selected");
    }
  }

  // KEEP
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
  //
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

// FIXME: Plays all indexes of array one after each other after a set timeout
// Function playSong is called by 'onclick' in HTML
let audio;
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
$(".bar").click(function() {
  let id = this.id;
  let barPath = `assets/music/${id}.mp3`;
  let bar = new Audio(barPath);
  bar.play();
});

// GOOD Event listeners
// const btnRandomise = document.getElementById("btn-randomise");
// btnRandomise.addEventListener("click", randomise);

// GOOD Same as above with jQ
$("#btn-randomise").on("click", () => {
  randomise();
});

// GOOD Event listener play
// const btnPlay = document.getElementById("play-minuetto");
// btnPlay.addEventListener("click", playSong);

// GOOD Same as above w jQ
$("#play-minuetto").on("click", () => {
  playSong()
});

// TRY Preload audio
// var loaded = 0;
// function loadedAudio() {
//   // this will be called every time an audio file is loaded
//   // we keep track of the loaded files vs the requested files
//   loaded++;
//   console.log(loaded + " audio files loaded!");
//   if (loaded == randomSelection.length) {
//     // all have loaded
//     main();
//   }
// }

// function preloadsounds() {
//   // $("#loader").show();
//   console.log(level.config);
//   randomSelection = level.config.randomSelection;

//   // we start preloading all the audio files with html audio
//   for (var i in randomSelection) {
//     preloadAudio(randomSelection[i]);
//   }
// }

// function preloadAudio(url) {
//   console.log("trying to preload " + url);
//   var audio = new Audio();
//   // once this file loads, it will call loadedAudio()
//   // the file will be kept by the browser as cache
//   audio.addEventListener("canplaythrough", loadedAudio, false);

//   audio.addEventListener("error", function failed(e) {
//     console.log("COULD NOT LOAD AUDIO");
//     // $("#NETWORKERROR").show();
//   });
//   audio.src = url;

//   audio.load(); // add this line
// }

//
// TRY Async
function playSong() {
  async.waterfall(
    [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10, bar11, bar12],
    function() {
      console.log("tasks done!");
    }
  );
  function bar1(cb) {
    console.log(`${randomSelection[0]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[0];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 1000);
  }
  function bar2(cb) {
    console.log(`${randomSelection[1]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[1];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2500);
  }
  function bar3(cb) {
    console.log(`${randomSelection[2]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[2];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
  function bar4(cb) {
    console.log(`${randomSelection[3]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[3];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
  function bar5(cb) {
    console.log(`${randomSelection[4]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[4];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
  function bar6(cb) {
    console.log(`${randomSelection[5]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[5];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
  function bar7(cb) {
    console.log(`${randomSelection[6]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[6];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
  function bar8(cb) {
    console.log(`${randomSelection[7]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[7];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
  function bar9(cb) {
    console.log(`${randomSelection[8]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[8];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
  function bar10(cb) {
    console.log(`${randomSelection[9]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[9];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
  function bar11(cb) {
    console.log(`${randomSelection[10]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[10];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
  function bar12(cb) {
    console.log(`${randomSelection[11]}:started`);
    setTimeout(function() {
      let menuet = randomSelection[11];
      audio = new Audio(menuet);
      audio.play();
      console.log(`Finished`);
      cb();
    }, 2250);
  }
}
// NOTE: KEEP Dond't delete Experiment with short files and no timeout
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

//// TRY: https://stackoverflow.com/questions/31060642/preload-multiple-audio-files

// var audioFiles = [
//   "http://www.teanglann.ie/CanC/nua.mp3",
//   "http://www.teanglann.ie/CanC/ag.mp3",
//   "http://www.teanglann.ie/CanC/dul.mp3",
//   "http://www.teanglann.ie/CanC/freisin.mp3"
// ];

// function preloadAudio(url) {
//   var audio = new Audio();
//   // once this file loads, it will call loadedAudio()
//   // the file will be kept by the browser as cache
//   audio.addEventListener("canplaythrough", loadedAudio, false);
//   audio.src = url;
// }

// var loaded = 0;
// function loadedAudio() {
//   // this will be called every time an audio file is loaded
//   // we keep track of the loaded files vs the requested files
//   loaded++;
//   if (loaded == audioFiles.length) {
//     // all have loaded
//     init();
//   }
// }

// var player = document.getElementById("player");
// function play(index) {
//   player.src = audioFiles[index];
//   player.play();
// }

// function init() {
//   // do your stuff here, audio has been loaded
//   // for example, play all files one after the other
//   var i = 0;
//   // once the player ends, play the next one
//   player.onended = function() {
//     i++;
//     if (i >= audioFiles.length) {
//       // end
//       return;
//     }
//     play(i);
//   };
//   // play the first file
//   play(i);
// }

// // we start preloading all the audio files
// for (var i in audioFiles) {
//   preloadAudio(audioFiles[i]);
// }

// KEEP this from https://codepen.io/SitePoint/pen/JRaLVR
// (function() {
//   "use strict";
//   const random = ["assets/audacity/a1.mp3", "assets/audacity/a2.mp3"];
//// const URL =
////   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3";

//   const context = new AudioContext();
//   const playButton = document.querySelector("#play");

//   let songBuffer;

//   for (let i = 0; i < randomSelection.length; i++) {
//     window
//       .fetch(randomSelection[i])
//       .then(response => response.arrayBuffer())
//       .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
//       .then(audioBuffer => {
//         playButton.disabled = false;
//         songBuffer = audioBuffer;
//       });
//     console.log(randomSelection[i]);
//     playButton.onclick = () => play(songBuffer);

//     function play(audioBuffer) {
//       const source = context.createBufferSource();
//       source.buffer = audioBuffer;
//       source.connect(context.destination);
//       source.start();
//     }
//   }
// })();

// TRY this from https://stackoverflow.com/questions/37459231/webaudio-seamlessly-playing-sequence-of-audio-chunks

// ("use strict");
// class SoundBuffer {
//   constructor(ctx, sampleRate, bufferSize = 6, debug = true) {
//     this.ctx = ctx;
//     this.sampleRate = sampleRate;
//     this.bufferSize = bufferSize;
//     this.debug = debug;
//     this.chunks = [];
//     this.isPlaying = false;
//     this.startTime = 0;
//     this.lastChunkOffset = 0;
//   }
//   createChunk(chunk) {
//     var audioBuffer = this.ctx.createBuffer(2, chunk.length, this.sampleRate);
//     audioBuffer.getChannelData(0).set(chunk);
//     var source = this.ctx.createBufferSource();
//     source.buffer = audioBuffer;
//     source.connect(this.ctx.destination);
//     source.onended = e => {
//       this.chunks.splice(this.chunks.indexOf(source), 1);
//       if (this.chunks.length == 0) {
//         this.isPlaying = false;
//         this.startTime = 0;
//         this.lastChunkOffset = 0;
//       }
//     };
//     return source;
//   }
//   log(data) {
//     if (this.debug) {
//       console.log(new Date().toUTCString() + " : " + data);
//     }
//   }
//   addChunk(data) {
//     if (this.isPlaying && this.chunks.length > this.bufferSize) {
//       this.log("chunk discarded");
//       return; // throw away
//     } else if (this.isPlaying && this.chunks.length <= this.bufferSize) {
//       // schedule & add right now
//       this.log("chunk accepted");
//       let chunk = this.createChunk(data);
//       chunk.start(this.startTime + this.lastChunkOffset);
//       this.lastChunkOffset += chunk.buffer.duration;
//       this.chunks.push(chunk);
//     } else if (this.chunks.length < this.bufferSize / 2 && !this.isPlaying) {
//       // add & don't schedule
//       this.log("chunk queued");
//       let chunk = this.createChunk(data);
//       this.chunks.push(chunk);
//     } else {
//       // add & schedule entire buffer
//       this.log("queued chunks scheduled");
//       this.isPlaying = true;
//       let chunk = this.createChunk(data);
//       this.chunks.push(chunk);
//       this.startTime = this.ctx.currentTime;
//       this.lastChunkOffset = 0;
//       for (let i = 0; i < this.chunks.length; i++) {
//         let chunk = this.chunks[i];
//         chunk.start(this.startTime + this.lastChunkOffset);
//         this.lastChunkOffset += chunk.buffer.duration;
//       }
//     }
//   }
// }
