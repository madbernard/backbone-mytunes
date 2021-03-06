// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({
  // we need params because we are passing information that BB doesn't know what to do with
  // specific to the mytunes app
  initialize: function(params) {
    // set "sets a hash of attributes on the current model", if any of them change, or if they change the model's state, it triggers a change event on that model
    // this is where currentSong and songQueue first appear
    this.set('currentSong', new SongModel());
    // songQueue starts as an empty array, it is a property on appModel, which in this case is app
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // play comes from SongModel.js (by way of library, which is a Songs collection)
    // the keyword this from the song, becomes the song here
    params.library.on('play', function(song) {
      this.set('currentSong', song);
      // the third parameter, below, is the 'this' that the appmodel stuff will be using
      // refers to the app, its attributes, probably
    }, this);

    this.get('songQueue').on('stop', function() {
      this.set('currentSong', null);
      // the 'this' immediately above is appModel because of setting the this on the line immediately below
    }, this);

    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
      // forcing a trigger because songQueue has no songs in it to listen to, at first
      this.get('songQueue').trigger('enqueue', song);
    }, this);

  }

});
