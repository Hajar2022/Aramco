alert("hi");


function checkpass(){
  var yourname= $("#username").val();
var password = $("#pass").val();
var confirmPassword = $("#confirm_password").val();

// $("#signin").click(function(){
 if (password != confirmPassword) {
    alert("Passwords does not match");
return false;
}
if  (password === ""  || confirmPassword === ""  || yourname === ""){
  alert("pleas fill the fields");
  return false;
}
else {
  alert("signup successfuly");
  window.location.href="./bravo.html";
  return false;

}

}


$(document).ready(function(){
    $("#signin").click(checkpass);
});
