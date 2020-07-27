const user = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");
  console.log(formBox);
  console.log(errorMsg);
  /* formBox.classList.add(".error");
  errorMsg.textContent = msg; */
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      console.log("dupa");
    }
  });
};
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm([user, pass, pass2, email]);
});
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  [user, pass, pass2, email].forEach((el) => {
    el.value = "";
  });
});
