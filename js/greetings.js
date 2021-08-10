const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const clockM = document.querySelector("#clock");
const todoFormM = document.querySelector("#todo-form");
const quoteM = document.querySelector("#quote");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);  
}

function paintGreetings(username){
   greeting.innerText = `Today is ${username}'s day!`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
   clockM.classList.remove(HIDDEN_CLASSNAME);
   todoFormM.classList.remove(HIDDEN_CLASSNAME);
   quoteM.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}