// Constants
// Defines the array of objects containing all full minuetti
const zeroPadd = n => (n < 10 ? "0" + n : n), // Function to padd a number with '0'
  alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"], // For randomising array and creating grid
  $musicGrid = $("#music-grid"),
  $playButton = $("#play-minuetto"),
  $pauseButton = $("#pause-button"),
  $randomiseButton = $("#btn-randomise"),
  $checkboxes = $("#checkboxes-minuetti");
// By getting rid of Rando.js we needed an array to get the index in randomisation
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]; // For randomising array and creating grid
let randomIDs = [];
let sequence = [];
let $allMP3 = [];
let isPlaying = false; // Made global to get rid of handlers
let single = null; // Will handle a single Howler sound on cell click

const mp3list = alphabet.map(item => ({
  name: `Minuetto ${item}`,
  path: `assets/music/minuetto${item.toUpperCase()}.mp3`
}));

randomise(); // Runs to have a valid array on load in case the user clicks "Play Minuetto" before randomising one.

function randomise() {
  $playButton.prop("disabled", false).text("Play Minuetto"); // Restores play button after new randomisation
  $musicGrid.find(".selected").removeClass("selected");
  $(".bar")
    .removeClass("playing disabled")
    .prop("disabled", false); // Restores clickalability of grid

  for (let i = 1; i <= 12; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    randomIDs[i - 1] = letters[randomIndex];
  }
  console.log(randomIDs);

  // Make grid cells selected
  randomIDs.forEach(id => $(`#${id}`).addClass("selected"));

  createSequence();
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

function buildGrid() {
  letters = $checkboxes
    .find(":checkbox:checked")
    .get()
    .map(el => el.value);

  let html = "";
  for (let i = 0; i < letters.length; i++) {
    html += `<div id="music-row-${letters[i]}" class="row no-gutters">`;
    for (let j = 1; j <= 12; j++) {
      const columnID = letters[i] + zeroPadd(j);
      html += `<div class="col-1"><button id="${columnID}" class="btn bar song">${columnID.toUpperCase()}</button></div>`;
    }
    html += "</div>";
  }

  $musicGrid.html(html);
  randomise(); // Calls randomise to allow loading MP3 files
}

// Play array of files

function createSequence() {
  isPlaying = false;

  if (sequence.length) {
    sequence.forEach(sound => sound.unload());
  }

  // Rebuild sequence array with Howler objects
  sequence = randomIDs.map((id, i) => {
    return new Howl({
      src: `assets/music/${id}.mp3`,
      onplay: function() {
        $(`#${id}`).addClass("playing"); // Adds class to bar currently playing
      },
      onend: function() {
        $(`#${id}`).removeClass("playing"); // Removes class of bar just played
        // Handle all bars but the last one
        if (i < randomIDs.length - 1) {
          sequence[i + 1].play(); // Play next bar
        } else {
          isPlaying = false;
          $playButton.text("Play Again"); // Restores play button after song
          $(".bar")
            .prop("disabled", false)
            .removeClass("playing disabled"); // Restores grid after song
        }
      }
    });
  });
}

// Event Listeners
// FIXME: Need to disable button until the user has selected his minuetti
$("#btn-randomise").on("click", randomise); // Randomise new array of files

// FIXME: Need to prevent that, and disable button until the user has selected his minuetti
function handlers(isPlaying, soundFiles) {
  $playButton.on("click", function() {
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

  $pauseButton.on("click", function() {
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
$("a").on("click", function(event) {
  let hash = this.hash;
  if (!hash) return; // Do nothing if no hash. Else... animate
  event.preventDefault();
  $("html, body").animate({ scrollTop: $(hash).offset().top }, 800, function() {
    window.location.hash = hash;
  });
});

// Buttons to preview full minuetti
const $newMP3 = mp3 => {
  const sound = new Howl({ src: mp3.path }); // Howl
  // $ ELEMENT
  return $(`<div/>`, {
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

const checkboxesHTML = alphabet.reduce((_html, letter, i) => {
  console.log(isPlaying);
  const checkboxID = `checkbox-${i + 1}`;
  return (_html += `<div class = "col-3 col-md-2 col-lg-1">
        <input type="checkbox" id="${checkboxID}" value="${letter.toLowerCase()}" checked />
        <label for="${checkboxID}">${letter}</label>
    </div>`);
}, "");

$checkboxes.html(checkboxesHTML);

buildGrid();
