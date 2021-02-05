// class Drop {
//   constructor(src, alt, title, parentSelector, ...classes) {
//       this.src = src;
//       this.alt = alt;
//       this.title = title;
//       this.classes = classes;
//       this.parent = document.querySelector(parentSelector);
//   }
// }

//   render() {
//       const element = document.createElement('div');

//       if (this.classes.length === 0) {
//           this.classes = "menu__dropdown-inner";
//           element.classList.add(this.classes);
//       } else {
//           this.classes.forEach(className => element.classList.add(className));
//       }

//       element.innerHTML = `
//       <li class="menu__dropdown-item"><a class=menu__dropdown-link href="#">${this.title}1</a>
//         <ul class="menu__inner-items">
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка1</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка2</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка3</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка4</a></li>
//         </ul>
//       </li>
//       <li class="menu__dropdown-item"><a class=menu__dropdown-link href="#">${this.title}2</a>
//         <ul class="menu__inner-items">
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка1</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка2</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка3</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка4</a></li>
//         </ul>
//       </li>
//       <li class="menu__dropdown-item"><a class=menu__dropdown-link href="#">${this.title}3</a>
//         <ul class="menu__inner-items">
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка1</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка2</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка3</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка4</a></li>
//         </ul>
//       </li>
//       <li class="menu__dropdown-item"><a class=menu__dropdown-link href="#">${this.title}4</a>
//         <ul class="menu__inner-items">
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка1</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка2</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка3</a></li>
//           <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка4</a></li>
//         </ul>
//       </li>
//       <img class="menu__inner-img" src=${this.src} alt=${this.alt}>
//       `;
//       this.parent.append(element);
//   }
// }

// const menu = document.querySelectorAll('.menu__item');

// for (let i = 0; i < menu.length; i++) {

//   menu[i].addEventListener('click', function (e) {
//     const target = e.target;
//     if(target.getAttribute('data-name') == 'cosmetic'){
//       new Drop(
//         "images/menu.jpg",
//         "акция",
//         "Косметика",
//         ".container-drop",
//         ".menu__dropdown-inner .show"
//       ).render();
//     }
//     if(target.getAttribute('data-name') == 'equp'){
//       new Drop(
//         "images/menu.jpg",
//         "акция",
//         "Оборудование",
//         ".container-drop",
//         ".menu__dropdown-inner .show"
//       ).render();
//     }
//   });
// }
