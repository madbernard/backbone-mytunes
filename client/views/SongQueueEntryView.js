// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // if they click on a thing in the library, the thing gets added to the queue
  // if they click on a thing in the queue "when a song is dequeued, removes the song"
  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
