// Constants
const mp3list = [
  {
    name: "Minuetto A",
    path: "assets/music/minuetto1.mp3"
  },
  {
    name: "Minuetto B",
    path: "assets/music/minuetto2.mp3"
  },
  {
    name: "Minuetto C",
    path: "assets/music/minuetto3.mp3"
  },
  {
    name: "Minuetto D",
    path: "assets/music/minuetto4.mp3"
  },
  {
    name: "Minuetto E",
    path: "assets/music/minuetto5.mp3"
  },
  {
    name: "Minuetto F",
    path: "assets/music/minuetto6.mp3"
  },
  {
    name: "Minuetto G",
    path: "assets/music/minuetto7.mp3"
  },
  {
    name: "Minuetto H",
    path: "assets/music/minuetto8.mp3"
  },
  {
    name: "Minuetto I",
    path: "assets/music/minuetto9.mp3"
  },
  {
    name: "Minuetto J",
    path: "assets/music/minuetto10.mp3"
  },
  {
    name: "Minuetto K",
    path: "assets/music/minuetto11.mp3"
  },
  {
    name: "Minuetto L",
    path: "assets/music/minuetto12.mp3"
  }
];
const playButton = $("#play-minuetto"),
  pauseButton = $("#pause-button");
let letters = "abcdefghijkl"; // For randomising array and creating grid

// Variables
let randomSelection = [];
let sequence = [];
let i;
let soundFiles = [];
let pickedValues = [];
let arrayOfChoices = [];
let $allMP3 = [];

randomise(); // Runs to have a valid array on load in case the user clicks "Play Minuetto" before randomising one.
$(window).on("load", defineSong); // Defines song on load. Cells in grid don't play before randomising without this.

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

// Generates grid from user-selected values
// This gives me a string alphabetically ordered from the values in the checkboxes
// BUG: When all minuetti have been deselected, the variable 'letters' needs to revert to 'abcdefghijkl'
$(".list-checkbox-item").change(function() {
  let chosenLetters = $(this).val();
  if ($(this).is(":checked")) {
    arrayOfChoices.push(chosenLetters);
  } else {
    arrayOfChoices.splice($.inArray(chosenLetters, arrayOfChoices), 1);
  }
  letters = arrayOfChoices.sort().join(""); // Gives me a string with chosen letters ordered alphabetically
  console.log(
    `This is my string in var 'letters' ordered alphabetically (Need to clear grid after each instantiation or append after the loop): %c${letters}`,
    "color: red; font-weight: bold; font-size: 16px"
  );
  let html = ""; // Needs to stay in function scope
  
  for (let i = 0; i < letters.length; i++) {
    var musicRowID = `${letters.charAt(i)}01`;
    html += `<div id="music-row-${musicRowID}" class="row no-gutters">`; // *** No `</div>` yet
    for (let j = 1; j <= 12; j++) {
      var columnID = letters.charAt(i) + (j < 10 ? "0" : "") + j;
      html += `<div class="col-1"><button id="${columnID}" class="btn bar song">${columnID.toUpperCase()}</button></div>`;
    }
    html += "</div>";
  }
  $("#music-grid").html(html);
  randomise(); // Calls randomise to allow loading MP3 files
});

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
// FIXME: Need to disable button until the user has selected his minuetti
$("#btn-randomise").on("click", randomise); // Randomise new array of files
// Play & Pause event
// BUG:  There's something wrong here, on each randomise the howls pile up
// FIXME: Have to make PLAY and STOP buttons just one button dynamically changing
// FIXME: Currently PLAY is able to play the first randomisation based on the variable declared in line 54
// FIXME: Need to prevent that, and disable button until the user has selected his minuetti
function handlers(isPlaying, soundFiles) {
  playButton.on("click", function() {
    if (!isPlaying) {
      isPlaying = true;
      soundFiles[0].play();
      console.count(`Variable isPlaying (value and count): ${isPlaying}`);
      $(".bar")
        .attr("disabled", true)
        .addClass("disabled"); // Disables grid while playing
      let lengthSong = soundFiles.length - 2;
      soundFiles[lengthSong].on("end", function() {
        isPlaying = false;
        console.count(`Variable isPlaying (value and count): ${isPlaying}`);
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

  // Grid play individual cells 
  // FIXME: Not sure this is the best way!
  $(".bar").on("click", function() {
    let id = this.id;
    let barPath = `assets/bars/${id}.mp3`;
    let cell = new Howl({
      src: [barPath],
      volume: 0.3,
      onload: function() {},
      onplay: function() {
        $(`#${id}`).addClass("playing"); // Adds class to show which bit is playing
      },
      onend: function() {
        $(`#${id}`).removeClass("playing"); // Removes class of bit just played
      }
    });
    cell.play();
  });
}

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

// Buttons to preview full minuetti
const $newMP3 = mp3 => {
  const sound = new Howl({ src: mp3.path }); // Howl
  // $ ELEMENT
  return $(`<div>${mp3.name}`, {
    class: "btn col-6 col-md-3 individual-minuetto btn-primary btn-lg ",
    text: mp3.name,
    on: {
      click() {
        $allMP3.forEach($el => $el.not(this).trigger("stop"));
        $(this).trigger(sound.playing() ? "stop" : "play");
      },
      play() {
        $(this).text("Stop");
        sound.play();
      },
      stop() {
        $(this).text(mp3.name);
        sound.stop();
      }
    }
  });
};

$allMP3 = mp3list.map($newMP3); // Populate array of $ elements
$("#minuetti").append($allMP3); // Append to div
