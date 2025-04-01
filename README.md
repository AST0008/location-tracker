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
        

Getting Started
---------------

Follow the instructions below to set up the project locally.

### Prerequisites

*   Node.js (v14.x or higher)
    
*   NPM or Yarn
    

### 1\. Clone the Repository

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/your-username/live-location-tracker.git  cd live-location-tracker   `

### 2\. Install Dependencies

#### Backend (Express)

Navigate to the backend directory and install the backend dependencies.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd backend  npm install   `

#### Frontend (Next.js)

Navigate to the frontend directory and install the frontend dependencies.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd frontend  npm install   `

### 3\. Configure the Backend

Ensure that your backend server (Express with Socket.IO) is running on a port, for example, port 5000. Modify any required configurations in the backend to ensure it matches your setup.

### 4\. Run the Application

To run the project, you need to start both the backend and frontend servers.

#### Run the Backend

Navigate to the backend folder and run the server:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd backend  npm start   `

#### Run the Frontend

Navigate to the frontend folder and start the Next.js app:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd frontend  npm run dev   `

The frontend should now be available at http://localhost:3000.

### 5\. Open the App in Your Browser

Visit http://localhost:3000 in your browser to start tracking your location.

### 6\. (Optional) Deploying to Production

To deploy this app in production, you can follow the respective deployment guides for **Next.js** and **Express**. Some popular platforms include **Vercel** for Next.js and **Heroku** for Express.

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
        

Features Breakdown
------------------

### Real-Time Location Tracking

*   The app uses **WebSockets** via **Socket.IO** to transmit real-time location updates.
    
*   The location is automatically updated every time the user moves, providing a live feed of their position.
    

### Interactive Map

*   **Leaflet.js** is used for rendering the map and positioning the markers.
    
*   The user’s location is updated dynamically on the map with smooth transitions for an enhanced user experience.
    

### User Markers with Avatars and Usernames

*   Each user is represented by a custom marker with their **avatar** and **username**.
    
*   These markers are displayed with a popup that shows the user's name and profile image.
    

Folder Structure
----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   live-location-tracker/  │  ├── backend/  │   ├── node_modules/             # Backend dependencies  │   ├── server.js                 # Express server setup  │   └── package.json              # Backend dependencies & scripts  │  └── frontend/      ├── node_modules/             # Frontend dependencies      ├── app/                      # Next.js App Router      ├── components/               # React components      └── package.json              # Frontend dependencies & scripts   `

Troubleshooting
---------------

### Common Errors:

*   **Location Access Denied**: Ensure that your browser has permissions to access the geolocation.
    
*   **WebSocket Connection Error**: Make sure the backend server is running and the frontend is correctly configured to connect to it.
    

If you run into any issues, please feel free to open an issue on the repository or reach out to the maintainer.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.
