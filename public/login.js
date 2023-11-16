async function loginOrCreate(event) {
  event.preventDefault();

  const usernameEl  = document.querySelector("#username");
  const passwordEl  = document.querySelector("#password");
  const registerEl  = document.querySelector("#register");
  const requestBody = { email: usernameEl.value, password: passwordEl.value };
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
  //alert(JSON.stringify(data));
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
  //alert(JSON.stringify(data));
}