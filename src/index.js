import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

const root = document.getElementById("root");

const h1 = React.createElement("h1", { id: "redtext" }, "Mobile Operating System");
const p = React.createElement("p", {}, "hi i am a paragrahp");
const li = React.createElement("li", {}, "android")
const li1 = React.createElement("li", {}, "blackberry")
const li2 = React.createElement("li", {}, "iphone")
const li3 = React.createElement("li", {}, "windows phone")

const ul = React.createElement("ul", {},h1 , li, li1,li2,li3);

const div = React.createElement("div", { id: "parent" },ul);



const h12 = React.createElement("h1", { id: "redtext" }, "Mobile Manufacturers");
const p2 = React.createElement("p", {}, "hi i am a paragrahp");
const li5 = React.createElement("li", {}, "samsung")
const li6 = React.createElement("li", {}, "HTC")
const li7 = React.createElement("li", {}, "micromax")
const li8 = React.createElement("li", {}, "apple")

const ul2 = React.createElement("ul", {},h12,li5,li6,li7,li8);

const div2 = React.createElement("div", { id: "parent2" },ul2);

const container = React.createElement("div", {}, div,div2);

ReactDOM.render(container, root);