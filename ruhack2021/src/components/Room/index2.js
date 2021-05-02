//ignore this

import React from "react";
import ReactDOM from "react-dom";

import { DataLayer } from "./DataLayer";
import App from "./App";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

