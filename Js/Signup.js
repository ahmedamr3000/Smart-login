var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");

var emailList = [];

if (localStorage.getItem("acounts") != null) {
  emailList = JSON.parse(localStorage.getItem("acounts"));
}

function signUp() {
  if (rejexAll() && emailExist()) {
    var account = {
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    };
    emailList.push(account);
    localStorage.setItem("acounts", JSON.stringify(emailList));

    document.getElementById("sucss").classList.remove("d-none");
    document.getElementById("exist").classList.add("d-none");
  }
}

function rejexName() {
  var text = signupName.value;
  var rejex = /^[A-Z][a-z]{3,8}$/;

  if (rejex.test(text)) {
    signupName.classList.add("is-valid");
    signupName.classList.remove("is-invalid");
    document.getElementById("NameHint").classList.add("d-none");
    return true;
  } else {
    signupName.classList.add("is-invalid");
    signupName.classList.remove("is-valid");
    document.getElementById("NameHint").classList.remove("d-none");
    return false;
  }
}

function rejexEmail() {
  var text = signupEmail.value;
  var rejex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (rejex.test(text)) {
    signupEmail.classList.add("is-valid");
    signupEmail.classList.remove("is-invalid");
    document.getElementById("EmailHint").classList.add("d-none");
    return true;
  } else {
    signupEmail.classList.add("is-invalid");
    signupEmail.classList.remove("is-valid");
    document.getElementById("EmailHint").classList.remove("d-none");
    return false;
  }
}

function rejexPassword() {
  var text = signupPassword.value;
  var rejex = /^(?=.*[0-9])(?=.*[a-z]).{5,16}$/;

  if (rejex.test(text)) {
    signupPassword.classList.add("is-valid");
    signupPassword.classList.remove("is-invalid");
    document.getElementById("PasswordHint").classList.add("d-none");
    return true;
  } else {
    signupPassword.classList.add("is-invalid");
    signupPassword.classList.remove("is-valid");
    document.getElementById("PasswordHint").classList.remove("d-none");
    return false;
  }
}

function rejexAll() {
  if (rejexName() && rejexEmail() && rejexPassword()) {
    console.log();
    return true;
  }
}

function emailExist() {
  for (var i = 0; i < emailList.length; i++) {
    if (emailList[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
      document.getElementById("exist").classList.remove("d-none");
      document.getElementById("sucss").classList.add("d-none");

      return false;
    }
  }
  return true;
}

document.getElementById("Signin").addEventListener("click", function () {
  window.location = "./index.html";
});
