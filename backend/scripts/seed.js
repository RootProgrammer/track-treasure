// /backend/scripts/seed.js
require('dotenv').config(); // Adjust if your .env file is located elsewhere
const mongoose = require('mongoose');
const MusicTrack = require('../models/MusicTrack'); // Update the path as necessary

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected for seeding...'))
.catch((err) => console.error(err));

async function seedTracks() {
  const tracks = [
    { title: 'Aadat (Kalyug)', artist: 'Atif Aslam', url: 'http://34.49.121.222/music/Aadat (Kalyug).mp3' },
    { title: 'Alan Walker - Sing Me To Sleep', artist: 'Alan Walker', url: 'http://34.49.121.222/music/Alan Walker - Sing Me To Sleep.mp3' },
    { title: 'Alan-Walker-Faded', artist: 'Alan Walker', url: 'http://34.49.121.222/music/Alan-Walker-Faded.mp3' },
    
    // Replace these URLs with the actual URLs after you've uploaded your music to the CDN
    // and ensure the paths are correctly pointing to the files as they're served by the CDN.
  ];

  try {
    await MusicTrack.deleteMany({}); // Clears the collection before seeding to avoid duplicates
    await MusicTrack.insertMany(tracks);
    console.log('Tracks seeded successfully!');
  } catch (error) {
    console.error('Error seeding tracks:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedTracks();
