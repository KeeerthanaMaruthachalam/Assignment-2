var config = {
    apiKey: "AIzaSyAbf34UvEU_A-ocwnGSlOdvwapjmjMNR5k",
    authDomain: "first-blog-d485b.firebaseapp.com",
    databaseURL: "https://first-blog-d485b.firebaseio.com",
    projectId: "first-blog-d485b",
    storageBucket: "first-blog-d485b.appspot.com",
    messagingSenderId: "851815099494"
  };
  firebase.initializeApp(config);

  var a = document.createElement("a");
  a.setAttribute(sessionStorage.setItem("user",sessionStorage.getItem("user")),sessionStorage.getItem("user"));
 // document.body.append(sessionStorage.getItem("user"));
  console.log(sessionStorage.getItem("user"));
  if(sessionStorage.getItem("user") != "null"){
    $("#demo").append(sessionStorage.getItem("user"));
   // window.location.href="main.html";
  }
  else
  {
    $("#demo").append(" ");
    window.location.href="index.html";
  }
  
  var myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  