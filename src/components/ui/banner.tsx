import React from "react";

export default function Banner() {
  return (
    <div className="bg-red-950 py-1 px-3 text-white hover:bg-red-800 hover:text-gray-200 transition duration-300 ease-in-out cursor-pointer fixed w-full z-40 top-0 left-0">
      <h1 className="text-xl">
        <a href="https://www.fsu.edu/">Florida State University</a>
      </h1>
    </div>
  );
}