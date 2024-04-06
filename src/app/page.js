"use client";
import { useEffect } from "react";
import Home from "./components/Home";

const page = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("/api/fetch")
          .then((res) => res.json())
          .then((data) => console.log(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default page;
