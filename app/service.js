const electron = require('electron');
const path = require('path');
const $ = require('jquery')
const BrowserWindow = electron.remote.BrowserWindow;
const socket = io('http://localhost:2018');
const { remote } = require('electron')

const msgs = document.getElementById('msg-bubble');
const msgtxt = document.getElementById('msg')
const opt = document.getElementById('options')
const snooze = document.getElementById('snz');
const answer = document.getElementById('ans');
const currentWin=remote.BrowserWindow.getFocusedWindow();
let ques;
socket.on('newQuestion', (res) => {
  msgs.hidden = false;
  msgtxt.innerHTML = "got a new msg";
  setTimeout(() => {
    ques = res.ques;
    msgtxt.innerHTML = res.ques;
    opt.hidden = false;
  }, 3000)
})

snooze.addEventListener('click', (event) => {
  var pos=currentWin.getPosition();
  if((pos[0]<screen.width-600) || (pos[1]<screen.height-600)){
    pos[0]=screen.width-600;
    pos[1]=0;
  }
  else if((pos[0]>=screen.width-600) || (pos[1]<screen.height-600)){
    pos[0]=screen.width-600;
    pos[1]=screen.height-600;
  }
  else if((pos[0]>=screen.width-600) || (pos[1]>=screen.height-600)){
    pos[0]=0;
    pos[1]=screen.height-600;
  }
  else if((pos[0]<screen.width-600) || (pos[1]>=screen.height-600)){
    pos[0]=screen.width-600;
    pos[1]=0;
  }
  console.log("snz btn clicked")
  currentWin.hide();
  setTimeout(() => {
    currentWin.setPosition(pos[0],pos[1])
    currentWin.show();
  }, 3000)

})
answer.addEventListener('click', (event) => {
  console.log("ans btn clicked");
  const modalPath = path.join(__dirname, 'answer.html')
  let win = new BrowserWindow({ width: 400, height: 200,frame:false,alwaysOnTop:true })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
});
