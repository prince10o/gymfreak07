import React from "react";

export const Featurebox = (props) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <p>
          Whether you are a beginner or an experienced, our gym provides
          everything.
        </p>
      </div>
    </div>
  );
};
