const nav = document.querySelector('.nav__menu');
  const openNavBtn = document.querySelector('#open-menu-btn');
  const closeNavBtn = document.querySelector('#close-menu-btn');

  const openNav = () =>{
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
  }
  const closeNav = () =>{
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
  }
  openNavBtn.addEventListener('click',openNav);
  closeNavBtn.addEventListener('click',closeNav);