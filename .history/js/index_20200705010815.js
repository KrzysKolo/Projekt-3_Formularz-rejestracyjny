class Register {
  constructor() {
    this.user = null;
    this.pass = null;
    this.repeatpass = null;
    this.email = null;

    this.UiSelectors = {
      user: "#username",
      pass: "#password",
      repeatpass: "#password2",
      email: "#email",
      send: ".send",
      clear: ".clear",
      popup: ".popup",
    };
  }
  initializeRegister() {
    this.username = document.querySelector(this.UiSelectors.user);
    this.password = document.querySelector(this.UiSelectors.pass);
    this.passwordRepeat = document.querySelector(this.UiSelectors.repeatpass);
    this.emails = document.querySelector(this.UiSelectors.email);
    this.btnSend = document.querySelector(this.UiSelectors.send);
    this.btnClear = document.querySelector(this.UiSelectors.clear);
    this.tabFormElements = [
      this.username,
      this.password,
      this.passwordRepeat,
      this.emails,
    ];
    this.addEventListeners();
  }

  //
  checkMail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
      clearError(email);
    } else {
      showError(email, "E-mail jest niepoprawny");
    }
  }
  //checkPassword - sprawdzamy czy hasła do siebie pasują
  checkPasswod(pass1, pass2) {
    if (pass1.value !== pass2.value) {
      this.showError(pass2, "Hasła do siebie nie pasują");
    }
  }
  //checkLength - ustawiamy odpowiednią długość dla poszczególnych elementów formularza
  checkLength(input, min) {
    if (input.value.length < min) {
      this.showError(
        input,
        `${input.previousElementSibling.innerText.slice(
          0,
          -1
        )} składa się z min. ${min} znaków`
      );
    }
  }
  //showError - wyświetla info o błędzie, funkcja dodaje klasę  oraz przeosi tekst z placeholder jako info o błędzie
  showError(input, msg) {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector(".error-text");
    formBox.classList.add("error");
    errorMsg.textContent = msg;
  }
  //clearError - usuwa info o błędach
  clearError(input) {
    const formBox = input.parentElement;
    formBox.classList.remove("error");
  }
  // chceckForm
  checkForm(input) {
    input.forEach((el) => {
      if (el.value === "") {
        this.showError(el, el.placeholder);
      } else {
        this.clearError(el);
      }
    });
  }

  addEventListeners() {
    this.btnClear.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("czyścimy");
      e.value = "";
    });

    this.btnSend.addEventListener("click", (e) => {
      e.preventDefault();
      this.checkForm(this.tabFormElements);
      this.checkLength(this.username, 3);
      this.checkLength(this.password, 8);
      this.checkPasswod(this.password, this.passwordRepeat);
      this.chceckErrors();
    });
  }
}

/*
const popup = document.querySelector(".popup");





clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  tab.forEach((el) => {
    el.value = "";
    clearError(el);
  });
});
const checkMail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "E-mail jest niepoprawny");
  }
};
const chceckErrors = () => {
  const allInputs = document.querySelectorAll(".form-box");
  let errorCount = 0;
  allInputs.forEach((el) => {
    if (el.classList.contains("error")) {
      errorCount++;
    }
  });
  if (errorCount === 0) {
    popup.classList.add("show-popup");
  }
};
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm(tab);
  checkLength(user, 3);
  checkLength(pass, 8);
  checkPasswod(pass, pass2);
  chceckErrors();
});
 */
