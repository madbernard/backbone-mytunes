//When fetching raw JSON data from an API, a Collection will automatically populate itself with data formatted as an array, while a Model will automatically populate itself with data formatted as an object:

// [{"id": 1}] ..... populates a Collection with one model.
// {"id": 1} ....... populates a Model with one attribute.

// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    console.log("SongQueue has initialized");
    window.queue = this;

    this.on('ended dequeue', function() {
      this.songEnded();
    }, this);

    // this.on('enqueue', this.playFirst(), this);
    this.on('enqueue', function() {
      // console.log(this, "initilize listener for enqueue");
      this.playFirst();
    }, this);
  },

// http://backbonejs.org/#Events-once

  songEnded: function() {
    this.shift();

    if (this.length > 0) {
      this.playFirst();
    } else {
      // this.get('songQueue').trigger('enqueue', song);
      this.trigger('stop');
      // this.at(0).play();
    }
  },

  playFirst: function() {
    console.log(this.at(0), "this is the at 0");
    this.at(0).play();
    // app.get('library').at(0).play()
    console.log("SongQueue: playFirst working");
  }

});
