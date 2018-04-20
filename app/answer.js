const { remote } = require('electron')
const axios = require("axios");
const Store = require('./store')
const store = new Store({
    configName: 'user-data'
});
const ques = store.get('question');
const cid = store.get('clientId');
const token = store.get('token');
const currentWin = remote.BrowserWindow.getFocusedWindow();

axios.defaults.headers.common['X-auth']= token;
const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');
submit.addEventListener('click', (event) => {
    let answer = document.getElementById('answer');
    axios.post('https://warm-savannah-20783.herokuapp.com/answer', {
        ans: answer.value,
        q_id: ques._id,
        clientId: cid
    }).then((res) => {
        if (res.status == 200) {
            alert("Your Response is Recorded :)");
            currentWin.close();
            store.set('question', null)
        }
        else {
            alert("Something Went Wrong :(")
        }
    })
})
cancel.addEventListener('click', (event) => {
    currentWin.close();
})