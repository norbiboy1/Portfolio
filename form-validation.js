const contactFormMobile = document.querySelector(".contact-form");
const contactFormDesktop = document.querySelector(".contact-form-desktop");
const emailMobile = document.querySelector("#email");
const emailDesktop = document.querySelector("#email-desktop");
const buttonMobile = document.querySelector(".btn-mobile");
const buttonDesktop = document.querySelector(".btn-desktop");
const emailError = document.querySelector("#email-desktop + span.error");
const error = email.nextElementSibling;

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

buttonDesktop.addEventListener("click", () => {
  const isValid =
    emailDesktop.value.length === 0 || emailRegExp.test(email.value);
  emailDesktop.className = isValid ? "valid" : "invalid";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid =
    emailDesktop.value.length === 0 || emailRegExp.test(emailDesktop.value);
  if (!isValid) {
    emailDesktop.className = "invalid";
    emailDesktop.style.textTransform = "lowercase";
    error.textContent = "The email address is not valid!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});
