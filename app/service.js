const electron = require('electron');
const path = require('path');
const axios = require('axios')
const $ = require('jquery')
const Store = require('./store')
const store = new Store({
  configName: 'user-data',
  defaults: {

  }
});
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
let token;
socket.on('connect',()=>{
  console.log("connected to server")
  if (!store.get('token')) {
    console.log('no token found')
    let win = new BrowserWindow({ width: 800, height: 500,autoHideMenuBar:true,alwaysOnTop:true })
    win.on('close', function () { 
      axios.get('http://localhost:2018/getuser').then((data)=>{
        alert(JSON.stringify(data.data.token))
        store.set('token',JSON.stringify(data.data.token))
        token= JSON.stringify(data.data.token);
      }).catch((e)=>{
        alert(e.message)
        currentWin.close();
      })
      win = null
     })
    win.loadURL('http://localhost:2018/login')
    win.show()
  }
  else { token=store.get.get('token')}
})
socket.on('newQuestion', (res) => {
  try{
  currentWin.setSize(500,325,true)
  }
  catch(e) {
    console.log(e)
  }
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
  if((pos[0]<screen.width-600) && (pos[1]<screen.height-325)){
    pos[0]=screen.width-600;
    pos[1]=0;
  }
  else if((pos[0]>=screen.width-600) && (pos[1]<screen.height-325)){
    pos[0]=screen.width-600;
    pos[1]=screen.height-325;
  }
  else if((pos[0]>=screen.width-600) && (pos[1]>=screen.height-325)){
    pos[0]=0;
    pos[1]=screen.height-325;
  }
  else if((pos[0]<screen.width-600) && (pos[1]>=screen.height-325)){
    pos[0]=0;
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
  let win = new BrowserWindow({ width: 200, height: 200,frame:false,alwaysOnTop:true })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
});
