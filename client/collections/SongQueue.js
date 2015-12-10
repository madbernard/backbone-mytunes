// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // in normal JS, we would put here a property with some key and then the value would be a holder (some kind of queue)
    // probably we don't need a property because this is already a collection of SongModels
    // but it does need methods that report on changes in the songModels
    // report when song is
    this.on('enqueue', function(song) {
      this.set('currentSong', song);
      // the third parameter, below, is the 'this' that the appmodel stuff will be using
      // refers to the app, its attributes, probably
    }, this);
  },

  playFirst: function() {
    this.on('enqueue', function(song) {
      this.set('currentSong', song);
      // the third parameter, below, is the 'this' that the appmodel stuff will be using
      // refers to the app, its attributes, probably
    }, this);
  }

});