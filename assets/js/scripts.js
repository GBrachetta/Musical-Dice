// Constants
// GOOD Multidimensional array with all (unique) filenames in their columns
const fileName = [
  ["a01", "a02", "a03", "a04", "a05", "a06", "a07", "a08", "a09", "a10", "a11", "a12"],
  ["b01", "b02", "b03", "b04", "b05", "b06", "b07", "b08", "b09", "b10", "b11", "b12"],
  ["c01", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "c11", "c12"],
  ["d01", "d02", "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10", "d11", "d12"],
  ["e01", "e02", "e03", "e04", "e05", "e06", "e07", "e08", "e09", "e10", "e11", "e12"],
  ["f01", "f02", "f03", "f04", "f05", "f06", "f07", "f08", "f09", "f10", "f11", "f12"],
  ["g01", "g02", "g03", "g04", "g05", "g06", "g07", "g08", "g09", "g10", "g11", "g12"],
  ["h01", "h02", "h03", "h04", "h05", "h06", "h07", "h08", "h09", "h10", "h11", "h12"],
  ["i01", "i02", "i03", "i04", "i05", "i06", "i07", "i08", "i09", "i10", "i11", "i12"],
  ["j01", "j02", "j03", "j04", "j05", "j06", "j07", "j08", "j09", "j10", "j11", "j12"],
  ["k01", "k02", "k03", "k04", "k05", "k06", "k07", "k08", "k09", "k10", "k11", "k12"],
  ["l01", "l02", "l03", "l04", "l05", "l06", "l07", "l08", "l09", "l10", "l11", "l12"]
];
const playButton = $("#play-minuetto"),
  pauseButton = $("#pause-button");

// Variables
let randomSelection = [];
let sequence = [];
let i;
let soundFiles = [];
let pickedValues = [];

function randomise() {
  $("#play-minuetto")
    .attr("disabled", false)
    .text("Play Minuetto");
  $(".bar").removeClass("playing");

  for (i = 0; i < fileName.length; i++) {
    let index = Math.floor(Math.random() * (fileName.length - 1 - 0 + 1));
    pickedValues[i] = fileName[index][i];
    randomSelection = pickedValues.map(createURL);
    function createURL(fileName) {
      randomSelection = [];
      return `assets/music/${fileName}.mp3`;
    }
  }
  defineSong();
  $(".selected").removeClass("selected");

  randomSelection.forEach(element => {
    let item = [`${element.slice(13, 16)}`];
    $(`#${item}`).addClass("selected");
  });
  // console.log(randomSelection);
}

// Populate Grid
fileName.forEach(row => {
  $("#music-grid").append(`<div id="music-row-${row.slice(0, 1)}" class="row no-gutters"></div>`);
  row.forEach(col => {
    $(`#music-row-${row.slice(0, 1)}`).append(
      `<div class="col-1"><button id="${col}" class="btn bar song">${col.toUpperCase()}</button></div>`
    );
  });
});

// GOOD Play array
// $("#play-minuetto").on("click", playSong);
function createSequence(bars) {
  let allHowls = [];
  let howl;
  for (i = 0; i <= bars; i++) {
    howl = new Howl({
      src: [randomSelection[i]],
      loop: false,
      // Add here onplay and onend
      onplay: function() {
        let cleanPath = this._src.replace("assets/music/", "").replace(".mp3", "");
        $(`#${cleanPath}`).addClass("playing");
      },
      onend: function() {
        let cleanPath = this._src.replace("assets/music/", "").replace(".mp3", "");
        $(`#${cleanPath}`).removeClass("playing");
      }
    });
    allHowls.push(howl);
  }

  return allHowls;
}

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
          // Is this the place to highlight each cell as they play
          // console.log(soundFiles[i]);
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
  playButton.on("click", function() {
    if (!isPlaying) {
      isPlaying = true;
      soundFiles[0].play();
      // $(".bar")
      //   .attr("disabled", true)
      //   .css({ cursor: "default", opacity: "1" });
        $(".bar").attr("disabled", true).addClass("disabled");
      let lengthSong = soundFiles.length - 2;
      soundFiles[lengthSong].on("end", function() {
        isPlaying = false;
      });
      // playButton.html("Stop");
      // console.log(`Is playing? ${isPlaying}`);
      // console.count(isPlaying);
    }
    $("#play-minuetto")
      .attr("disabled", true)
      .css({ cursor: "default" });
    // Restores the play button after finishing song
    let length = soundFiles.length - 2;
    soundFiles[length].on("end", function() {
      $("#play-minuetto")
        .attr("disabled", false)
        .text("Play Again");
        $(".bar").attr("disabled", false).removeClass("disabled");
    });
    // $("#play-minuetto").attr("id", 'pause-button');
  });
  pauseButton.on("click", function() {
    if (isPlaying) {
      isPlaying = false;
      soundFiles.forEach(bar => {
        bar.stop();
        $(".bar").removeClass("playing");
        $(".bar").attr("disabled", false).removeClass("disabled");
        // $(".bar")
        //   .attr("disabled", false)
        //   .css({ cursor: "pointer", opacity: "1" });
      });
      $("#play-minuetto").attr("disabled", false);
    }
    // console.log(`Is playing? ${isPlaying}`);
  });
  // Grid play event
  $(".bar").on("click", function() {
    let id = this.id;
    let barPath = `assets/bars/${id}.mp3`;
    let cell = new Howl({
      src: [barPath],
      volume: 0.3,
      onplay: function() {
        $(`#${id}`).addClass("playing");
      },
      onend: function() {
        $(`#${id}`).removeClass("playing");
      }
    });

    cell.play();
    // cell.on("play", () => {
    //   $(".bar").attr("dissabled", true);
    // });
    // cell.unload()
  });
}

// Calls randomise() on load to have a valid array in case
// playSong() is called from the page before randomising
randomise();

$(window).on("load", defineSong);
