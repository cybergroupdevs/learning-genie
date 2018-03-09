const electron = require('electron')
const axios = require('axios')
const path = require('path')
const url = require('url')
// Module to control application life.

const app = electron.app

// Module to create native browser window.

const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    frame: false,
    width: 300,
    transparent: true,
    height: 325,
    alwaysOnTop: true,
    toolbar: false,
    titleBarStyle: 'hidden',
    resizable: false,
    fullscreen: false,
    fullscreenable: false,
    simpleFullscreen: false,
    skipTaskbar: true,
    title: '',
    x:0,
    y:0
  });
 
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
