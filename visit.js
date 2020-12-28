const form = document.querySelector(".js_form"),
input = form.querySelector("input"),
visiting = document.querySelector(".js_visiting");

const User_ls = "currentUser",
Showing_cn = "showing";

function saveName(text){
  localStorage.setItem(User_ls, text);
};

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
};

function askForName(){
  form.classList.add(Showing_cn);
  form.addEventListener("submit", handleSubmit);
  
}

function paintGreeting(text){
  form.classList.remove(Showing_cn);
  visiting.classList.add(Showing_cn);
  visiting.innerText = `Hello ${text}`;
};

function loadName(){
  const currentUser = localStorage.getItem(User_ls);
  if(currentUser === null ){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
};
init();