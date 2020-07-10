'use strict';

function tabSelect(lang) {
    let tabs = [...document.querySelectorAll('.main__tabcontent')];
    tabs.forEach((item, index) => {
        tabs[index].style.display = "none";
    });
    document.getElementById(lang).style.display = "block";  
}

const button = document.querySelector('.main__buttons');

button.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('active')) {
    return null;
  } else {
    removePrev(target);
    target.classList.add('active');
  }
});

function removePrev() {
  [...document.querySelectorAll('.main__tablink')].forEach((item) => {
    item.classList.remove('active');
  });
};