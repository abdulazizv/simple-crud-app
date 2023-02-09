"use strict";

let exit = document.querySelector('#exit');


//logout

exit.addEventListener('click',() => {
  localStorage.clear()
});

(function logout() {
  let token = localStorage.getItem('token');
  if (!token) {
    window.location.replace('./login.html');
  }
})()
