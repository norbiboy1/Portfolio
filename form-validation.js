const emailEl = document.querySelector("#email-desktop");
const emailMobile = document.querySelector("#email");
const form = document.querySelector(".contact-form-desktop");
const formMobile = document.querySelector(".contact-form");
const submit = document.querySelector(".btn-desktop");
const submitMobile = document.querySelector(".btn-mobile");

const span = document.createElement("span");
span.setAttribute("id", "message");

span.style.width = "291px";
span.style.height = "105px";
span.style.color = "red";
span.style.position = "relative";
span.style.top = "15px";
span.style.left = "120px";

form.append(span);

const span2 = document.createElement("span");
span2.setAttribute("id", "message2");

span2.style.width = "291px";
span2.style.height = "105px";
span2.style.color = "red";
span2.style.position = "relative";
span2.style.top = "15px";
span2.style.left = "120px";

formMobile.append(span2);

const regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submit.addEventListener("click", (e) => {
  e.preventDefault;

  let messages = [];

  if (emailEl.value == emailEl.value.toUpperCase()) {
    messages = "Transform it to lowercase";
    span.innerHTML = messages;
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.emailEl.value)
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
});

submitMobile.addEventListener("click", (e) => {
  e.preventDefault;

  let messages2 = [];

  if (emailMobile.value == emailMobile.value.toUpperCase()) {
    messages2 = "Transform it to lowercase";
    span2.innerHTML = messages2;
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      formMobile.emailMobile.value
    )
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
});
