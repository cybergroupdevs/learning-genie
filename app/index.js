const electron = require('electron')
const axios = require('axios')
const path = require('path')
const fs = require('fs')
const url = require('url')
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
    width: 500,
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
    title: null,
    x: 0,
    y: 0
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.on('close', (e) => {
      /* the user only tried to close the window */
      e.preventDefault();
  });
  win.on('minimize',(e)=>{
    e.preventDefault();
    win.hide();
    setTimeout(() => {
      win.show();
    }, 3000);
  });
  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', (e) => {
  e.preventDefault();
  app.relaunch();
})
app.on('quit',(e)=>{
  e.preventDefault();
  app.relaunch();
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})