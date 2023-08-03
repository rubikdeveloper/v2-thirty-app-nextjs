"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

export default function DataFetchingComponent() {
  const [body, setBody] = useState(null);
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  const fetchData = async () => {
    try {
      const randomPostId = Math.floor(Math.random() * 100) + 1;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${randomPostId}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const jsonData = await response.json();
      setBody(jsonData.body); // Set only the "body" property in the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchPeriodically = useCallback(() => {
    fetchData();
    timeoutIdRef.current = setTimeout(fetchPeriodically, 5000);
  }, []);

  useEffect(() => {
    fetchPeriodically();

    return () => {
      // Cleanup function to clear the interval when the component unmounts
      clearTimeout(timeoutIdRef.current);
    };
  }, [fetchPeriodically]);

  return (
    <div
      id="MessageApi"
      className="relative p-4 m-4 bg-white rounded-lg  w-50 h-24 overflow-hidden border-2 border-red-400"
    >
      <h2 className="text-1xl font-bold mb-2">Post</h2>

      {body !== null && (
        <p className="whitespace-nowrap overflow-ellipsis overflow-hidden h-12">
          {body}
        </p>
      )}
    </div>
  );
}
