import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important"> Adopt Me! </h1>
      <Pet name="Zoey" animal="Dog" breed="Rescue"></Pet>
      <Pet name="Sparty" animal="Dog" breed="Golden Retriever"></Pet>
      <Pet name="Walter" animal="Dog" breed="Chocolate Lab"></Pet>
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
