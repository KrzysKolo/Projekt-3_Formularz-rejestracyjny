const user = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector("#send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");
const tab = [user, pass, pass2, email];

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(sendBtn);
  tab.forEach((el) => {
    el.value = "";
  });
});

sendBtn.addEventListener("click", function () {
  console.log("jest ok");
});
