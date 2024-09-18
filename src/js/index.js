import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

import Home from "./component/home.jsx";


const root = ReactDOM.createRoot(document.getElementById('app'));
let seconds = 0;

setInterval(function () {
    seconds++;
    root.render(<Home seconds={seconds} />);
}, 1000);