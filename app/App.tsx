import React, { useRef } from "react";
import { useTime } from "./hooks/useTime";
import moment from "moment";
import { getLang } from "./i18n";
import {
  closeWindow,
  darkModeReset,
  darkModeToggle,
  minimizeWindow,
} from "./connection/ipc";

import { IoClose, IoMoon, IoRemove } from "react-icons/io5/";

const App = () => {
  const time = useTime(500);

  return (
    <div className="container">
      <div className="center">
        <h1 className="h1">{moment(time).format("LL LTS")}</h1>

        <button
          className="light uppercase p1 btn-incognito clickable"
          onClick={() => closeWindow()}>
          <IoClose />
        </button>

        <span className="p1 lil-distance"></span>

        <button
          className="light uppercase p1 btn-incognito clickable"
          onClick={() => minimizeWindow()}>
          <IoRemove />
        </button>

        <span className="p1 lil-distance"></span>

        <abbr
          title={
            getLang()["Toggle dark mode, right click sets mode to system"]
          }>
          <button
            className="light uppercase p1 btn-incognito clickable"
            onClick={() => darkModeToggle()}
            onContextMenu={() => darkModeReset()}>
            <IoMoon />
          </button>
        </abbr>
      </div>
    </div>
  );
};
export default App;
