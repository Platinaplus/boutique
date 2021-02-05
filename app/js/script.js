// const menu = document.querySelectorAll(".menu__link");
// const drop = document.querySelector(".menu__dropdown");
// console.log(menu);
// for (let i = 0; i < menu.length; i++) {
//   menu[i].addEventListener("mouseover", (e) => {
//     console.log(menu[i]);
//     drop.classList.add("show");
//     drop.addEventListener("mouseout", (e) => {
//       drop.classList.remove("show");
//     });
//   });
// }
function Drop(src, alt, title, parent, ...classes) {
  this.src = src;
  this.alt = alt;
  this.title = title;
  this.classes = classes;
  this.parent = document.querySelector(parent);
  this.render = function () {
    const element = document.createElement("div");

    if (this.classes.length === 0) {
      this.classes = "menu__dropdown-inner";
      element.classList.add(this.classes);
    } else {
      this.classes.forEach((className) => element.classList.add(className));
    }

    element.innerHTML = `
            <li class="menu__dropdown-item"><a class=menu__dropdown-link href="#">${this.title}1</a>
              <ul class="menu__inner-items">
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка1</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка2</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка3</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка4</a></li>
              </ul>
            </li>
            <li class="menu__dropdown-item"><a class=menu__dropdown-link href="#">${this.title}2</a>
              <ul class="menu__inner-items">
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка1</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка2</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка3</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка4</a></li>
              </ul>
            </li>
            <li class="menu__dropdown-item"><a class=menu__dropdown-link href="#">${this.title}3</a>
              <ul class="menu__inner-items">
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка1</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка2</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка3</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка4</a></li>
              </ul>
            </li>
            <li class="menu__dropdown-item"><a class=menu__dropdown-link href="#">${this.title}4</a>
              <ul class="menu__inner-items">
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка1</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка2</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка3</a></li>
                <li class="menu__inner-item"><a href="#" class="menu__inner-link">Ссылка4</a></li>
              </ul>
            </li>
            <img class="menu__inner-img" src=${this.src} alt=${this.alt}>
            `;
    this.parent.append(element);
  };
}

const reset = function (selector, items) {
  const container = document.querySelector(selector);
  container.innerHTML = "";
  for(let i=0; i < items.length; i++){
    items[i].classList.remove('active')
  }
};

const menu = Array.from(document.querySelectorAll(".menu__link"));
const dropdown = document.querySelector(".menu__dropdown");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseover", (e) => {
    e.preventDefault();
    const target = e.target;
    const arrow = target.children[0];
    if (target.getAttribute("data-name") == "cosmetic") {
      reset(".container-drop", menu);
      new Drop(
        "images/menu.jpg",
        "акция",
        "Косметика",
        ".container-drop"
      ).render();
      dropdown.classList.add("show");
      arrow.classList.add("on");
      // setTimeout(function () {
      //   dropdown.addEventListener("mouseout", () => {
      //     dropdown.classList.remove("show");
      //     arrow.classList.remove("on");
      //   }, 600);
      // });
    }
    if (target.getAttribute("data-name") == "equp") {
      reset(".container-drop");
      new Drop(
        "images/menu.jpg",
        "акция",
        "Оборудование",
        ".container-drop"
      ).render();
      dropdown.classList.add("show");
      arrow.classList.add("on");
      // setTimeout(function () {
      //   dropdown.addEventListener("mouseout", () => {
      //     dropdown.classList.remove("show");
      //     arrow.classList.remove("on");
      //   }, 600);
      // });
    }
    if (target.getAttribute("data-name") == "bijou") {
      reset(".container-drop");
      new Drop(
        "images/menu.jpg",
        "акция",
        "Украшения",
        ".container-drop"
      ).render();
      dropdown.classList.add("show");
      arrow.classList.add("on");
      // setTimeout(function () {
      //   dropdown.addEventListener("mouseout", () => {
      //     dropdown.classList.remove("show");
      //     arrow.classList.remove("on");
      //   }, 600);
      // });
    }
    if (target.getAttribute("data-name") == "blog") {
      reset(".container-drop");
      new Drop("images/menu.jpg", "акция", "Блог", ".container-drop").render();
      dropdown.classList.add("show");
      arrow.classList.add("on");
      target.classList.add("active");
      document.addEventListener("click", function (e) {
        console.log(e.target);
        if (e.target != dropdown && e.target != menu[i]) {
          dropdown.classList.remove("show");
          arrow.classList.remove("on");
          target.classList.remove("active");
        }
      });
    }
  });
}
