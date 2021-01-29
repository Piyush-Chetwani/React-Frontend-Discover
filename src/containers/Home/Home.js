import React from "react";
import Homebody from "./Homebody/Homebody";
import HomeFeatures from "./HomeFeatures/HomeFeatures";

function App(props) {
  return (
    <>
      <Homebody {...props}/>
      <HomeFeatures />
    </>
  );
}

export default App;
