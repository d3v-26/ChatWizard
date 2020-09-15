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
//}box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
var uname = "admin";
var pwd = "admin";
function loginUser(){
    var usname = $("#username1").val();
    var usrpwd = $("#password1").val();
    if(usname == uname && pwd == usrpwd)
    {
            window.location.href="home.html";
    }
    else{
        $("#formContent").effect("shake",{direction:"left",times: 4, distance: 20},300);
        $("#username1").val('').css("box-shadow","0 0px 6px 0 rgba(255,0,0,0.5)");
        $("#password1").val('').css("box-shadow","0 0px 6px 0 rgba(255,0,0,0.5)");
        setTimeout(function(){
            $("#username1").css("box-shadow","none");
            $("#password1").css("box-shadow","none");
        },3000);
    }
}

function createUser(){
    var usr = $("#username2");
    var pass = $("#password2");
    var rpass = $("#rpassword");
    var mail = $("#mail");
    var phone = $("#phone");
    var flag = 0;
    if(usr.val() == '' || mail.val() == '' || phone.val() == '' || pass.val() == '' || rpass.val() == '')
    {
        flag = 1;
    }
    if(pass.hasClass("flagged") || rpass.hasClass("flagged"))
    {
        flag = 1;   
    }
    if(flag==1)
    {
        $("#formContent").effect("shake",{direction:"left",times: 4, distance: 20},300);
        usr.val('').css("box-shadow","0 0px 6px 0 rgba(255,0,0,0.5)");
        pass.val('').css("box-shadow","0 0px 6px 0 rgba(255,0,0,0.5)");
        rpass.val('').css("box-shadow","0 0px 6px 0 rgba(255,0,0,0.5)");
        mail.val('').css("box-shadow","0 0px 6px 0 rgba(255,0,0,0.5)");
        phone.val('').css("box-shadow","0 0px 6px 0 rgba(255,0,0,0.5)");
        setTimeout(function(){
            usr.css("box-shadow","none");
            pass.css("box-shadow","none");
            rpass.css("box-shadow","none");
            mail.css("box-shadow","none");
            phone.css("box-shadow","none");
        },3000);
    }
    else
    {
        window.location.href = "login.html";
    }
}
