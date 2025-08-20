import React from "react";
import "./CubesAnimated.css";

const CubesAnimated = () => {
  return (
    <div className="cubesAnimatedDiv">
      <div className="cube cube1" style={{ background: "#3ad279" }}>
        <ion-icon name="code-slash-outline"></ion-icon>
      </div>
      <div className="cube cube2" style={{ background: "#E61550" }}>
        <ion-icon name="game-controller-outline"></ion-icon>
      </div>
      <div className="cube cube3" style={{ background: "#E2E2A8" }}>
        <ion-icon name="logo-react"></ion-icon>
      </div>
      <div
        className="cube cube4"
        style={{ background: "#E51717" }}
      >
        <ion-icon name="musical-notes"></ion-icon>
      </div>
    </div>
  );
};

export default CubesAnimated;
