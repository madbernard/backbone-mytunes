// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    // set "sets a hash of attributes on the current model", if any of them change, or if they change the model's state, it triggers a change event on that model
    // this is where currentSong and songQueue first appear
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // play comes from SongModel.js (by way of library, which is a Songs collection)
    params.library.on('play', function(song) {
      this.set('currentSong', song);
      // the third parameter, below, is the 'this' that the appmodel stuff will be using
      // refers to the app, its attributes, probably
    }, this);

    params.library.on('ended', function(song) {
      // I think 'current song' is not what we'll want here, eventually
      this.set('currentSong', song);
      // the third parameter, below, is the 'this' that the appmodel stuff will be using
      // refers to the app, its attributes, probably
    }, this);
  }

});
