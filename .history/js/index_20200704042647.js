const user = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.value = "";
  pass.value = "";
  pass2.value = "";
});
