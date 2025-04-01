"use client";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";

// Custom user icon
const userIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png", // Place this in the `public/` folder
  iconSize: [35, 35],
  iconAnchor: [17, 34],
  popupAnchor: [1, -34],
});

// Move the map to user's location smoothly
function MapUpdater({ position }: { position: LatLng }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 14, { duration: 1.5 }); // Smooth transition
    }
  }, [position, map]);

  return null;
}

const Map = ({
  socket,
  setLoading,
  setError,
}: {
  socket: any;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [position, setPosition] = useState<LatLng | null>(null);
  const [users, setUsers] = useState<{ [key: string]: LatLng }>({});

  useEffect(() => {
    if (!socket) return;

    let lastCoords: number[] | null = null;

    const watchID = navigator.geolocation.watchPosition(
      (coords) => {
        const newPosition = [coords.coords.latitude, coords.coords.longitude];
        if (
          !lastCoords ||
          Math.abs(lastCoords[0] - newPosition[0]) > 0.0001 ||
          Math.abs(lastCoords[1] - newPosition[1]) > 0.0001
        ) {
          setPosition(new L.LatLng(newPosition[0], newPosition[1]));
          socket.emit("location", newPosition);
          lastCoords = newPosition;
        }
        setLoading(false);
      },
      (error) => {
        setError("Failed to access location. Please enable GPS.");
        setLoading(false);
      },
      { enableHighAccuracy: true, maximumAge: 500 }
    );

    socket.on("updateLocations", (locations: any) => {
      const parsedLocations = Object.entries(locations).reduce(
        (acc, [id, pos]) => {
          acc[id] = new L.LatLng(pos[0], pos[1]);
          return acc;
        },
        {} as { [key: string]: LatLng }
      );
      setUsers(parsedLocations);
    });

    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, [socket]);

  return (
    <MapContainer
      center={position || [40.714, -74.009]}
      zoom={13}
      className="h-screen w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {position && <MapUpdater position={position} />}
      {Object.entries(users).map(([id, pos]) => (
        <Marker key={id} position={pos} icon={userIcon}>
          <Popup>
            <span className="font-bold text-blue-600">User {id}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
