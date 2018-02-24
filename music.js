// Library constructor function
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

// Playlist constructor function
function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

// Prototype to add playlist to library
Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

// Prototype to pretty print Library
Library.prototype.print = function () {
  console.log(this.name);
  this.playlists.forEach((playlist) => {
    console.log(playlist);
  });
}

// TRACK constructor function
function Track(name, artist, rating, length) {
  if (rating >= 1 && rating <= 5) {
    this.rating = rating;
  } else {
    throw ('Rating wrong');
  }
  this.name = name;
  this.artist = artist;
  this.length = length;
}

// Prototype to add tracks to playlist
Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

// Prototype to find total duration of playlist
Playlist.prototype.totalDuration = function() {
  let acc = 0;
  this.tracks.forEach((track) => {
    acc += track.length;
  });
  console.log(acc);
}

// Prototype to find overall rating of playlist
Playlist.prototype.overallRating = function() {
  let acc = 0;
  let count = this.tracks.length;
  this.tracks.forEach((track) => {
    acc += track.rating;
  })
  let average = acc/count;
  console.log(average);
}

// CREATE LIBRARY
let Library1 = new Library('My TEST library', 'Alex');

// CREATE PLAYLIST
let Playlist1 = new Playlist('80s Rock');
let Playlist2 = new Playlist('90s Rock');

// ADD PLAYLIST TO LIBRARY
Library1.addPlaylist(Playlist1);
Library1.addPlaylist(Playlist2);

// CREATE TRACK
let Track1 = new Track('Living on a prayer', 'Bon Jovi', 5, 100);
let Track2 = new Track('Africa', 'Toto', 4, 200);
let Track3 = new Track('Creep', 'Radio Head', 5, 300);
let Track4 = new Track('Everlong', 'Foo Fighters', 5, 350);

// ADD TRACK TO PLAYLIST
Playlist1.addTrack(Track1);
Playlist1.addTrack(Track2);
Playlist2.addTrack(Track3);
Playlist2.addTrack(Track4);

// // PRINT FINAL LIBRARY
Library1.print();
Playlist1.totalDuration();
Playlist1.overallRating();