import React from "react";
import { Featurebox } from "./Featurebox";
import image1 from "../assets/1.svg";
import image2 from "../assets/2.svg";
import image3 from "../assets/3.svg";
import image4 from "../assets/4.svg";

export const Feature = () => {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featurebox image={image1} title="WeightLifting" />
        <Featurebox image={image2} title="Specific Muscle" />
        <Featurebox image={image3} title="Flex your muscle" />
        <Featurebox image={image4} title="Cardio Exercise" />
      </div>
    </div>
  );
};
