function updatePage(){
  checkNavbarUnlock();
  checkDisplayUsername();
} 

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

function checkNavbarUnlock() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if(isLoggedIn){
    const elem = document.querySelector("#security-navmenu");
    if(elem){
      elem.innerHTML =  '<li class="nav-item"> <a class="nav-link" href="index.html">Home</a></li>' +
                        '<li class="nav-item"> <a class="nav-link" href="login.html">Login</a> </li>' +
                        '<li class="nav-item"> <a class="nav-link" href="goals.html">Goals</a></li>' +
                        '<li class="nav-item"> <a class="nav-link" href="accountability.html">Accountability</a> </li>' +
                        '<li class="nav-item"> <a class="nav-link" href="social.html">Social</a></li>';
    }
  }
}

function checkDisplayUsername() {
  const displayName = localStorage.getItem("username");
  if(displayName){
    const headerEl = document.querySelector(".navbar-brand");
    headerEl.innerHTML = '<strong>Covenant Companion</strong> - Currently Logged-in as: ' + displayName;
  }
}