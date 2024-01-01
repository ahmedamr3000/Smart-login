var Email = document.getElementById("Email");
var password = document.getElementById("password");

var emailList = [];

if (localStorage.getItem("acounts") != null) {
  emailList = JSON.parse(localStorage.getItem("acounts"));
}

function login() {
  if (Email.value == "" || password.value == "") {
    document.getElementById("hint").classList.remove("d-none");

    document.getElementById("hint").innerHTML = "All inputs is required";
  }
}

document.getElementById("signup").addEventListener("click", function () {
  window.location = "./Signup.html";
});

function login() {
  for (var i = 0; i < emailList.length; i++) {
    if (
      emailList[i].email.toLowerCase() == Email.value.toLowerCase() &&
      emailList[i].password.toLowerCase() == password.value.toLowerCase()
    ) {
      document.getElementById("button").addEventListener("click", function () {
        window.location = "./Home.html";
        sessionStorage.setItem("session", JSON.stringify(emailList[i].name));
      });

      return false;
    }
  }
  document.getElementById("LoingHint").innerHTML = " invalid email or password";
  return true;
}
