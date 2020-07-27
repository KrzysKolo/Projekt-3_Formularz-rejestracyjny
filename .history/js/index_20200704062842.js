const user = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector("#send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");
const tab = [user, pass, pass2, email];

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");
  formBox.classList.add("error");

  errorMsg.textContent = msg;
};
const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};
const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(input, `coś składa się z min. ${min} znaków`);
  }
};

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  tab.forEach((el) => {
    el.value = "";
  });
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm(tab);
  checkLength(user, 3);
  checkLength(pass, 8);
});
