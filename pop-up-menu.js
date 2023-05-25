const menu = document.querySelectorAll('.bars');
const menuList1 = document.querySelector('.bars1');
const menuList2 = document.querySelector('.bars2');
const menuList3 = document.querySelector('.bars3');
const backgroundImg = document.querySelector('.img-background');
const backgroundImg2 = document.querySelector('.bg-img');
const container = document.querySelector('.bg-img-container');

const menuDesktop = document.querySelectorAll('.menu-desktop-version');
const list1 = document.querySelector('.element1');
const list2 = document.querySelector('.element2');
const list3 = document.querySelector('.element3');

const anchorTag1 = document.querySelector('.hello-item');
const anchorTag2 = document.querySelector('.portfolio-item');
const anchorTag3 = document.querySelector('.about-item');
const anchorTag4 = document.querySelector('.contact-item');

const section = document.querySelectorAll('.hello');

const work = document.querySelectorAll('.work');

const about = document.querySelectorAll('.about');

const contact = document.querySelectorAll('.contact');

const footerLinks = document.querySelectorAll('.links');

const hamburgerMenu = document.querySelector('.hamburger-menu');

function toggleMenu() {
  for (let i = 0; i < menu.length; i += 1) {
    if (menu[i].classList.contains('menu-show')) {
      menu[i].classList.remove('menu-show');
      section[i].style.display = 'flex';
      menuList1.style.display = 'block';
      menuList1.style.rotate = '0deg';
      menuList1.style.top = '7px;';
      menuList2.style.display = 'block';
      menuList2.style.top = '12px';
      menuList2.style.left = '30px';
      menuList3.style.display = 'block';
      menuList3.style.rotate = '0deg';
      menuList3.style.top = '15px';
      menuDesktop[i].style.display = 'none';
      work[i].style.marginTop = '0px';
      backgroundImg.style.display = 'block';
      container.style.display = 'none';
      hamburgerMenu.style.width = '100%';
      hamburgerMenu.style.height = '74px';
      hamburgerMenu.style.backgroundImage = "url('assets/Shape.png'), url('assets/Shape-2.png')";
      hamburgerMenu.style.backgroundRepeat = 'no-repeat';
      hamburgerMenu.style.marginRight = '43px';
      work[i].style.display = 'grid';
      about[i].style.display = 'flex';
      contact[i].style.display = 'flex';
      footerLinks[i].style.display = 'flex';
    } else {
      menu[i].classList.add('menu-show');
      container.style.display = 'flex';
      container.style.justifyContent = 'flex-end';
      backgroundImg2.style.backgroundImage = "url('assets/Mobile-dynamic/image_geometry_menu_2.svg')";
      backgroundImg2.style.backgroundRepeat = 'no-repeat';
      backgroundImg2.style.width = '320px';
      backgroundImg2.style.height = '150px';
      backgroundImg2.style.position = 'absolute';
      backgroundImg2.style.top = '450px';
      backgroundImg2.style.left = '0px';
      hamburgerMenu.style.backgroundImage = "url('assets/Mobile-dynamic/image_geometry_menu_1.svg')";
      hamburgerMenu.style.width = '320px';
      hamburgerMenu.style.height = '568px';
      hamburgerMenu.style.backgroundRepeat = 'no-repeat';
      hamburgerMenu.style.marginRight = '43px';
      section[i].style.display = 'none';
      backgroundImg.style.display = 'none';
      menuDesktop[i].style.display = 'block';
      menu[i].style.backgroundColor = '#fff';
      menuList1.style.rotate = '45deg';
      menuList1.style.top = '9px';
      menuList1.style.left = '30px';
      menuList2.style.display = 'none';
      menuList3.style.rotate = '135deg';
      menuList3.style.top = '7px';
      menuList3.style.left = '30px';

      menuDesktop[i].style.width = '66px';
      menuDesktop[i].style.height = '192px';
      menuDesktop[i].style.marginTop = '150px';
      menuDesktop[i].style.marginRight = '50px';
      menuDesktop[i].style.listStyleType = 'none';
      work[i].style.marginTop = '300px';

      list1.style.paddingTop = '30px';
      list2.style.paddingTop = '30px';
      list3.style.paddingTop = '30px';

      anchorTag1.style.display = 'block';
      anchorTag1.style.fontFamily = 'Poppins';
      anchorTag1.style.fontStyle = 'normal';
      anchorTag1.style.fontWeight = '400';
      anchorTag1.style.fontSize = '16px';
      anchorTag1.style.color = '#000';
      anchorTag1.style.textDecoration = 'none';

      anchorTag2.style.display = 'block';
      anchorTag2.style.fontFamily = 'Poppins';
      anchorTag2.style.fontStyle = 'normal';
      anchorTag2.style.fontWeight = '400';
      anchorTag2.style.fontSize = '16px';
      anchorTag2.style.color = '#000';
      anchorTag2.style.textDecoration = 'none';

      anchorTag3.style.display = 'block';
      anchorTag3.style.fontFamily = 'Poppins';
      anchorTag3.style.fontStyle = 'normal';
      anchorTag3.style.fontWeight = '400';
      anchorTag3.style.fontSize = '16px';
      anchorTag3.style.color = '#000';
      anchorTag3.style.textDecoration = 'none';

      anchorTag4.style.display = 'block';
      anchorTag4.style.fontFamily = 'Poppins';
      anchorTag4.style.fontStyle = 'normal';
      anchorTag4.style.fontWeight = '400';
      anchorTag4.style.fontSize = '16px';
      anchorTag4.style.color = '#000';
      anchorTag4.style.textDecoration = 'none';

      work[i].style.display = 'none';
      about[i].style.display = 'none';
      contact[i].style.display = 'none';
      footerLinks[i].style.display = 'none';
    }
  }
}

for (let i = 0; i < menu.length; i += 1) {
  menu[i].addEventListener('click', toggleMenu);
}
