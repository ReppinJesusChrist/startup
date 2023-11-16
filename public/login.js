(async () => {
  const userEmail = localStorage.getItem('userEmail');
  if (userEmail) {
    setDisplay('NotLoggedIn', 'none');
    setDisplay('LoggedIn', 'block');
  } else {
    setDisplay('NotLoggedIn', 'block');
    setDisplay('LoggedIn', 'none');
  }
})();

async function loginOrCreate(event) {
  event.preventDefault();

  const userEmailEl  = document.querySelector("#userEmail");
  const userPasswordEl  = document.querySelector("#userPassword");
  const registerEl  = document.querySelector("#register");
  const requestBody = { email: userEmailEl.value, password: userPasswordEl.value };
  if(registerEl.checked){
    await Register(requestBody);
  } else {
    await Login(requestBody);
  }
}

async function TestFunction(){
  alert("Test Function called");
}

async function Login(body){
  const response = await fetch('/api/auth/login', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  if(response.ok){
    localStorage.setItem('userEmail',  body.email);
    localStorage.setItem('isLoggedIn', true);
  } else {
    alert('Login failed. Error Message: ' + JSON.stringify(data.msg));
  }
  window.location.reload();
}

async function Register(body){
  const response = await fetch('/api/auth/create', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  if(response.ok){
    localStorage.setItem('userEmail',  body.email);
    localStorage.setItem('isLoggedIn', true);
  } else {
    alert('Registration failed. Error Message: ' + JSON.stringify(data.msg));
  }
}

function logout() {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('isLoggedIn');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.reload()));
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}