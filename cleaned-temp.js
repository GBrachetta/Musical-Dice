function defineSong() {
  let isPlaying = false;
  let soundFiles = [];
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
  let randomSelection = [];
  let sequence = [];

  function randomise() {
    // if (soundFiles.length) {
    //   soundFiles.forEach(sound => {
    //     sound.unload();
    //   });
    // }
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

  function handlers(playing, soundFiles) {
    let playButton = $("#play-minuetto"),
      pauseButton = $("#pause-button"),
      randomiseButton = $("#btn-randomise");
    playButton.click(function() {
      if (!playing) {
        isPlaying = true;
        soundFiles[0].play();
      }
    });
    pauseButton.on("click", function() {
      if (playing) {
        isPlaying = false;
        soundFiles[0].stop();
      }
    });
    randomiseButton.on("click", randomise);
    $(".bar").on("click", function() {
      let id = this.id;
      let barPath = `assets/music/${id}.mp3`;
      let bar = new Audio(barPath);
      bar.play();
    });
  }
  soundFiles = createSequence(12);
  soundFiles[0].on("end", function() {
    isPlaying = false;
  });
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
  handlers(isPlaying, soundFiles);
  randomise();
}
$(window).on("load", defineSong);
