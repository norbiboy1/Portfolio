const menu = document.querySelectorAll('.bars');
const menuList1 = document.querySelector('.bars1');
const menuList2 = document.querySelector('.bars2');
const menuList3 = document.querySelector('.bars3');
const backgroundImg = document.querySelector('.img-background');

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
      menuList3.style.display = 'block';
      menuList3.style.rotate = '0deg';
      menuList3.style.top = '15px';
      menuDesktop[i].style.display = 'none';
      work[i].style.marginTop = '0px';
      backgroundImg.style.display = 'block';
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
      menuList2.style.display = 'none';
      menuList3.style.rotate = '135deg';
      menuList3.style.top = '7px';

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
      anchorTag2.style.display = 'block';
      anchorTag3.style.display = 'block';
      anchorTag4.style.display = 'block';

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
