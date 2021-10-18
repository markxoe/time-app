const electron = require("electron");
const { contextBridge, ipcRenderer } = electron;

electron.contextBridge.exposeInMainWorld("ipc", {
  getLocale: () => ipcRenderer.sendSync("getLocale"),
  closeWindow: () => ipcRenderer.send("closeWindow"),
  darkModeToggle: () => ipcRenderer.send("darkModeToggle"),
  darkModeReset: () => ipcRenderer.send("darkModeReset"),
  minimizeWindow: () => ipcRenderer.send("minimizeWindow"),
});
