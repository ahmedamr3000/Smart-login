document.getElementById("logout").addEventListener("click", function () {
  window.location = "./index.html";
});
var userName = "";

userName = JSON.parse(sessionStorage.getItem("session"));

document.getElementById("username").innerHTML = `Welcome  ${userName}`;
