# Live Location Tracker

A real-time web application that tracks and displays the user's live location on an interactive map. The app utilizes the browser's Geolocation API to track the user's position and display it on a map with real-time updates using **WebSockets** (Socket.IO). Users can also see other users' locations on the map.

## Features

*   **Real-Time Location Tracking**: Continuously track and display the user's real-time location.
*   **Interactive Map**: Visualize the user's movement on an interactive map with smooth transitions.
*   **Multiple User Support**: Track and display the locations of multiple users simultaneously.
*   **User Identification**: Display usernames and avatars on the map for each user.
*   **Socket.IO Integration**: Uses WebSockets to send and receive location data in real-time.
*   **Responsive Design**: The app works across all screen sizes, from mobile to desktop.

## Tech Stack

### Frontend:
*   **React** with **Next.js** (for SSR and client-side rendering)
*   **Leaflet.js** (for map rendering)
*   **Socket.IO Client** (for real-time data handling)
*   **Tailwind CSS** (for responsive and modern UI)

### Backend:
*   **Express.js** (for handling API requests and WebSocket connections)
*   **Socket.IO Server** (for real-time communication)

