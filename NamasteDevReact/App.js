import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello form react"
); //{} => provide attributes // followed by children
const root = ReactDOM.createRoot(document.getElementById("root"));

//React.createElement = this creates an object
//render =>: converts object to an element and then insert as html tag

// here the heading is basically h1 tag but actually an object
//root.render(heading)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h1", {}, "i am h1 tag sibling"),
  ]),
]);

console.log(parent);

root.render(parent);
