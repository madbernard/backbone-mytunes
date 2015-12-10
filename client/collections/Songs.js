//When fetching raw JSON data from an API, a Collection will automatically populate itself with data formatted as an array, while a Model will automatically populate itself with data formatted as an object:

// [{"id": 1}] ..... populates a Collection with one model.
// {"id": 1} ....... populates a Model with one attribute.

// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel

});