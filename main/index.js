const electron = require("electron");
const path = require("path");

const { app, ipcMain, nativeTheme, BrowserWindow } = electron;

/** @type {undefined| electron.BrowserWindow} */
let mainWindow;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    frame: false,

    width: 480,
    height: 300,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "..", "app", "preload", "preload.js"),
    },
  });
  if (process.env.HOST) {
    mainWindow.loadURL(process.env.HOST);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, "..", "app", "dist", "index.html")
    );
  }
};

app.on("ready", () => {
  createMainWindow();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("getLocale", (event) => {
  event.returnValue = electron.app.getLocale();
});

ipcMain.on("closeWindow", () => {
  if (mainWindow) mainWindow.close();
});

ipcMain.on("darkModeToggle", () => {
  nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? "light" : "dark";
});

ipcMain.on("darkModeReset", () => {
  nativeTheme.themeSource = "system";
});

ipcMain.on("minimizeWindow", () => {
  if (mainWindow) mainWindow.minimize();
});
