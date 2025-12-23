A web-based music recommendation system built using Firebase Hosting and Kaggle Spotify datasets.
The application demonstrates data-driven recommendation techniques through popularity-based clustering and feature-based clustering, supported by interactive visualizations.

🔗 Live Demo: https://dee-music-reco-2025.web.app

📌 Project Overview

This project analyzes real-world Spotify music data to recommend songs based on:

Genre

Popularity

Audio features such as energy and danceability

Instead of relying on black-box machine learning models, the system uses interpretable clustering techniques, making it suitable for academic evaluation, viva presentations, and demonstrations.

✨ Features
🎼 Genre-Based Filtering

Users can explore songs by selecting genres such as Rock, Pop, Hip-Hop, Jazz, and Classical.

🔥 Popularity-Based Clustering

Songs are grouped into:

High Popularity

Medium Popularity

Low Popularity

Clustering is based on Spotify popularity scores from the dataset.

🎵 Feature-Based Clustering

Songs are clustered using audio features:

Energy

Danceability

Categories include:

High Energy / Dance

Medium Energy

Calm / Low Energy

📊 Interactive Visualizations

Bar charts visualize the distribution of songs across clusters.

Scatter plots (PCA-style) help explain feature-based clustering.

🔁 Multiple Recommendation Views

Users can toggle between popularity-based and feature-based clustering layouts for comparison.

📂 Dataset

Source: Kaggle – Spotify Music Dataset

Files Used:

high_popularity_spotify.csv

low_popularity_spotify_data.csv

Key Attributes Utilized:

Genre

Track Name

Artist Name

Popularity Score

Energy

Danceability

🛠️ Technologies Used
Category	Tools
Frontend	HTML, CSS, JavaScript
Hosting	Firebase Hosting
Data Parsing	PapaParse
Visualization	Chart.js
Dataset	Kaggle Spotify Dataset
Version Control	Git & GitHub
📁 Project Structure
music recommendation/
├── public/
│   ├── index.html
│   ├── high_popularity_spotify.csv
│   └── low_popularity_spotify_data.csv
├── functions/
├── firebase.json
├── firestore.rules
├── firestore.indexes.json
├── .firebaserc
├── .gitignore
└── README.md

🚀 Deployment

The application is deployed using Firebase Hosting.

Deployment Steps:
firebase deploy --only hosting

🧠 Academic Relevance

This project demonstrates:

Recommendation system design

Clustering techniques

Feature engineering

Data visualization

Client-side data processing

Viva Explanation (One Line):

“The system recommends music using popularity-based and feature-based clustering techniques applied to Kaggle Spotify datasets, with interactive visualizations deployed on Firebase.”

🔮 Future Enhancements

K-Means clustering with centroid optimization

User profiles and personalization

Multi-feature similarity metrics

Search and playlist generation

Backend-based recommendation logic

👩‍💻 Author

Souhardee Sen
B.Tech – Computer Science (AI & ML)

📄 License

This project is for educational and academic use.

If you want, next I can help you:

Add screenshots to README

Write a project report

Prepare viva questions & answers

Create presentation slides

Just tell me 👍

ChatGPT can make mistakes. Check important info. See Cookie Preferences.
