// /backend/models/MusicTrack.js
const mongoose = require('mongoose');

const musicTrackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  url: { type: String, required: true } // URL to the track on a CDN
});

module.exports = mongoose.model('MusicTrack', musicTrackSchema);
