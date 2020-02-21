// Constants
const playButton = $("#play-minuetto"),
  pauseButton = $("#pause-button");
const letters = "abcdefghijkl"; // For randomising array and creating grid

// Variables
let randomSelection = [];
let sequence = [];
let i;
let soundFiles = [];
let pickedValues = [];

function randomise() {
  $("#play-minuetto")
    .attr("disabled", false)
    .text("Play Minuetto"); // Restores play button after new randomisation
  $(".bar")
    .removeClass("playing")
    .attr("disabled", false)
    .removeClass("disabled"); // Restores clickalability of grid

  // This uses randojs to simplify randomisation.
  // With thanks to this answer: https://stackoverflow.com/questions/60301319/
  for (let i = 1; i <= 12; i++) {
    let valueAtIndex = `assets/music/${rando(letters)}${i < 10 ? "0" : ""}${i}.mp3`;
    randomSelection[i - 1] = valueAtIndex;
  }
  console.log(randomSelection);
  defineSong();
  $(".selected").removeClass("selected");

  randomSelection.forEach(element => {
    let item = [`${element.slice(13, 16)}`];
    $(`#${item}`).addClass("selected");
  });
}

// Populate Grid - Used in combination with variable letters
for (let i = 0; i < letters.length; i++) {
  var musicRowID = letters.charAt(i) + "01";
  $("#music-grid").append(`<div id="music-row-${musicRowID}" class="row no-gutters"></div>`);

  for (let j = 1; j <= 12; j++) {
    var columnID = letters.charAt(i) + (j < 10 ? "0" : "") + j;
    $(`#music-row-${musicRowID}`).append(
      `<div class="col-1"><button id="${columnID}" class="btn bar song">${columnID.toUpperCase()}</button></div>`
    );
  }
}

// Play array of files
// $("#play-minuetto").on("click", playSong);
function createSequence(bars) {
  let allHowls = [];
  let howl;
  for (i = 0; i <= bars; i++) {
    howl = new Howl({
      src: [randomSelection[i]],
      loop: false,
      onplay: function() {
        let cleanPath = this._src.replace("assets/music/", "").replace(".mp3", "");
        $(`#${cleanPath}`).addClass("playing"); // Adds class to bar currently playing
      },
      onend: function() {
        let cleanPath = this._src.replace("assets/music/", "").replace(".mp3", "");
        $(`#${cleanPath}`).removeClass("playing"); // Removes class of bar just played
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
$("#btn-randomise").on("click", randomise); // Randomise new array of files
// Play & Pause event
function handlers(isPlaying, soundFiles) {
  playButton.on("click", function() {
    if (!isPlaying) {
      isPlaying = true;
      soundFiles[0].play();
      $(".bar")
        .attr("disabled", true)
        .addClass("disabled"); // Disables grid while playing
      let lengthSong = soundFiles.length - 2;
      soundFiles[lengthSong].on("end", function() {
        isPlaying = false;
      });
      // playButton.html("Stop");
    }
    $("#play-minuetto")
      .attr("disabled", true)
      .css({ cursor: "default" }); // Disables play button while playing
    let length = soundFiles.length - 2;
    soundFiles[length].on("end", function() {
      $("#play-minuetto")
        .attr("disabled", false)
        .text("Play Again"); // Restores play button after song
      $(".bar")
        .attr("disabled", false)
        .removeClass("disabled"); // Restores grid after song
    });
    // $("#play-minuetto").attr("id", 'pause-button');
  });
  pauseButton.on("click", function() {
    if (isPlaying) {
      isPlaying = false;
      soundFiles.forEach(bar => {
        bar.stop();
        $(".bar")
          .removeClass("playing")
          .attr("disabled", false)
          .removeClass("disabled"); // Restores grid when clicked stop
      });
      $("#play-minuetto").attr("disabled", false);
    }
  });
  // Grid play event
  $(".bar").on("click", function() {
    let id = this.id;
    let barPath = `assets/bars/${id}.mp3`;
    let cell = new Howl({
      src: [barPath],
      volume: 0.3,
      onplay: function() {
        $(`#${id}`).addClass("playing"); // Adds class to show which bit is playing
      },
      onend: function() {
        $(`#${id}`).removeClass("playing"); // Removes class of bit just played
      }
    });
    cell.play();
    // cell.unload()
  });
}

randomise(); // Runs to have a valid array on load

$(window).on("load", defineSong);

// Smooth scrolling, from https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
