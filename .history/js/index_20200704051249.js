const user = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");
console.log(sendBtn);
sendBtn.addEventListener("click", () => {
  console.log("shgdhsgds");
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  [user, pass, pass2, email].forEach((el) => {
    el.value = "";
  });
});
