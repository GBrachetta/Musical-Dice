/**
 * Constants
 */
const zeroPadd = n => (n < 10 ? "0" + n : n), // Function to padd a number with '0'
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"], // For randomising array and creating grid
    $musicGrid = $("#music-grid"),
    $playButton = $("#play-minuetto"),
    $pauseButton = $("#pause-button"),
    $randomiseButton = $("#btn-randomise"),
    $checkboxes = $("#checkboxes-minuetti"),
    mp3list = alphabet.map(item => ({
        name: `Minuetto ${item}`,
        path: `assets/music/minuetto${item.toUpperCase()}.mp3`
    })); // Defines the array of objects containing all full minuetti

/**
 * Variables
 */
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], // For randomising array and creating grid
    randomIDs = [],
    sequence = [],
    $allMP3 = [],
    isPlaying = false,
    single = null; // Will handle a single Howler sound on cell click

/**
 * Generates random selections from selected letters
 */
function randomise() {
    $playButton.prop("disabled", false).text("Play Minuetto"); // Restores play button after new randomisation
    $musicGrid.find(".selected").removeClass("selected");
    $(".bar")
        .removeClass("playing disabled")
        .prop("disabled", false); // Restores clickalability of grid

    for (let i = 1; i <= 12; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomIDs[i - 1] = letters[randomIndex] + zeroPadd(i);
    }
    console.log(randomIDs);

    // Makes grid cells selected
    randomIDs.forEach(id => $(`#${id}`).addClass("selected"));

    createSequence();
}

/**
 * Generates grid from user-selected values
 */
function buildGrid() {
    // Rebuilds the array of letters only from checked checkboxes
    letters = $checkboxes
        .find(":checkbox:checked")
        .get()
        .map(el => el.value);

    const noSelection = letters.length === 0;

    // Hides elements if no letters selected
    $playButton.prop("disabled", noSelection);
    $randomiseButton.prop("disabled", letters.length < 2);
    $musicGrid.toggle(!noSelection);

    // Does nothing if no ckeckbox was selected (no letters)
    if (noSelection) return; // EXIT FUNCTION HERE!

    // else...
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

/**
 * Creates a song from random bars
 * Populates sequence variable with Howler Objects
 */
function createSequence() {
    isPlaying = false;

    if (sequence.length) {
        sequence.forEach(sound => sound.unload());
    }

    // Rebuilds sequence array with Howler objects
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

/**
 * Plays sequence
 */
function playSequence() {
    stopAll(); // Stop all sounds before playing a sequence
    isPlaying = true;
    sequence[0].play();
    $playButton.text("Stop minuetto");
    // Disables grid while playing
    // $(".bar") // can remove these lines now if I want the user to fully interact with all buttons
    //     .removeClass("playing")
    //     .addClass("disabled")
    //     .prop("disabled", true);
}

/**
 * Stops all (to be called before playing any sound)
 */
function stopAll() {
    stopSequence();
    stopSingle();
    $allMP3.forEach($el => $el.trigger("stop"));
}

/**
 * Stops sequence
 */
function stopSequence() {
    isPlaying = false;
    sequence.forEach(bar => bar.stop());
    $playButton.text("Play minuetto");
    // Restores grid when clicked stop
    // $(".bar") // Can remove if decided to re-enable grid while playing
    //     .removeClass("playing disabled")
    //     .prop("disabled", false);
}

/**
 * Stops single
 */
function stopSingle() {
    // Handle already playing single bar sound
    if (single && single.playing()) {
        single.stop();
    }
}

/**
 * Toggles sequence play / stop state
 */
function togglePlaySequence() {
    isPlaying = !isPlaying; // Toggle isPlaying flag

    if (isPlaying) {
        playSequence();
    } else {
        stopSequence();
    }
}

/**
 * EVENTS
 */
// Rebuild grid on user-selection
$checkboxes.on("change", ":checkbox", buildGrid);
$randomiseButton.on("click", randomise); // Randomise new array of files
$playButton.on("click", togglePlaySequence); // Play / Stop sequence

// Grid play individual cells
// jQuery .on() method with dynamic handler for .bar elements
// Delegates listeners to parent element
$musicGrid.on("click", ".bar", function() {
    const $this = $(this);

    // Handle already playing single bar sound
    stopAll();

    // Set new sound and play it
    single = new Howl({
        src: [`assets/bars/${this.id}.mp3`],
        onplay: function() {
            $this.addClass("playing"); // Adds class to show which bit is playing
        },
        onstop: function() {
            $this.removeClass("playing"); // Removes class of bit just played
        },
        onend: function() {
            $this.removeClass("playing"); // Removes class of bit just played
        }
    });
    single.play();
});

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
    const $element = $(`<div/>`, {
        class: "btn col-6 col-md-3 individual-minuetto btn-primary btn-lg ",
        text: mp3.name,
        on: {
            click() {
                $(this).trigger(sound.playing() ? "stop" : "play");
            },
            play() {
                stopAll();
                $(this)
                    .text(`Stop ${mp3.name}`)
                    .addClass("minuetto-playing");
                sound.play();
            },
            stop() {
                $(this)
                    .text(mp3.name)
                    .removeClass("minuetto-playing");
                sound.stop();
            }
        }
    });
    // When the sound ends, triggers the $element stop() event
    sound.on("end", () => $element.trigger("stop"));
    return $element;
};

/**
 *  INIT APP
 */
$allMP3 = mp3list.map($newMP3); // Populate array of $ elements
$("#minuetti").append($allMP3); // Append to div

const checkboxesHTML = alphabet.reduce((_html, letter, i) => {
    const checkboxID = `checkbox-${i + 1}`;
    return (_html += `<div class = "col-3 col-md-2 col-lg-1">
        <input type="checkbox" id="${checkboxID}" value="${letter.toLowerCase()}" checked />
        <label for="${checkboxID}">${letter}</label>
    </div>`);
}, "");

$checkboxes.html(checkboxesHTML);

buildGrid();
