// Below function Executes on click of login button.
function validate(){
  var x = document.getElementById("fullname").value;
  if (x == "") {
    alert("Full name must not be empty!");
    return false;
  }
  var letters = /^[A-Za-z]+$/;
  if(!fullname.value.match(letters)){
    alert("Full Name must contain letters only!");
    return false;
  }
  var z = document.getElementById("username").value;
  if (z == "") {
    alert("Username must not be empty!");
    return false;
  }
  var alphanumeric = /^[0-9a-zA-Z]+$/;
  if(!username.value.match(alphanumeric)){
    alert("Username must contain letters and numbers only!");
    return false;
  }
  
  var y = document.getElementById("password").value;
  if (y == "") {
    alert("Password must not be empty!");
    return false;
  }

  var passcombo = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if(!password.value.match(passcombo)){
    alert("Username must contain at least 8 characters, one uppercaseletter, one lowercase letter, one number and one special character!");
    return false;
  }

alert ("Account successfully created!");
window.location = "login.html"; // Redirecting to other page.
return false;
}