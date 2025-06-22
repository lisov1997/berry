const nav = document.querySelector('.page-header__nav');
const navToggler = document.querySelector('.page-header__nav-toggler');

nav.classList.add('page-header__nav--closed');

navToggler.addEventListener('click', () => {
  if (nav.classList.contains('page-header__nav--closed')) {
    nav.classList.remove('page-header__nav--closed');
    nav.classList.add('page-header__nav--opened');
  } else {
    nav.classList.add('page-header__nav--closed');
    nav.classList.remove('page-header__nav--opened');
  }
});
