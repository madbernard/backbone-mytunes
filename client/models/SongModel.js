// SongModel.js - Defines a backbone model class for songs.

// this is the model class that the colleciton contains
var SongModel = Backbone.Model.extend({
  // we need models to detect changes to their values
  // models can have listeners
  // central to the application
  play: function() {
    // Triggering an event here will also trigger the event on the collection
    // Trigger callbacks for the given event, or space-delimited list of events.
    // Subsequent arguments to trigger will be passed along to the event callbacks.
    //
    // this after play, refers to the actual song instance that triggered the event
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});
