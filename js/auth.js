//    var token;
//    var username = "admin";
//    var password = "admin";
//    var url = window.location.href;
//    var request = new XMLHttpRequest(); 
//
//    function getToken(url, clientID, clientSecret) {
//    var key;           
//    request.open("POST", url, true); 
//    request.setRequestHeader("Content-type", "application/json");
//    request.send("grant_type=client_credentials&client_id="+clientID+"&"+"client_secret="+clientSecret);
//    request.onreadystatechange = function () {
//        if (request.readyState == request.DONE) {
//            var response = request.responseText;
//            var obj = JSON.parse(response); 
//            key = obj.access_token;
//            token = key;
//        }
//    }
//    }
//    getToken(url, username, password);
//function loginUser(){
//    var encpwd = "U2FsdGVkX18dLqnJ3YQmMlFiUa8IvWgaTxnpDX00Re0=";
//    var usname = document.getElementById("username1").value;
//    var usrpwd = document.getElementById("password1").value;
//    var es = document.getElementById("cfe").value;
//    var pwd = CryptoJS.AES.encrypt(usrpwd,es);
//    var encuspwd = pwd.toString();
//    console.log("password");
//    console.log(encuspwd);
//    console.log(encpwd);
//    if(encuspwd === encpwd)
//    {
//        window.location.href = "home.html";
//    }
//    else{
//        document.getElementById("msg").innerHTML="Invalid Username or password";
//        document.getElementById("msg").style.color="red";
//    }
//}
var uname = "admin";
var pwd = "admin";
function loginUser(){
    var usname = document.getElementById("username1").value;
    var usrpwd = document.getElementById("password1").value;
    if(usname == uname && pwd == usrpwd)
        {
            window.location.href="home.html";
        }
    else{
        alert("Incorrect username or password");
    }
}
