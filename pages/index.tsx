import React from "react";
import Flickity from "react-flickity-component";

import "../styles.css";
import "flickity/css/flickity.css";

function Carousel() {
  return (
    <Flickity>
      <img src="https://placeimg.com/640/480/animals" />
      <img src="https://placeimg.com/640/480/animals" />
    </Flickity>
  );
}

function Home() {
  return (
    <div className="App">
      <h1>React Flickity</h1>
      <Carousel />
    </div>
  );
}

export default Home
