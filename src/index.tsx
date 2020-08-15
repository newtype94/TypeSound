import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
