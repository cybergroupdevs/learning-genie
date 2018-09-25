const electron  = require('electron');
const path = require('path');
const axios = require('axios')
const $ = require('jquery')
const Store = require('../scripts/store')
const store = new Store({
  configName: 'user-data',
  defaults: {
    token:''
  }
});
const io = require('socket.io-client');
const url='https://learning-genie777.herokuapp.com';
const BrowserWindow = electron.remote.BrowserWindow;
const socket = io(url, {
  'reconnection': true,
  'reconnectionDelay': 500,
  'reconnectionAttempts': 1000
});
const { remote } = require('electron')
const msgs = document.getElementById('msg-bubble');
const msgtxt = document.getElementById('msg');
const opt = document.getElementById('options')
const snooze = document.getElementById('snz');
const answer = document.getElementById('ans');
const currentWin = remote.BrowserWindow.getFocusedWindow(); 
let ques;
let token;
let newNotification = '';

// socket.on('error', function() {
//   // wait 5 seconds then try again
//   if (!socket.socket.connected) {
//     setTimeout(() => {
//     socket.connect(url);
//     }, 3000)
//   }
// });
socket.on('connect', () => {
  console.log("connected to server")
  currentWin.hide();
  if (!store.get('token')) {
    console.log('no token found')
    let win = new BrowserWindow({ width: 800, height: 500, autoHideMenuBar: true, alwaysOnTop: true })
    win.on('close', function () {
      axios.get(url+'/getuser').then((data) => {
        token = JSON.stringify(data.data.token);
        store.set('token', JSON.stringify(token))
      }).catch((e) => {
        alert(e.message)
        win.close();
      })
      win = null
    })
    win.loadURL(url+'/login')
    win.show()
  }
  else { 
  token = store.get('token');
  socket.emit('joinroom',{'token':token});  
  }
})
socket.on('clientId',(cid)=>{
  store.set('clientId',cid.clientId);
})
socket.on('newQuestion', (res) => {
  currentWin.show();
  console.log('Got a new question')
  msgs.hidden = false;
  msgtxt.innerHTML = "got a new msg";
  setTimeout(() => {
    ques = res;
    store.set('question',res);
    msgtxt.innerHTML = res.ques;
    opt.hidden = false;
  }, 3000)
  notification = {
    title: "Learning Genie",
    body: res.ques
  }
  newNotification = new Notification(notification.title,notification);
  newNotification.show();
})
socket.on("submitted",()=>{
  msgs.hidden = true;
  currentWin.hide();
})

snooze.addEventListener('click', (event) => {
  var pos = currentWin.getPosition();
  if ((pos[0] < screen.width - 600) && (pos[1] < screen.height - 325)) {
    pos[0] = screen.width - 600;
    pos[1] = 0;
  }
  else if ((pos[0] >= screen.width - 600) && (pos[1] < screen.height - 325)) {
    pos[0] = screen.width - 600;
    pos[1] = screen.height - 325;
  }
  else if ((pos[0] >= screen.width - 600) && (pos[1] >= screen.height - 325)) {
    pos[0] = 0;
    pos[1] = screen.height - 325;
  }
  else if ((pos[0] < screen.width - 600) && (pos[1] >= screen.height - 325)) {
    pos[0] = 0;
    pos[1] = 0;
  }
  console.log("snz btn clicked")
  currentWin.hide();
  setTimeout(() => {
    currentWin.setPosition(pos[0], pos[1])
    currentWin.show();
  }, 300000)
})
answer.addEventListener('click', (event) => {
  const modalPath = path.join(__dirname, '../views/answer.html')
  let win = new BrowserWindow({ width: 500, height: 500, alwaysOnTop: true })
  win.on('close', function () { win = null })
  win.loadURL(`file://` + modalPath)
  win.show();
});

$(":button").mouseenter( function() {
    currentWin.setIgnoreMouseEvents(false)
  })
$(":button").mouseleave( function() {
    currentWin.setIgnoreMouseEvents(true, {forward: true})
  })

newNotification.click =() => {
  currentWin.show();
  currentWin.focus();
};
