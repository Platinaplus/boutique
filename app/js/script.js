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
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
    items[i].children[0].classList.remove("on");
  }
};

const mouseHere = function (e){
	e = e || window.event

	if (e.pageX == null && e.clientX != null ) { 
		const html = document.documentElement
		const body = document.body
			// e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0)
		e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0)
  }
  return e.pageY;
}

const menu = Array.from(document.querySelectorAll(".menu__link"));
const dropdown = document.querySelector(".menu__dropdown");
const header = document.querySelector(".header__inner");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseover", function (e) {
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
      target.classList.add("active");
      document.addEventListener("click", function (e) {
        if (
          e.target != dropdown &&
          e.target != document.querySelector(".menu__dropdown-inner")
        ) {
          dropdown.classList.remove("show");
          arrow.classList.remove("on");
          target.classList.remove("active");
        }
      });
      document.addEventListener('mousemove', function(e){
        mouseHere(e);
        if(e.pageY > 343){
          dropdown.classList.remove("show");
          arrow.classList.remove("on");
          target.classList.remove("active");
        }
      })
    }
    if (target.getAttribute("data-name") == "equp") {
      reset(".container-drop", menu);
      new Drop(
        "images/menu.jpg",
        "акция",
        "Оборудование",
        ".container-drop"
      ).render();
      dropdown.classList.add("show");
      arrow.classList.add("on");
      target.classList.add("active");
      document.addEventListener("click", function (e) {
        if (
          e.target != dropdown &&
          e.target != document.querySelector(".menu__dropdown-inner")
        ) {
          dropdown.classList.remove("show");
          arrow.classList.remove("on");
          target.classList.remove("active");
        }
      });
      document.addEventListener('mousemove', function(e){
        mouseHere(e);
        if(e.pageY > 343){
          dropdown.classList.remove("show");
          arrow.classList.remove("on");
          target.classList.remove("active");
        }
      })
    }
    if (target.getAttribute("data-name") == "bijou") {
      reset(".container-drop", menu);
      new Drop(
        "images/menu.jpg",
        "акция",
        "Украшения",
        ".container-drop"
      ).render();
      dropdown.classList.add("show");
      arrow.classList.add("on");
      target.classList.add("active");
      document.addEventListener("click", function (e) {
        if (
          e.target != dropdown &&
          e.target != document.querySelector(".menu__dropdown-inner")
        ) {
          dropdown.classList.remove("show");
          arrow.classList.remove("on");
          target.classList.remove("active");
        }
      });
      document.addEventListener('mousemove', function(e){
        mouseHere(e);
        if(e.pageY > 343){
          dropdown.classList.remove("show");
          arrow.classList.remove("on");
          target.classList.remove("active");
        }
      })
    }
    if (target.getAttribute("data-name") == "blog") {
      reset(".container-drop", menu);
      new Drop("images/menu.jpg", "акция", "Блог", ".container-drop").render();
      dropdown.classList.add("show");
      arrow.classList.add("on");
      target.classList.add("active");
      document.addEventListener("click", function (e) {
      
        if (
          e.target != dropdown &&
          e.target != document.querySelector(".menu__dropdown-inner")
        ) {
          dropdown.classList.remove("show");
          arrow.classList.remove("on");
          target.classList.remove("active");
        }
      });
      document.addEventListener('mousemove', function(e){
        mouseHere(e);
        if(e.pageY > 343){
          dropdown.classList.remove("show");
          arrow.classList.remove("on");
          target.classList.remove("active");
        }
      })
    }
  });
}

const overlay = document.querySelector(".overlay");
const overlayMobile = document.querySelector(".overlay__mob");
const video = document.querySelector(".video");
const klass = document.querySelector(".class");
const shop = document.querySelector(".shop");
const btn = document.querySelector(".class__btn");

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }

  const distanceToTop = klass.scrollTop;
  const elementHeight = element.offsetHeight;
  const scrollTop = document.documentElement.scrollTop;

  let opacity = 1;

  if (scrollTop > distanceToTop) {
    opacity = 0.3 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(overlay);
  fadeOutOnScroll(video);
  fadeOutOnScroll(overlayMobile);
}

window.addEventListener("scroll", function () {
  posTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
          btn.style.backgroundColor = "transparent";
          klass.classList.add("fade");
  scrollHandler();
  if (posTop == 0) {
    btn.style.backgroundColor = "#F08B98";
    klass.classList.remove("fade");
  }
});
