const { remote } = require('electron')
const axios = require("axios");
const Store = require('../scripts/store')
const store = new Store({
    configName: 'user-data'
});
const ques = store.get('question');
const cid = store.get('clientId');
const token = store.get('token');
const currentWin = remote.BrowserWindow.getFocusedWindow();

axios.defaults.headers.common['x-auth']= token;
const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');
let answer = document.getElementById('answer'); 
submit.addEventListener('click', (event) => {
    answer = document.getElementById('answer');
    subAns(answer.value)
})
cancel.addEventListener('click', (event) => {
    currentWin.close();
})
answer.addEventListener('keypress', (event)=>{
    if(event.keyCode==13)
    {   
        answer = document.getElementById('answer');
        subAns(answer.value);
    }
})
const subAns = (answer) => {
    axios.post('https://learning-genie777.herokuapp.com/answer', {
            ans: answer,
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
} 