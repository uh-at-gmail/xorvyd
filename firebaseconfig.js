

const firebaseConfig = {

    apiKey: "AIzaSyAwQuJE9jX8R6iCoMa7Oy9PbNbUEZ2Kf10",

    authDomain: "html-9cb82.firebaseapp.com",

    projectId: "html-9cb82",

    storageBucket: "html-9cb82.firebasestorage.app",

    messagingSenderId: "826450372161",

    appId: "1:826450372161:web:dc8e1d65752bbd28c908c0"

};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
import { getDatabase, ref, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/11.0.2/firebase-db.js";
const db = getDatabase();

//REFERENCE
var fname = document.getElementById("ccfname");
var lname = document.getElementById("cclname");
var ccnum = document.getElementById("ccnum");
var ccdate = document.getElementById("ccdate");
var ccccv = document.getElementById("ccccv");
var submit = document.getElementById("ccsubmit");

//INSERT DATA
function InsertData() {
    set(ref(db, "CreditCardInfo/" + ccsubmit.value), {
        Name: ccfname.value + cclname.value,
        CCNum: ccnum.value,
        CCDate: ccdate.value,
        CCCCV: ccccv.value
    })
        .then(() => {
            alert("Input successful");
        })
        .catch((error) => {
            alert("Missing input(s)");
        });

    //Events assigned to button
    ccsubmit.addEventListener('click', InsertData);
