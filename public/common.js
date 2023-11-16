(async () => {
  checkNavbarUnlock();
  checkDisplayUsername();
})();

function updateCommonPage(){
  checkNavbarUnlock();
  checkDisplayUsername();
}

function checkDisplayUsername() {
  const displayName = localStorage.getItem("userEmail");
  if(displayName){
    const headerEl = document.querySelector(".navbar-brand");
    headerEl.innerHTML = '<strong>Covenant Companion</strong> - Currently Logged-in as: ' + displayName;
  }
}

function checkNavbarUnlock() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if(isLoggedIn){
    const elem = document.querySelector("#security-navmenu");
    if(elem){
      elem.innerHTML =  '<li class="nav-item"> <a class="nav-link" href="index.html">Home</a></li>' +
                        '<li class="nav-item"><a class="nav-link" href="info.html">Info</a></li>' +
                        '<li class="nav-item"> <a class="nav-link" href="login.html">Login</a> </li>' +
                        '<li class="nav-item"> <a class="nav-link" href="goals.html">Goals</a></li>' +
                        '<li class="nav-item"> <a class="nav-link" href="accountability.html">Accountability</a> </li>' +
                        '<li class="nav-item"> <a class="nav-link" href="social.html">Social</a></li>';
    }
  }
}
