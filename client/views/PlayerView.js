// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  // http://stackoverflow.com/questions/9346579/how-can-i-tell-when-an-html5-audio-element-has-finished-playing
  // this.model.play();
  el: '<audio controls autoplay onended="console.log(\'song over\');" />',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
