var attempt = 5; 

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
    // if ( username == "anjali" && password == "anjali123"){
    // if (username === !empty() && password === !empty()) {
    if(attempt==5){
  alert("Login successfully");
  window.location = "index.html";
  return false;
} else {
  attempt--;
  alert("You have left " + attempt + " attempt;");

  if (attempt == 0) {
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
  }
}
}