import React from "react";
import HomeButton from "../buttons/HomeButton";

export default function UnderConstruction() {
  return (
    <div>
      <div className="mt-10">
        <HomeButton />
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        <img
          src="/under-const.jpg"
          alt="Two yellow and black striped bars behind an hexagonal sign, also in yellow and black, with the words under construction."
          className="w-full mx-auto"
        />
      </div>
    </div>
  );
}
