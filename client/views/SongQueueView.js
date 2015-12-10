// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    console.log(this.collection, "this is collection");
    this.collection.on('add remove', function(model) {
      console.log('should render change');
      // http://backbonejs.org/#Events-catalog
      // the collection attribute on model logged below shows 4 entries, so model must still be library
      // console.log(model.get('songQueue'), "in AppView line 24, model.get('songQueue')");
      // console.log(this.model.songQueue, "this is the this.model.songQueue");
      // it reaches into the songQueue and gets the current array of enqueued song objects
      // should then... call some sort of render to put them on page?
      this.render();
      // this.songQueueView.setQueue(model.get('songQueue'));
    }, this);

   this.render();
  },

  setQueue: function(song) {
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Up Next</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({
          model: song
        }).render();
      })
    );
  }

});
