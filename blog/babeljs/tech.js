var config = {
  apiKey: "AIzaSyAbf34UvEU_A-ocwnGSlOdvwapjmjMNR5k",
  authDomain: "first-blog-d485b.firebaseapp.com",
  databaseURL: "https://first-blog-d485b.firebaseio.com",
  projectId: "first-blog-d485b",
  storageBucket: "first-blog-d485b.appspot.com",
  messagingSenderId: "851815099494"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('techBlogdb');

var doc = "";
var i = 0;
messagesRef.on("value", function (snapshot) {
  // console.log(snapshot.val());
  snapshot.forEach(data => {
    var div = document.createElement("div");
    div.setAttribute('id', i);
    // document.body.appendChild(div);
    $("#tech").append(div);
    // console.log(div);
    var data1 = data.val();
    document.getElementById(i).innerHTML = data1.title + "<br>" + data1.authorName + "<br> " + data1.description + "<br>" + data1.upload;

    doc = doc + (data1.title + " " + data1.authorName + " " + data1.description);
    i++;
  });
  //  document.getElementById("tech").innerHTML=doc; 
});

$(document).ready($('#theme').click(function () {
  var value = $(this).html();
  if (value == 'Theme') {
    $('#tech > div').css(' margin', "10px", ' border', "solid black", 'line-height', "30px", 'font-size', "20px");
    $('div #tech > div:nth-of-type(odd)').css('background', "red");
    $('div #tech > div:nth-of-type(even)').css('background', "skyblue");
  }
}));
