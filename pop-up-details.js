const div = document.createElement("div");
div.setAttribute("class", "detailsWindow");
div.style.width = "100%";
div.style.height = "978px";

document.body.append(div);

const menuItem1 = document.createElement("span");
menuItem1.setAttribute("class", "bars_1");
const menuItem3 = document.createElement("span");
menuItem3.setAttribute("class", "bars_3");

const title = document.querySelector(".title");

const technologies = document.querySelector(".stacks");
const stacks1 = document.querySelector(".stacks-1");
const stacks2 = document.querySelector(".stacks-2");
const stacks3 = document.querySelector(".stacks-3");

const bgImageProj = document.createElement("img");
bgImageProj.setAttribute("class", "bg-image-proj");

const bgImageProj2 = document.createElement("img");
bgImageProj2.setAttribute("class", "bg-image-proj-2");

const bgImageProj3 = document.createElement("img");
bgImageProj3.setAttribute("class", "bg-image-proj-3");

const bgImageProj4 = document.createElement("img");
bgImageProj4.setAttribute("class", "bg-image-proj-4");

const bgImageProj5 = document.createElement("img");
bgImageProj5.setAttribute("class", "bg-image-proj-5");

const bgImageProj6 = document.createElement("img");
bgImageProj6.setAttribute("class", "bg-image-proj-6");

const p = document.createElement("p");
p.setAttribute("class", "descr");

const btnLive = document.createElement("button");
btnLive.setAttribute("type", "button", "class", "see-live");

const btnSource = document.createElement("button");
btnSource.setAttribute("type", "button", "class", "see-source");

const resumeLink = document.createElement("img");
resumeLink.setAttribute("class", "ic-link");
resumeLink.setAttribute("src", "assets/Mobile-dynamic/ic_link.png");

const gitHubLink = document.createElement("img");
gitHubLink.setAttribute("class", "ic-github");
gitHubLink.setAttribute("src", "assets/Mobile-dynamic/ic_github_white.svg");

const projects = [
  {
    name: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    img: [
      "assets/Proj1.png",
      "assets/Proj2.png",
      "assets/Proj3.png",
      "assets/Proj4.png",
      "assets/Proj5.png",
      "assets/Proj6.png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    btnLive: ["See live", "https://norbiboy1.github.io/portfolio.github.io/"],
    btnSource: ["See source", "https://github.com/norbiboy1/Portfolio"],
  },
];

title.innerHTML = projects[0].name;

stacks1.innerHTML = projects[0].technologies[0];
stacks2.innerHTML = projects[0].technologies[1];
stacks3.innerHTML = projects[0].technologies[2];

const array = [
  projects[0].img[0],
  projects[0].img[1],
  projects[0].img[2],
  projects[0].img[3],
  projects[0].img[4],
  projects[0].img[5],
];

bgImageProj.setAttribute("src", array[0]);
bgImageProj2.setAttribute("src", array[1]);
bgImageProj3.setAttribute("src", array[2]);
bgImageProj4.setAttribute("src", array[3]);
bgImageProj5.setAttribute("src", array[4]);
bgImageProj6.setAttribute("src", array[5]);

p.innerHTML = projects[0].description;
btnLive.innerHTML = projects[0].btnLive[0];
btnSource.innerHTML = projects[0].btnSource[0];

btnLive.append(resumeLink);
btnSource.append(gitHubLink);

const workBtn1 = document.querySelector(".proj-btn-1");
const workBtn2 = document.querySelector(".proj-btn-2");
const workBtn3 = document.querySelector(".proj-btn-3");
const workBtn4 = document.querySelector(".proj-btn-4");
const workBtn5 = document.querySelector(".proj-btn-5");
const workBtn6 = document.querySelector(".proj-btn-6");

const navigationMenu = document.querySelector(".mobile-version");
const aboutMe = document.querySelector(".hello");
const bgimg = document.querySelector(".img-background");
const workProjects = document.querySelector(".work");
const aboutTechnology = document.querySelector(".about");
const contactForm = document.querySelector(".contact");
const footerSection = document.querySelector(".links");

function styleDynamically() {
  div.append(
    menuItem1,
    menuItem3,
    title,
    technologies,
    bgImageProj,
    bgImageProj2,
    bgImageProj3,
    bgImageProj4,
    bgImageProj5,
    bgImageProj6,
    p,
    btnLive,
    btnSource
  );

  console.log(div);

  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";

  menuItem1.style.position = "relative";
  menuItem1.style.rotate = "45deg";
  menuItem1.style.width = "20px";
  menuItem1.style.height = "2px";
  menuItem1.style.backgroundColor = "#000";
  menuItem1.style.display = "block";
  menuItem1.style.top = "19px";
  menuItem1.style.left = "140px";
  menuItem1.style.listStyleType = "none";

  menuItem3.style.position = "relative";
  menuItem3.style.rotate = "135deg";
  menuItem3.style.width = "20px";
  menuItem3.style.height = "2px";
  menuItem3.style.backgroundColor = "#000";
  menuItem3.style.display = "block";
  menuItem3.style.top = "20px";
  menuItem3.style.left = "140px";
  menuItem3.style.listStyleType = "none";

  title.style.width = "264px";
  title.style.height = "16px";
  title.style.display = "flex";
  title.style.justifyContent = "center";
  title.style.marginTop = "57px";
  title.style.marginBottom = "0px";
  title.style.fontFamily = "Poppins";
  title.style.fontStyle = "normal";
  title.style.fontWeight = "bolder";
  title.style.fontSize = "20px";
  title.style.color = "#1A2236";

  technologies.style.listStyleType = "none";
  technologies.style.width = "230px";
  technologies.style.height = "20px";
  technologies.style.marginTop = "23px";
  technologies.style.display = "flex";
  technologies.style.flexDirection = "row";
  technologies.style.justifyContent = "center";
  technologies.style.paddingLeft = "0px";
  technologies.style.fontFamily = "Poppins";
  technologies.style.fontStyle = "normal";
  technologies.style.fontWeight = "300";
  technologies.style.fontSize = "10.3334px";
  technologies.style.color = "#1A2236";

  stacks1.style.width = "69px";
  stacks1.style.marginRight = "10px";
  stacks1.style.textAlign = "center";
  stacks1.style.background = "#FFFFFF";
  stacks1.style.borderWidth = "0.516669px";
  stacks1.style.borderStyle = "solid";
  stacks1.style.borderColor = "#1A2236";

  stacks2.style.width = "87px";
  stacks2.style.marginRight = "10px";
  stacks2.style.textAlign = "center";
  stacks2.style.background = "#FFFFFF";
  stacks2.style.borderWidth = "0.516669px";
  stacks2.style.borderStyle = "solid";
  stacks2.style.borderColor = "#1A2236";

  stacks3.style.width = "74px";
  stacks3.style.textAlign = "center";
  stacks3.style.background = "#FFFFFF";
  stacks3.style.borderWidth = "0.516669px";
  stacks3.style.borderStyle = "solid";
  stacks3.style.borderColor = "#1A2236";

  p.style.width = "291px";
  p.style.height = "432px";
  p.style.marginTop = "29.3px";
  p.style.marginLeft = "11px";
  p.style.display = "flex";
  p.style.flexDirection = "column";
  p.style.alignItems = "center";
  p.style.fontFamily = "Poppins";
  p.style.fontStyle = "normal";
  p.style.fontWeight = "400";
  p.style.fontSize = "18px";
  p.style.color = "#1A2236";

  btnLive.style.width = "246px";
  btnLive.style.height = "51px";
  btnLive.style.borderWidth = "1px";
  btnLive.style.borderStyle = "solid";
  btnLive.style.borderColor = "#1A2236";
  btnLive.style.fontFamily = "Poppins";
  btnLive.style.fontStyle = "normal";
  btnLive.style.fontWeight = "500;";
  btnLive.style.fontSize = "18px";
  btnLive.style.textAlign = "center";
  btnLive.style.color = "#1A2236";
  btnLive.style.marginTop = "29px";
  btnLive.style.paddingLeft = "82px";
  btnLive.style.backgroundColor = "#FFFFFF";

  btnSource.style.width = "246px";
  btnSource.style.height = "51px";
  btnSource.style.borderWidth = "1px";
  btnSource.style.borderStyle = "solid";
  btnSource.style.borderColor = "#1A2236";
  btnSource.style.fontFamily = "Poppins";
  btnSource.style.fontStyle = "normal";
  btnSource.style.fontWeight = "500";
  btnSource.style.fontSize = "18px";
  btnSource.style.textAlign = "center";
  btnSource.style.color = "#1A2236";
  btnSource.style.marginTop = "29px";
  btnSource.style.paddingLeft = "66px";
  btnSource.style.backgroundColor = "#FFFFFF";

  resumeLink.style.color = "#1A2236";
  gitHubLink.style.color = "#1A2236";
}

function displayNoneToElements() {
  navigationMenu.style.display = "none";
  aboutMe.style.display = "none";
  bgimg.style.display = "none";
  workProjects.style.display = "none";
  aboutTechnology.style.display = "none";
  contactForm.style.display = "none";
  footerSection.style.display = "none";
}

function clickOnTheLinks() {
  resumeLink.addEventListener("click", () => {
    window.open(projects[0].btnLive[1], "_blank").focus();
  });

  gitHubLink.addEventListener("click", () => {
    window.open(projects[0].btnSource[1], "_blank").focus();
  });
}

workBtn1.addEventListener("click", () => {
  displayNoneToElements();
  styleDynamically();

  bgImageProj.style.display = "block";
  bgImageProj.style.width = "278.75px";
  bgImageProj.style.height = "202.7px";
  bgImageProj.style.marginLeft = "20.25px";
  bgImageProj.style.marginTop = "18px";
  bgImageProj.style.borderWidth = "1px";
  bgImageProj.style.borderStyle = "solid";
  bgImageProj.style.borderColor = "rgba(255,255,255,0.1)";

  bgImageProj2.style.display = "none";
  bgImageProj3.style.display = "none";
  bgImageProj4.style.display = "none";
  bgImageProj5.style.display = "none";
  bgImageProj6.style.display = "none";

  clickOnTheLinks();

  menuItem1.addEventListener("click", () => {
    navigationMenu.style.display = "flex";
    aboutMe.style.display = "flex";
    bgimg.style.display = "block";
    workProjects.style.display = "grid";
    aboutTechnology.style.display = "flex";
    contactForm.style.display = "flex";
    footerSection.style.display = "flex";

    menuItem1.style.display = "none";
    menuItem3.style.display = "none";
    div.style.display = "none";
  });
});

/* Second project pop-up */

workBtn2.addEventListener("click", () => {
  displayNoneToElements();
  styleDynamically();

  bgImageProj2.style.display = "block";
  bgImageProj2.style.width = "278.75px";
  bgImageProj2.style.height = "202.7px";
  bgImageProj2.style.marginLeft = "20.25px";
  bgImageProj2.style.marginTop = "18px";
  bgImageProj2.style.borderWidth = "1px";
  bgImageProj2.style.borderStyle = "solid";
  bgImageProj2.style.borderColor = "rgba(255,255,255,0.1)";

  bgImageProj.style.display = "none";
  bgImageProj3.style.display = "none";
  bgImageProj4.style.display = "none";
  bgImageProj5.style.display = "none";
  bgImageProj6.style.display = "none";

  clickOnTheLinks();

  menuItem1.addEventListener("click", () => {
    navigationMenu.style.display = "flex";
    aboutMe.style.display = "flex";
    bgimg.style.display = "block";
    workProjects.style.display = "grid";
    aboutTechnology.style.display = "flex";
    contactForm.style.display = "flex";
    footerSection.style.display = "flex";

    menuItem1.style.display = "none";
    menuItem3.style.display = "none";
    div.style.display = "none";
  });
});

/* Third project pop-up */

workBtn3.addEventListener("click", () => {
  displayNoneToElements();
  styleDynamically();

  bgImageProj3.style.display = "block";
  bgImageProj3.style.width = "278.75px";
  bgImageProj3.style.height = "202.7px";
  bgImageProj3.style.marginLeft = "20.25px";
  bgImageProj3.style.marginTop = "18px";
  bgImageProj3.style.borderWidth = "1px";
  bgImageProj3.style.borderStyle = "solid";
  bgImageProj3.style.borderColor = "rgba(255,255,255,0.1)";

  bgImageProj2.style.display = "none";
  bgImageProj.style.display = "none";
  bgImageProj4.style.display = "none";
  bgImageProj5.style.display = "none";
  bgImageProj6.style.display = "none";

  clickOnTheLinks();

  menuItem1.addEventListener("click", () => {
    navigationMenu.style.display = "flex";
    aboutMe.style.display = "flex";
    bgimg.style.display = "block";
    workProjects.style.display = "grid";
    aboutTechnology.style.display = "flex";
    contactForm.style.display = "flex";
    footerSection.style.display = "flex";

    menuItem1.style.display = "none";
    menuItem3.style.display = "none";
    div.style.display = "none";
  });
});

/* Fourth project pop-up */

workBtn4.addEventListener("click", () => {
  displayNoneToElements();
  styleDynamically();

  bgImageProj4.style.display = "block";
  bgImageProj4.style.width = "278.75px";
  bgImageProj4.style.height = "202.7px";
  bgImageProj4.style.marginLeft = "20.25px";
  bgImageProj4.style.marginTop = "18px";
  bgImageProj4.style.borderWidth = "1px";
  bgImageProj4.style.borderStyle = "solid";
  bgImageProj4.style.borderColor = "rgba(255,255,255,0.1)";

  bgImageProj2.style.display = "none";
  bgImageProj3.style.display = "none";
  bgImageProj.style.display = "none";
  bgImageProj5.style.display = "none";
  bgImageProj6.style.display = "none";

  clickOnTheLinks();

  menuItem1.addEventListener("click", () => {
    navigationMenu.style.display = "flex";
    aboutMe.style.display = "flex";
    bgimg.style.display = "block";
    workProjects.style.display = "grid";
    aboutTechnology.style.display = "flex";
    contactForm.style.display = "flex";
    footerSection.style.display = "flex";

    menuItem1.style.display = "none";
    menuItem3.style.display = "none";
    div.style.display = "none";
  });
});

/* Fifth project pop-up */

workBtn5.addEventListener("click", () => {
  displayNoneToElements();
  styleDynamically();

  bgImageProj5.style.display = "block";
  bgImageProj5.style.width = "278.75px";
  bgImageProj5.style.height = "202.7px";
  bgImageProj5.style.marginLeft = "20.25px";
  bgImageProj5.style.marginTop = "18px";
  bgImageProj5.style.borderWidth = "1px";
  bgImageProj5.style.borderStyle = "solid";
  bgImageProj5.style.borderColor = "rgba(255,255,255,0.1)";

  bgImageProj2.style.display = "none";
  bgImageProj3.style.display = "none";
  bgImageProj4.style.display = "none";
  bgImageProj.style.display = "none";
  bgImageProj6.style.display = "none";

  clickOnTheLinks();

  menuItem1.addEventListener("click", () => {
    navigationMenu.style.display = "flex";
    aboutMe.style.display = "flex";
    bgimg.style.display = "block";
    workProjects.style.display = "grid";
    aboutTechnology.style.display = "flex";
    contactForm.style.display = "flex";
    footerSection.style.display = "flex";

    menuItem1.style.display = "none";
    menuItem3.style.display = "none";
    div.style.display = "none";
  });
});

/* Sixth project pop-up */

workBtn6.addEventListener("click", () => {
  displayNoneToElements();
  styleDynamically();

  bgImageProj6.style.display = "block";
  bgImageProj6.style.width = "278.75px";
  bgImageProj6.style.height = "202.7px";
  bgImageProj6.style.marginLeft = "20.25px";
  bgImageProj6.style.marginTop = "18px";
  bgImageProj6.style.borderWidth = "1px";
  bgImageProj6.style.borderStyle = "solid";
  bgImageProj6.style.borderColor = "rgba(255,255,255,0.1)";

  bgImageProj2.style.display = "none";
  bgImageProj3.style.display = "none";
  bgImageProj4.style.display = "none";
  bgImageProj5.style.display = "none";
  bgImageProj.style.display = "none";

  clickOnTheLinks();

  menuItem1.addEventListener("click", () => {
    navigationMenu.style.display = "flex";
    aboutMe.style.display = "flex";
    bgimg.style.display = "block";
    workProjects.style.display = "grid";
    aboutTechnology.style.display = "flex";
    contactForm.style.display = "flex";
    footerSection.style.display = "flex";

    menuItem1.style.display = "none";
    menuItem3.style.display = "none";
    div.style.display = "none";
  });
});
