const bigContainer = document.createElement("div");
bigContainer.setAttribute("class", "projectPopUp");
bigContainer.style.width = "100%";
bigContainer.style.height = "1851px";

const myFirstProjectBtn = document.querySelector(".my-first-project-button");
const mySecondProjectBtn = document.querySelector(".my-second-project-button");

const projectName = document.querySelector(".project-name");

const progLang = document.querySelector(".stack-list");
const progLangList1 = document.querySelector(".list-1");
const progLangList2 = document.querySelector(".list-2");
const progLangList3 = document.querySelector(".list-3");

const bigImg = document.querySelector(".project-overlay");

const loremIpsum = document.createElement("p");
loremIpsum.setAttribute("class", "lorem-ipsum");
loremIpsum.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.";

const liveButton = document.createElement("button");
liveButton.setAttribute("type", "button", "class", "live-project");
liveButton.innerHTML = "See live";

const sourceButton = document.createElement("button");
sourceButton.setAttribute("type", "button", "class", "source-project");

const addLiveLink = document.querySelector(".ic-link");
const addGithubLink = document.querySelector(".ic-github");

const previousButton = document.createElement("button");
previousButton.setAttribute("type", "button", "class", "previous");

const nextButton = document.createElement("button");
nextButton.setAttribute("type", "button", "class", "next");

const leftArrow = document.createElement("img");
leftArrow.setAttribute("src", "assets/Mobile-dynamic/ic_arrow_left.svg");

const rightArrow = document.createElement("img");
rightArrow.setAttribute("src", "assets/Mobile-dynamic/ic_arrow_right.svg");

previousButton.append(leftArrow);
nextButton.append(rightArrow);
