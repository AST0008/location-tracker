Live Location Tracker
=====================

A real-time web application that tracks and displays the user's live location on an interactive map. The app utilizes the browser's Geolocation API to track the user's position and display it on a map with real-time updates using **WebSockets** (Socket.IO). Users can also see other users' locations on the map.

Features
--------

*   **Real-Time Location Tracking**: Continuously track and display the user's real-time location.
    
*   **Interactive Map**: Visualize the user's movement on an interactive map with smooth transitions.
    
*   **Multiple User Support**: Track and display the locations of multiple users simultaneously.
    
*   **User Identification**: Display usernames and avatars on the map for each user.
    
*   **Socket.IO Integration**: Uses WebSockets to send and receive location data in real-time.
    
*   **Responsive Design**: The app works across all screen sizes, from mobile to desktop.
    

Tech Stack
----------

*   **Frontend**:
    
    *   **React** with **Next.js** (for SSR and client-side rendering)
        
    *   **Leaflet.js** (for map rendering)
        
    *   **Socket.IO Client** (for real-time data handling)
        
    *   **Tailwind CSS** (for responsive and modern UI)
        
*   **Backend**:
    
    *   **Express.js** (for handling API requests and WebSocket connections)
        
    *   **Socket.IO Server** (for real-time communication)
        

How It Works
------------

1.  **Geolocation API**:
    
    *   The browser's **Geolocation API** is used to continuously track the user's location.
        
    *   Once the location is fetched, it's emitted to the backend via **Socket.IO**.
        
2.  **Real-Time Updates**:
    
    *   The backend uses **Socket.IO** to broadcast the updated locations to all connected clients in real time.
        
    *   Clients listen for updates and render the new positions of all users on the map.
        
3.  **Map Rendering**:
    
    *   The map is rendered using **Leaflet.js**. The map is updated with the user's position and other users' positions, with smooth zoom transitions.
        
4.  **User Identification**:
    
    *   Each user's marker shows their **username** and **avatar** (can be configured by the user).
        
    *   When a user moves, the app dynamically updates their location on the map.
            


License
-------

This project is licensed under the MIT License - see the LICENSE file for details.
