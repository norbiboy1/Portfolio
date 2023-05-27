const div = document.createElement('div');
div.setAttribute('class', 'detailsWindow');
div.style.width = '100%';
div.style.height = '978px';

const menuItem1 = document.createElement('span');
menuItem1.setAttribute('class', 'bars_1');
const menuItem3 = document.createElement('span');
menuItem3.setAttribute('class', 'bars_3');

menuItem1.style.position = 'absolute';
menuItem1.style.rotate = '45deg';
menuItem1.style.width = '20px';
menuItem1.style.height = '2px';
menuItem1.style.backgroundColor = '#000';

menuItem3.style.position = 'absolute';
menuItem3.style.rotate = '135deg';
menuItem3.style.width = '20px';
menuItem3.style.height = '2px';
menuItem3.style.backgroundColor = '#000';

const title = document.createElement('h2');
title.setAttribute('class', 'title');
title.innerHTML = 'Project name goes here';

const stacks = document.createElement('ul');
stacks.setAttribute('class', 'stacks');

const stacks1 = document.createElement('li');
stacks1.setAttribute('class', 'stacks-1');
stacks1.innerHTML = 'HTML/CSS';

const stacks2 = document.createElement('li');
stacks2.setAttribute('class', 'stacks-2');
stacks2.innerHTML = 'Ruby on Rails';

const stacks3 = document.createElement('li');
stacks3.setAttribute('class', 'stacks-3');
stacks3.innerHTML = 'JavaScript';

const bgImageProj1 = document.createElement('img');
bgImageProj1.setAttribute('class', 'bg-image-proj-1');

const bgImageProj2 = document.createElement('img');
bgImageProj2.setAttribute('class', 'bg-image-proj-2');

const bgImageProj3 = document.createElement('img');
bgImageProj3.setAttribute('class', 'bg-image-proj-3');

const bgImageProj4 = document.createElement('img');
bgImageProj4.setAttribute('class', 'bg-image-proj-4');

const bgImageProj5 = document.createElement('img');
bgImageProj5.setAttribute('class', 'bg-image-proj-5');

const bgImageProj6 = document.createElement('img');
bgImageProj6.setAttribute('class', 'bg-image-proj-6');

const description = document.createElement('p');
description.setAttribute('class', 'descr');
description.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.';

const btnLive = document.createElement('button');
btnLive.setAttribute('type', 'button', 'class', 'see-live');
btnLive.innerHTML = 'See live';

const btnSource = document.createElement('button');
btnSource.setAttribute('type', 'button', 'class', 'see-source');
btnSource.innerHTML = 'See source';

const resumeLink = document.createElement('img');
resumeLink.setAttribute('class', 'ic-link');
resumeLink.setAttribute('src', 'assets/Mobile-dynamic/ic_link.png');
resumeLink.setAttribute('alt', 'resume icon');

const gitHubLink = document.createElement('img');
gitHubLink.setAttribute('class', 'ic-github');
gitHubLink.setAttribute('src', 'assets/Mobile-dynamic/ic_github_white.svg');
gitHubLink.setAttribute('alt', 'github icon');

btnLive.append(resumeLink);
btnSource.append(gitHubLink);

stacks.append(stacks1, stacks2, stacks3);

const project1 = {
  title,
  technologyStacks: stacks,
  bgImage: bgImageProj1,
  description,
  btnLive,
  btnSource,
};

const project2 = {
  title,
  technologyStacks: stacks,
  bgImage: bgImageProj2,
  description,
  btnLive,
  btnSource,
};

const project3 = {
  title,
  technologyStacks: stacks,
  bgImage: bgImageProj3,
  description,
  btnLive,
  btnSource,
};

const project4 = {
  title,
  technologyStacks: stacks,
  bgImage: bgImageProj4,
  description,
  btnLive,
  btnSource,
};

const project5 = {
  title,
  technologyStacks: stacks,
  bgImage: bgImageProj5,
  description,
  btnLive,
  btnSource,
};

const project6 = {
  title,
  technologyStacks: stacks,
  bgImage: bgImageProj6,
  description,
  btnLive,
  btnSource,
};

const workBtn1 = document.querySelector('.proj-btn-1');
const workBtn2 = document.querySelector('.proj-btn-2');
const workBtn3 = document.querySelector('.proj-btn-3');
const workBtn4 = document.querySelector('.proj-btn-4');
const workBtn5 = document.querySelector('.proj-btn-5');
const workBtn6 = document.querySelector('.proj-btn-6');

const navigationMenu = document.querySelector('.mobile-version');
const aboutMe = document.querySelector('.hello');
const bgimg = document.querySelector('.img-background');
const workProjects = document.querySelector('.work');
const aboutTechnology = document.querySelector('.about');
const contactForm = document.querySelector('.contact');
const footerSection = document.querySelector('.links');

function displayNoneToElements() {
  navigationMenu.style.display = 'none';
  aboutMe.style.display = 'none';
  bgimg.style.display = 'none';
  workProjects.style.display = 'none';
  aboutTechnology.style.display = 'none';
  contactForm.style.display = 'none';
  footerSection.style.display = 'none';
}

function styleDynamically() {
  menuItem1.style.display = 'block';
  menuItem1.style.top = '19px';
  menuItem1.style.left = '270px';
  menuItem1.style.listStyleType = 'none';

  menuItem3.style.display = 'block';
  menuItem3.style.top = '20px';
  menuItem3.style.left = '270px';
  menuItem3.style.listStyleType = 'none';

  stacks.style.listStyleType = 'none';
  stacks.style.width = '230px';
  stacks.style.height = '20px';
  stacks.style.marginLeft = '20px';
  stacks.style.display = 'flex';
  stacks.style.flexDirection = 'row';
  stacks.style.justifyContent = 'space-evenly';
  stacks.style.paddingLeft = '0px';
  stacks.style.fontFamily = 'Poppins';
  stacks.style.fontStyle = 'normal';
  stacks.style.fontWeight = '300';
  stacks.style.fontSize = '10.3334px';
  stacks.style.color = '#1A2236';

  stacks1.style.width = '69px';
  stacks1.style.marginRight = '10px';
  stacks1.style.textAlign = 'center';
  stacks1.style.background = '#FFFFFF';
  stacks1.style.borderWidth = '0.516669px';
  stacks1.style.borderStyle = 'solid';
  stacks1.style.borderColor = '#1A2236';

  stacks2.style.width = '87px';
  stacks2.style.marginRight = '10px';
  stacks2.style.textAlign = 'center';
  stacks2.style.background = '#FFFFFF';
  stacks2.style.borderWidth = '0.516669px';
  stacks2.style.borderStyle = 'solid';
  stacks2.style.borderColor = '#1A2236';

  stacks3.style.width = '74px';
  stacks3.style.textAlign = 'center';
  stacks3.style.background = '#FFFFFF';
  stacks3.style.borderWidth = '0.516669px';
  stacks3.style.borderStyle = 'solid';
  stacks3.style.borderColor = '#1A2236';

  bgImageProj1.style.backgroundImage = "url('assets/Proj1.png')";
  bgImageProj2.style.backgroundImage = "url('assets/Proj2.png')";
  bgImageProj3.style.backgroundImage = "url('assets/Proj3.png')";
  bgImageProj4.style.backgroundImage = "url('assets/Proj4.png')";
  bgImageProj5.style.backgroundImage = "url('assets/Proj5.png')";
  bgImageProj6.style.backgroundImage = "url('assets/Proj6.png')";

  btnLive.style.width = '246px';
  btnLive.style.height = '51px';
  btnLive.style.borderWidth = '1px';
  btnLive.style.borderStyle = 'solid';
  btnLive.style.borderColor = '#1A2236';
  btnLive.style.fontFamily = 'Poppins';
  btnLive.style.fontStyle = 'normal';
  btnLive.style.fontWeight = '500;';
  btnLive.style.fontSize = '18px';
  btnLive.style.textAlign = 'center';
  btnLive.style.color = '#1A2236';
  btnLive.style.marginLeft = '37px';
  btnLive.style.paddingLeft = '82px';
  btnLive.style.backgroundColor = '#FFFFFF';

  btnSource.style.width = '246px';
  btnSource.style.height = '51px';
  btnSource.style.borderWidth = '1px';
  btnSource.style.borderStyle = 'solid';
  btnSource.style.borderColor = '#1A2236';
  btnSource.style.fontFamily = 'Poppins';
  btnSource.style.fontStyle = 'normal';
  btnSource.style.fontWeight = '500';
  btnSource.style.fontSize = '18px';
  btnSource.style.textAlign = 'center';
  btnSource.style.color = '#1A2236';
  btnSource.style.marginLeft = '37px';
  btnSource.style.marginTop = '29px';
  btnSource.style.paddingLeft = '66px';
  btnSource.style.backgroundColor = '#FFFFFF';

  resumeLink.style.color = '#1A2236';
  gitHubLink.style.color = '#1A2236';
}

workBtn1.addEventListener('click', () => {
  displayNoneToElements();

  div.style.display = 'flex';
  const detailsContainer = document.body.appendChild(div);

  detailsContainer.append(menuItem1, menuItem3);

  detailsContainer.append(
    project1.title,
    project1.technologyStacks,
    project1.bgImage,
    project1.description,
    project1.btnLive,
    project1.btnSource,
  );

  project1.title.style.marginTop = '57px';
  project1.title.style.marginLeft = '20px';
  project1.title.style.fontWeight = 'bolder';

  styleDynamically();

  bgImageProj2.style.display = 'none';
  bgImageProj3.style.display = 'none';
  bgImageProj4.style.display = 'none';
  bgImageProj5.style.display = 'none';
  bgImageProj6.style.display = 'none';

  bgImageProj1.style.display = 'block';
  bgImageProj1.style.width = '278.75px';
  bgImageProj1.style.height = '202.7px';
  bgImageProj1.style.marginLeft = '20.25px';

  description.style.marginLeft = '11px';

  detailsContainer.style.display = 'flex';
  detailsContainer.style.flexDirection = 'column';
  detailsContainer.style.alignItems = 'center';

  menuItem1.addEventListener('click', () => {
    navigationMenu.style.display = 'flex';
    aboutMe.style.display = 'flex';
    bgimg.style.display = 'block';
    workProjects.style.display = 'grid';
    aboutTechnology.style.display = 'flex';
    contactForm.style.display = 'flex';
    footerSection.style.display = 'flex';

    menuItem1.style.display = 'none';
    menuItem3.style.display = 'none';
    div.style.display = 'none';
  });
});

/* Second project pop-up */

workBtn2.addEventListener('click', () => {
  displayNoneToElements();

  div.style.display = 'flex';
  const detailsContainer = document.body.appendChild(div);

  detailsContainer.append(menuItem1, menuItem3);

  detailsContainer.append(
    project2.title,
    project2.technologyStacks,
    project2.bgImage,
    project2.description,
    project2.btnLive,
    project2.btnSource,
  );

  project2.title.style.marginTop = '57px';
  project2.title.style.marginLeft = '20px';
  project2.title.style.fontWeight = 'bolder';

  styleDynamically();

  bgImageProj1.style.display = 'none';
  bgImageProj3.style.display = 'none';
  bgImageProj4.style.display = 'none';
  bgImageProj5.style.display = 'none';
  bgImageProj6.style.display = 'none';

  bgImageProj2.style.display = 'block';
  bgImageProj2.style.width = '278.75px';
  bgImageProj2.style.height = '202.7px';
  bgImageProj2.style.marginLeft = '20.25px';

  description.style.marginLeft = '11px';

  detailsContainer.style.display = 'flex';
  detailsContainer.style.flexDirection = 'column';
  detailsContainer.style.alignItems = 'center';

  menuItem1.addEventListener('click', () => {
    navigationMenu.style.display = 'flex';
    aboutMe.style.display = 'flex';
    bgimg.style.display = 'block';
    workProjects.style.display = 'grid';
    aboutTechnology.style.display = 'flex';
    contactForm.style.display = 'flex';
    footerSection.style.display = 'flex';

    menuItem1.style.display = 'none';
    menuItem3.style.display = 'none';
    div.style.display = 'none';
  });
});

/* Third project pop-up */

workBtn3.addEventListener('click', () => {
  displayNoneToElements();

  div.style.display = 'flex';
  const detailsContainer = document.body.appendChild(div);

  detailsContainer.append(menuItem1, menuItem3);

  detailsContainer.append(
    project3.title,
    project3.technologyStacks,
    project3.bgImage,
    project3.description,
    project3.btnLive,
    project3.btnSource,
  );

  project3.title.style.marginTop = '57px';
  project3.title.style.marginLeft = '20px';
  project3.title.style.fontWeight = 'bolder';

  styleDynamically();

  bgImageProj1.style.display = 'none';
  bgImageProj2.style.display = 'none';
  bgImageProj4.style.display = 'none';
  bgImageProj5.style.display = 'none';
  bgImageProj6.style.display = 'none';

  bgImageProj3.style.display = 'block';
  bgImageProj3.style.width = '278.75px';
  bgImageProj3.style.height = '202.7px';
  bgImageProj3.style.marginLeft = '20.25px';

  description.style.marginLeft = '11px';

  detailsContainer.style.display = 'flex';
  detailsContainer.style.flexDirection = 'column';
  detailsContainer.style.alignItems = 'center';

  menuItem1.addEventListener('click', () => {
    navigationMenu.style.display = 'flex';
    aboutMe.style.display = 'flex';
    bgimg.style.display = 'block';
    workProjects.style.display = 'grid';
    aboutTechnology.style.display = 'flex';
    contactForm.style.display = 'flex';
    footerSection.style.display = 'flex';

    menuItem1.style.display = 'none';
    menuItem3.style.display = 'none';
    div.style.display = 'none';
  });
});

/* Fourth project pop-up */

workBtn4.addEventListener('click', () => {
  displayNoneToElements();

  div.style.display = 'flex';
  const detailsContainer = document.body.appendChild(div);

  detailsContainer.append(menuItem1, menuItem3);

  detailsContainer.append(
    project4.title,
    project4.technologyStacks,
    project4.bgImage,
    project4.description,
    project4.btnLive,
    project4.btnSource,
  );

  project4.title.style.marginTop = '57px';
  project4.title.style.marginLeft = '20px';
  project4.title.style.fontWeight = 'bolder';

  styleDynamically();

  bgImageProj1.style.display = 'none';
  bgImageProj2.style.display = 'none';
  bgImageProj3.style.display = 'none';
  bgImageProj5.style.display = 'none';
  bgImageProj6.style.display = 'none';

  bgImageProj4.style.display = 'block';
  bgImageProj4.style.width = '278.75px';
  bgImageProj4.style.height = '202.7px';
  bgImageProj4.style.marginLeft = '20.25px';

  description.style.marginLeft = '11px';

  detailsContainer.style.display = 'flex';
  detailsContainer.style.flexDirection = 'column';
  detailsContainer.style.alignItems = 'center';

  menuItem1.addEventListener('click', () => {
    navigationMenu.style.display = 'flex';
    aboutMe.style.display = 'flex';
    bgimg.style.display = 'block';
    workProjects.style.display = 'grid';
    aboutTechnology.style.display = 'flex';
    contactForm.style.display = 'flex';
    footerSection.style.display = 'flex';

    menuItem1.style.display = 'none';
    menuItem3.style.display = 'none';
    div.style.display = 'none';
  });
});

/* Fifth project pop-up */

workBtn5.addEventListener('click', () => {
  displayNoneToElements();

  div.style.display = 'flex';
  const detailsContainer = document.body.appendChild(div);

  detailsContainer.append(menuItem1, menuItem3);

  detailsContainer.append(
    project5.title,
    project5.technologyStacks,
    project5.bgImage,
    project5.description,
    project5.btnLive,
    project5.btnSource,
  );

  project5.title.style.marginTop = '57px';
  project5.title.style.marginLeft = '20px';
  project5.title.style.fontWeight = 'bolder';

  styleDynamically();

  bgImageProj1.style.display = 'none';
  bgImageProj2.style.display = 'none';
  bgImageProj3.style.display = 'none';
  bgImageProj4.style.display = 'none';
  bgImageProj6.style.display = 'none';

  bgImageProj5.style.display = 'block';
  bgImageProj5.style.width = '278.75px';
  bgImageProj5.style.height = '202.7px';
  bgImageProj5.style.marginLeft = '20.25px';

  description.style.marginLeft = '11px';

  detailsContainer.style.display = 'flex';
  detailsContainer.style.flexDirection = 'column';
  detailsContainer.style.alignItems = 'center';

  menuItem1.addEventListener('click', () => {
    navigationMenu.style.display = 'flex';
    aboutMe.style.display = 'flex';
    bgimg.style.display = 'block';
    workProjects.style.display = 'grid';
    aboutTechnology.style.display = 'flex';
    contactForm.style.display = 'flex';
    footerSection.style.display = 'flex';

    menuItem1.style.display = 'none';
    menuItem3.style.display = 'none';
    div.style.display = 'none';
  });
});

/* Sixth project pop-up */

workBtn6.addEventListener('click', () => {
  displayNoneToElements();

  div.style.display = 'flex';
  const detailsContainer = document.body.appendChild(div);

  detailsContainer.append(menuItem1, menuItem3);

  detailsContainer.append(
    project6.title,
    project6.technologyStacks,
    project6.bgImage,
    project6.description,
    project6.btnLive,
    project6.btnSource,
  );

  project6.title.style.marginTop = '57px';
  project6.title.style.marginLeft = '20px';
  project6.title.style.fontWeight = 'bolder';

  styleDynamically();

  bgImageProj1.style.display = 'none';
  bgImageProj2.style.display = 'none';
  bgImageProj3.style.display = 'none';
  bgImageProj4.style.display = 'none';
  bgImageProj5.style.display = 'none';

  bgImageProj6.style.display = 'block';
  bgImageProj6.style.width = '278.75px';
  bgImageProj6.style.height = '202.7px';
  bgImageProj6.style.marginLeft = '20.25px';

  description.style.marginLeft = '11px';

  detailsContainer.style.display = 'flex';
  detailsContainer.style.flexDirection = 'column';
  detailsContainer.style.alignItems = 'center';

  menuItem1.addEventListener('click', () => {
    navigationMenu.style.display = 'flex';
    aboutMe.style.display = 'flex';
    bgimg.style.display = 'block';
    workProjects.style.display = 'grid';
    aboutTechnology.style.display = 'flex';
    contactForm.style.display = 'flex';
    footerSection.style.display = 'flex';

    menuItem1.style.display = 'none';
    menuItem3.style.display = 'none';
    div.style.display = 'none';
  });
});
