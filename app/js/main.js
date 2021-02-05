const menu = document.querySelector('.menu__link');
const dropdown = document.querySelector('.menu__dropdown');
console.log(dropdown);

menu.forEach(item => () => {
  item.addEventListener('mouseover', () =>{
    dropdown.classList.add('show')
  })
});