class Song {
  // TODO

  constructor(filePath, metaData) {
    this.audio = new Audio(filePath);
    // ...
  }

  renderHTML() {
    /*
<li>
  <span class="song-title">Example</span> from <span class="song-artist">Example</span>
</li>
    */

    this.$element = /* ... */null;
    return this.$element;
  }

  play() {
    // ...
  }

  pause() {
    // ...
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
    // ...
  },

  previousSong() {
    // ...
  },

  nextSong() {
    // ...
  },

  togglePause() {
    // ...
  },
};

function addSong(filePath, metaData) {
  let song = new Song(filePath, metaData);
  Jukebox.addSong(song);

  song.renderHTML().appendTo($("#song-queue"));
}

$(document).ready(function() {
  // TODO: hook up the buttons, etc.

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
});