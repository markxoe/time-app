import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import moment from "moment";
import "./i18n/moment-langs";

import { getLocale } from "./connection/ipc";

import "./connection/ipc.d.ts";

import "./index.css";

moment.locale(getLocale());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
