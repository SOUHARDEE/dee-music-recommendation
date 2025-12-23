const functions = require("firebase-functions");

exports.recommend = functions.https.onRequest((req, res) => {
  res.json([
    "Shape of You – Ed Sheeran",
    "Blinding Lights – The Weeknd",
    "Levitating – Dua Lipa",
    "Believer – Imagine Dragons",
    "Perfect – Ed Sheeran"
  ]);
});
