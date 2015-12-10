// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({
  // we need to use params..
  initialize: function(params){
    // getting the current song and creating a new view to render to the DOM
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    // songQueue exists on AppModel
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    // when current song changes for whatever reason
    this.model.on('change:currentSong', function(model){
      // it reaches into the appModel and gets the new current song
      // sets song to play, and render to DOM
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function(){
    // appview can see playerview and libraryview, and it renders them onto the page...  probably in a div since there is nothing defined for appview el (there is no "tagname")
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
