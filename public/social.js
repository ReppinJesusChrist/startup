(() => {
  securityCheck();
})();

async function securityCheck(){
  const userEmail = localStorage.getItem('userEmail');
  const response = await fetch(`/api/user/${userEmail}`);
  if(response.status === 200) {
    return response.json();
  } else {
    alert('You\'re not allowed to be here! Please log-in and come back');
    window.location.href = '/login.html';
  } 
}