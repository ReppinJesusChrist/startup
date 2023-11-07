function login() {
  const usernameEl  = document.querySelector("#username");
  const passwordEl  = document.querySelector("#password");
  const registerEl  = document.querySelector("#register");


  localStorage.setItem("username",  usernameEl.value);
  localStorage.setItem("password", passwordEl.value);
  localStorage.setItem("register", registerEl.checked);
  sessionStorage.setItem("isLoggedIn", true);

  window.location.href = "goals.html";
}