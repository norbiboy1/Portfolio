const bigContainer = document.createElement("div");
bigContainer.setAttribute("class", "projectPopUp");
bigContainer.style.width = "100%";
bigContainer.style.height = "1851px";

const insideProject = document.createElement("div");
insideProject.setAttribute("class", "inside");
insideProject.style.width = "100%";
insideProject.style.height = "1711px";

document.body.appendChild(bigContainer);
bigContainer.append(insideProject);

const myFirstProjectBtn = document.querySelector(".my-first-project-button");
const mySecondProjectBtn = document.querySelector(".my-second-project-button");

const rectBar = document.createElement("span");
const rectBar2 = document.createElement("span");

const projectName = document.createElement("h2");
projectName.setAttribute("class", "projectTitle");
projectName.innerHTML = "Project name goes here";

const progLang = document.createElement("ul");
progLang.setAttribute("class", "stackList");

const progLangList1 = document.createElement("li");
progLangList1.setAttribute("class", "list1");
progLangList1.innerHTML = "HTML/CSS";

const progLangList2 = document.createElement("li");
progLangList2.setAttribute("class", "list2");
progLangList2.innerHTML = "Ruby on Rails";

const progLangList3 = document.createElement("li");
progLangList3.setAttribute("class", "list3");
progLangList3.innerHTML = "JavaScript";

progLang.append(progLangList1, progLangList2, progLangList3);

const bigImg = document.createElement("img");
bigImg.setAttribute("class", "macPro-maximized");

const littleImg = document.createElement("img");
littleImg.setAttribute("class", "macPro-minimized");

const imgContainerLeftArrow = document.createElement("img");
imgContainerLeftArrow.setAttribute("class", "slideLeft");

const imgContainerRightArrow = document.createElement("img");
imgContainerRightArrow.setAttribute("class", "slideRight");

const loremIpsum = document.createElement("p");
loremIpsum.setAttribute("class", "lorem-ipsum");
loremIpsum.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> <br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.";

const liveButton = document.createElement("button");
liveButton.setAttribute("type", "button", "class", "live-project");
liveButton.innerHTML = "See live";

const sourceButton = document.createElement("button");
sourceButton.setAttribute("type", "button", "class", "source-project");
sourceButton.innerHTML = "See source";

const addLiveLink = document.createElement("img");
addLiveLink.setAttribute("class", "liveLink");

const addGithubLink = document.createElement("img");
addGithubLink.setAttribute("class", "gitHubLink");

const previousButton = document.createElement("button");
previousButton.setAttribute("type", "button", "class", "previous");
previousButton.innerHTML = "Previous project";

const nextButton = document.createElement("button");
nextButton.setAttribute("type", "button", "class", "next");
nextButton.innerHTML = "Next project";

const leftArrow = document.createElement("img");
leftArrow.setAttribute("class", "arrowLeft");

const rightArrow = document.createElement("img");
rightArrow.setAttribute("class", "arrowRight");

const bigProject1 = {
  name: projectName,
  languageStacks: progLang,
  macbookMaximized: bigImg,
  macbookMinimized: littleImg,
  paragraph: loremIpsum,
  live: liveButton,
  source: sourceButton,
  leftArrow: previousButton,
  rightArrow: nextButton,
};

function addStyleToDesktopPopUp() {
  bigContainer.style.backgroundColor = "rgba(26, 34, 54, 0.95)";
  bigContainer.style.backdropFilter = "blur(12px)";

  insideProject.style.backgroundColor = "#FFFFFF";
  insideProject.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.25)";

  rectBar.style.position = "absolute";
  rectBar.style.display = "block";
  rectBar.style.width = "20px";
  rectBar.style.height = "2px";
  rectBar.style.rotate = "45deg";
  rectBar.style.left = "1300px";
  rectBar.style.top = "20px";
  rectBar.style.backgroundColor = "#000";

  rectBar2.style.position = "absolute";
  rectBar2.style.display = "block";
  rectBar2.style.width = "20px";
  rectBar2.style.height = "2px";
  rectBar2.style.rotate = "135deg";
  rectBar2.style.left = "1300px";
  rectBar2.style.top = "18px";
  rectBar2.style.backgroundColor = "#000";

  bigProject1.name.style.width = "726px";
  bigProject1.name.style.height = "48px";
  bigProject1.name.style.fontFamily = "Poppins";
  bigProject1.name.style.fontWeight = "700";
  bigProject1.name.style.fontSize = "60px";
  bigProject1.name.style.color = "#1A2236";
  bigProject1.name.style.marginTop = "60px";
  bigProject1.name.style.marginLeft = "60px";

  bigProject1.languageStacks.style.width = "445px";
  bigProject1.languageStacks.style.height = "40px";
  bigProject1.languageStacks.style.marginTop = "34px";
  bigProject1.languageStacks.style.marginLeft = "60px";
  bigProject1.languageStacks.style.display = "flex";
  bigProject1.languageStacks.style.paddingLeft = "0px";

  progLangList1.style.marginRight = "20px";
  progLangList1.style.width = "132px";
  progLangList1.style.height = "40px";
  progLangList1.style.textAlign = "center";
  progLangList1.style.fontFamily = "Poppins";
  progLangList1.style.fontStyle = "normal";
  progLangList1.style.fontWeight = "300";
  progLangList1.style.fontSize = "20px";
  progLangList1.style.color = "#1A2236";
  progLangList1.style.borderWeight = "1px";
  progLangList1.style.borderStyle = "solid";
  progLangList1.style.borderColor = "#1A2236";
  progLangList1.style.listStyleType = "none";

  progLangList2.style.marginRight = "20px";
  progLangList2.style.width = "169px";
  progLangList2.style.height = "40px";
  progLangList2.style.textAlign = "center";
  progLangList2.style.fontFamily = "Poppins";
  progLangList2.style.fontStyle = "normal";
  progLangList2.style.fontWeight = "300";
  progLangList2.style.fontSize = "20px";
  progLangList2.style.color = "#1A2236";
  progLangList2.style.borderWeight = "1px";
  progLangList2.style.borderStyle = "solid";
  progLangList2.style.borderColor = "#1A2236";
  progLangList2.style.listStyleType = "none";

  progLangList3.style.width = "144px";
  progLangList3.style.height = "40px";
  progLangList3.style.textAlign = "center";
  progLangList3.style.fontFamily = "Poppins";
  progLangList3.style.fontStyle = "normal";
  progLangList3.style.fontWeight = "300";
  progLangList3.style.fontSize = "20px";
  progLangList3.style.color = "#1A2236";
  progLangList3.style.borderWeight = "1px";
  progLangList3.style.borderStyle = "solid";
  progLangList3.style.borderColor = "#1A2236";
  progLangList3.style.listStyleType = "none";

  bigProject1.macbookMaximized.style.width = "1179px";
  bigProject1.macbookMaximized.style.height = "685.85px";
  bigProject1.macbookMaximized.style.marginTop = "40px";
  bigProject1.macbookMaximized.style.marginLeft = "60px";
  bigProject1.macbookMaximized.style.backgroundImage =
    "linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 5.21%, rgba(0, 0, 0, 0) 92.16%, rgba(0, 0, 0, 0.15) 100%)";
  bigProject1.macbookMaximized.style.backgroundImage =
    "url('assets/Mobile-dynamic/Rectangle 34.png')";
  bigProject1.macbookMaximized.style.backgroundRepeat = "no-repeat";

  bigProject1.macbookMinimized.style.width = "1177px";
  bigProject1.macbookMinimized.style.height = "171.46px";
  bigProject1.macbookMinimized.style.marginLeft = "60px";
  bigProject1.macbookMinimized.style.backgroundImage =
    "url('assets/Mobile-dynamic/Rectangle 39.png')";
  bigProject1.macbookMinimized.style.backgroundRepeat = "repeat";

  imgContainerLeftArrow.style.backgroundImage =
    "url('assets/Mobile-dynamic/Vector 5.png')";
  imgContainerLeftArrow.style.width = "53.11px";
  imgContainerLeftArrow.style.height = "26.55px";
  imgContainerLeftArrow.style.position = "absolute";
  imgContainerLeftArrow.style.top = "662.24px";
  imgContainerLeftArrow.style.left = "145.17px";

  imgContainerRightArrow.style.backgroundImage =
    "url('assets/Mobile-dynamic/Vector 4.png')";
  imgContainerRightArrow.style.width = "53.11px";
  imgContainerRightArrow.style.height = "26.55px";
  imgContainerRightArrow.style.position = "absolute";
  imgContainerRightArrow.style.top = "662.24px";
  imgContainerRightArrow.style.left = "1293.07px";

  bigProject1.paragraph.style.width = "700px";
  bigProject1.paragraph.style.height = "216px";
  bigProject1.paragraph.style.marginTop = "68.68px";
  bigProject1.paragraph.style.marginLeft = "300px";
  bigProject1.paragraph.style.fontFamily = "Poppins";
  bigProject1.paragraph.style.fontStyle = "normal";
  bigProject1.paragraph.style.fontWeight = "400";
  bigProject1.paragraph.style.fontSize = "18px";
  bigProject1.paragraph.style.color = "#1A2236";

  bigProject1.live.style.width = "246px";
  bigProject1.live.style.height = "51px";
  bigProject1.live.style.marginTop = "40px";
  bigProject1.live.style.marginLeft = "300px";
  bigProject1.live.style.paddingLeft = "22px";
  bigProject1.live.style.backgroundColor = "#FFFFFF";
  bigProject1.live.style.fontFamily = "Poppins";
  bigProject1.live.style.fontStyle = "normal";
  bigProject1.live.style.fontWeight = "500";
  bigProject1.live.style.fontSize = "18px";
  bigProject1.live.style.textAlign = "center";
  bigProject1.live.style.color = "#1A2236";
  bigProject1.live.style.borderWeight = "1px";
  bigProject1.live.style.borderStyle = "solid";
  bigProject1.live.style.borderColor = "#1A2236";

  addLiveLink.style.width = "22px";
  addLiveLink.style.height = "22px";
  addLiveLink.style.marginLeft = "113px";
  addLiveLink.style.backgroundImage =
    "url('assets/Mobile-dynamic/ic_link.png')";
  addLiveLink.style.backgroundRepeat = "no-repeat";

  bigProject1.live.append(addLiveLink);

  bigProject1.source.style.marginLeft = "30px";
  bigProject1.source.style.marginTop = "40px";
  bigProject1.source.style.width = "246px";
  bigProject1.source.style.height = "51px";
  bigProject1.source.style.backgroundColor = "#1A2236";
  bigProject1.source.style.paddingLeft = "23px";
  bigProject1.source.style.fontFamily = "Poppins";
  bigProject1.source.style.fontStyle = "normal";
  bigProject1.source.style.fontWeight = "500";
  bigProject1.source.style.fontSize = "18px";
  bigProject1.source.style.textAlign = "center";
  bigProject1.source.style.color = "#FFFFFF";
  bigProject1.source.style.borderWeight = "1px";
  bigProject1.source.style.borderStyle = "solid";
  bigProject1.source.style.borderColor = "#1A2236";

  addGithubLink.style.width = "24px";
  addGithubLink.style.height = "24px";
  addGithubLink.style.marginLeft = "79px";
  addGithubLink.style.backgroundColor = "#FFFFFF";
  addGithubLink.style.backgroundImage =
    "url('assets/Mobile-dynamic/ic_github_white.svg')";
  addGithubLink.style.backgroundRepeat = "no-repeat";

  bigProject1.source.append(addGithubLink);

  bigProject1.leftArrow.style.position = "absolute";
  bigProject1.leftArrow.style.top = "1600px";
  bigProject1.leftArrow.style.left = "330px";
  bigProject1.leftArrow.style.width = "181.57px";
  bigProject1.leftArrow.style.height = "27px";
  bigProject1.leftArrow.style.paddingLeft = "18px";
  bigProject1.leftArrow.style.fontFamily = "Poppins";
  bigProject1.leftArrow.style.fontStyle = "normal";
  bigProject1.leftArrow.style.fontWeight = "300";
  bigProject1.leftArrow.style.fontSize = "18px";
  bigProject1.leftArrow.style.color = "#1A2236";
  bigProject1.leftArrow.style.backgroundColor = "#FFFFFF";
  bigProject1.leftArrow.style.border = "none";

  bigProject1.rightArrow.style.position = "absolute";
  bigProject1.rightArrow.style.top = "1600px";
  bigProject1.rightArrow.style.left = "700px";
  bigProject1.rightArrow.style.width = "143.57px";
  bigProject1.rightArrow.style.height = "27px";
  bigProject1.rightArrow.style.paddingRight = "16px";
  bigProject1.rightArrow.style.fontFamily = "Poppins";
  bigProject1.rightArrow.style.fontStyle = "normal";
  bigProject1.rightArrow.style.fontWeight = "300";
  bigProject1.rightArrow.style.fontSize = "18px";
  bigProject1.rightArrow.style.color = "#1A2236";
  bigProject1.rightArrow.style.backgroundColor = "#FFFFFF";
  bigProject1.rightArrow.style.border = "none";

  leftArrow.style.backgroundImage =
    "url('assets/Mobile-dynamic/ic_arrow_left.svg')";
  leftArrow.style.width = "25.57px";
  leftArrow.style.height = "23.35px";
  leftArrow.style.position = "absolute";
  leftArrow.style.top = "1600px";
  leftArrow.style.left = "290px";
  leftArrow.style.border = "none";

  rightArrow.style.backgroundImage =
    "url('assets/Mobile-dynamic/ic_arrow_right.svg')";
  rightArrow.style.width = "25.37px";
  rightArrow.style.height = "23.35px";
  rightArrow.style.position = "absolute";
  rightArrow.style.top = "1600px";
  rightArrow.style.left = "860px";
  rightArrow.style.border = "none";

  insideProject.append(
    rectBar,
    rectBar2,
    bigProject1.name,
    bigProject1.languageStacks,
    bigProject1.macbookMaximized,
    bigProject1.macbookMinimized,
    bigProject1.paragraph,
    bigProject1.live,
    bigProject1.source,
    bigProject1.leftArrow,
    bigProject1.rightArrow,
    leftArrow,
    rightArrow
  );
}

function removeElements() {
  const headerDesktop = document.querySelector(".desktop-version");
  const helloSectionDesktop = document.querySelector(".hello-desktop-version");
  const workSectionDesktop = document.querySelector(".desktop-work");
  const aboutSectionDesktop = document.querySelector(".desktop-about");
  const asideAboutDesktop = document.querySelector(".about-me-desktop");
  const contactSectionDesktop = document.querySelector(".contact-desktop");
  const footerDesktop = document.querySelector(".desktop-links");

  headerDesktop.style.display = "none";
  helloSectionDesktop.style.display = "none";
  workSectionDesktop.style.display = "none";
  aboutSectionDesktop.style.display = "none";
  asideAboutDesktop.style.display = "none";
  contactSectionDesktop.style.display = "none";
  footerDesktop.style.display = "none";
}

/* See button click event on the first project */

myFirstProjectBtn.addEventListener("click", function () {
  removeElements();
  addStyleToDesktopPopUp();

  bigContainer.style.display = "flex";
  bigContainer.style.flexDirection = "column";
  bigContainer.style.alignContent = "center";

  rectBar.addEventListener("click", function () {
    const headerDesktop = document.querySelector(".desktop-version");
    const helloSectionDesktop = document.querySelector(
      ".hello-desktop-version"
    );
    const workSectionDesktop = document.querySelector(".desktop-work");
    const aboutSectionDesktop = document.querySelector(".desktop-about");
    const asideAboutDesktop = document.querySelector(".about-me-desktop");
    const contactSectionDesktop = document.querySelector(".contact-desktop");
    const footerDesktop = document.querySelector(".desktop-links");

    headerDesktop.style.display = "block";
    helloSectionDesktop.style.display = "flex";
    workSectionDesktop.style.display = "flex";
    aboutSectionDesktop.style.display = "grid";
    asideAboutDesktop.style.display = "flex";
    contactSectionDesktop.style.display = "flex";
    footerDesktop.style.display = "flex";

    bigContainer.style.display = "none";
  });
});

/* See button click event on the second project */

mySecondProjectBtn.addEventListener("click", function () {
  removeElements();
  addStyleToDesktopPopUp();

  bigContainer.style.display = "flex";
  bigContainer.style.flexDirection = "column";
  bigContainer.style.alignContent = "center";

  rectBar.addEventListener("click", function () {
    const headerDesktop = document.querySelector(".desktop-version");
    const helloSectionDesktop = document.querySelector(
      ".hello-desktop-version"
    );
    const workSectionDesktop = document.querySelector(".desktop-work");
    const aboutSectionDesktop = document.querySelector(".desktop-about");
    const asideAboutDesktop = document.querySelector(".about-me-desktop");
    const contactSectionDesktop = document.querySelector(".contact-desktop");
    const footerDesktop = document.querySelector(".desktop-links");

    headerDesktop.style.display = "block";
    helloSectionDesktop.style.display = "flex";
    workSectionDesktop.style.display = "flex";
    aboutSectionDesktop.style.display = "grid";
    asideAboutDesktop.style.display = "flex";
    contactSectionDesktop.style.display = "flex";
    footerDesktop.style.display = "flex";

    bigContainer.style.display = "none";
  });
});
