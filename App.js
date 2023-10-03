import React from "react";
import ReactDOM from "react-dom";


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 from parcel"),
    React.createElement("h2", {}, "I am h2"),
  ])
);
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(parent);
