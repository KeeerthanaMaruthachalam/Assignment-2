var config = {
  apiKey: "AIzaSyAbf34UvEU_A-ocwnGSlOdvwapjmjMNR5k",
  authDomain: "first-blog-d485b.firebaseapp.com",
  databaseURL: "https://first-blog-d485b.firebaseio.com",
  projectId: "first-blog-d485b",
  storageBucket: "first-blog-d485b.appspot.com",
  messagingSenderId: "851815099494"
};
firebase.initializeApp(config);

var user1 = firebase.auth().currentUser;
var user = getInputVal('username');
var res = user.split("@");
console.log(res[0]);
sessionStorage.setItem("user", res[0]);
let get = sessionStorage.getItem("user");

var loginRef = firebase.database().ref('logindb');

// Listen for form submit
var el = document.getElementById('loginForm');
if (el) {
  el.addEventListener('submit', submitForm, false);
}
//document.getElementById('loginForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  console.log(preventDefault());
  // Get values
  var username1 = getInputVal('username');
  var password1 = getInputVal('password');

  // Save message
  saveMessage(username1, password1);
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
// var newLoginRef;
// Save message to firebase
function saveMessage(username1, password1) {
  var newLoginRef = loginRef.push();
  newLoginRef.set({
    username1: username1,
    password1: password1
  });
}
