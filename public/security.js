async function securityCheck(){
  const userEmail = localStorage.getItem('userEmail');
  const response = await fetch(`/api/user/${userEmail}`);
  if(response.status === 200) {
    return response.json();
  } else {
    alert('You\'re not allowed to be here!');
    window.location.href = '/';
  } 
}

module.exports = { securityCheck }