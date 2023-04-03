// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Bunny" && password == "bunny@123"){
alert ("Login successfully");
window.location = "welcome.html"; // Redirecting to other page.
return false;
}
else{
var x = document.getElementById("username").value;
  if (x == "") {
    alert("Username must not be empty!");
    return false;
  }
 var y = document.getElementById("password").value;
  if (y == "") {
    alert("Password must not be empty!");
    return false;
  }
}
}