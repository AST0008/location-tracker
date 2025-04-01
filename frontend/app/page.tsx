"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const HomePage = () => {
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {loading && (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Loading Location....</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md">
          <p>Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md"
          >
            Retry
          </button>
        </div>
      )}

      {socket && <Map socket={socket} setLoading={setLoading} setError={setError} />}
    </div>
  );
};

export default HomePage;
