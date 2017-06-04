class Song {
  // TODO

  constructor(filePath, metaData) {
    this.audio = new Audio(filePath);
    this.$element = null;
    this.artist = metaData.artist;
    this.title = metaData.title;
    // ...
  }

  renderHTML() {
    let $songElement = $("<li></li>");
    let $titleSpan = $("<span></span>");
    let $artistSpan = $("<span></span>");
    $titleSpan.addClass("song-title").text(this.title).appendTo($songElement).after(" from ");
    $artistSpan.addClass("song-artist").text(this.artist).appendTo($songElement);

    this.$element = $songElement;
    return this.$element;
  }

  play() {
    this.audio.play();
    this.$element.addClass("playing");
  }

  pause() {
    this.audio.pause();
    this.$element.removeClass("playing");
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}

const Jukebox = {
  // Whether the Jukebox is currently playing a song or not.
  isPlaying: false,

  // The array of songs available for playing.
  songs: [],

  // The index of the currently playing song in the 'songs' array. 'null' if no song is playing.
  currentSong: null,

  addSong(song) {
    // push song object into songs array
    Jukebox.songs.push(song);
  },

  previousSong() {
    // play array position - 1
  },

  nextSong() {
    // play array position + 1
  },

  togglePause() {
    Jukebox.currentSong.pause();
    Jukebox.isPlaying = false;

  },
};

// This creates a new song object with the new track and renders it.
function addSong(filePath, metaData) {
  let song = new Song(filePath, metaData);
  Jukebox.addSong(song);

  song.renderHTML().appendTo($("#song-queue"));
}

$(document).ready(function() {
  // TODO: hook up the buttons, etc.
  $("#btnPlayPause").on("click", 
    function(event) {
      
      if (Jukebox.currentSong === null) {
        Jukebox.songs[0].play();
        Jukebox.currentSong = Jukebox.songs[0];
        Jukebox.isPlaying = true;
        return
      }

      if (Jukebox.isPlaying === false) {
        Jukebox.isPlaying = true;
        Jukebox.currentSong.play();
        return
      }

      if (Jukebox.isPlaying === true) {
        Jukebox.togglePause();
      }
    }
  );

  $("#btnPrev").on("click", 
    function(event) {
      console.log("prev");
      Jukebox.previousSong();
    }
  );

  $("#btnNext").on("click", 
    function(event) {
      console.log("next");
      Jukebox.nextSong();
    }
  );

  addSong("songs/Zimbabwe.mp3", {
    title: "Can I Get Wit' Ya in Zimbabwe",
    artist: "Notorious B.I.G. / New Navy",
  });

  addSong("songs/IllGetYou.mp3", {
    title: "I'll Get You (ft. Jeppe)",
    artist: "Classixx",
  });

  addSong("songs/CoastalBrake.mp3", {
    title: "Coastal Brake",
    artist: "Tycho",
  });

  console.log(Jukebox.songs)
});