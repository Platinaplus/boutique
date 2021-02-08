(function ($) {
  $(window).on("load", function () {
    $(window).scroll(function () {
      $(".header").toggleClass("scroll", $(this).scrollTop() > 0);
      $(".header").toggleClass("up", $(this).scrollTop() > 10);
    });

    $(".modal__content").mCustomScrollbar({
      theme: "dark-3",
    });

    $(".class__btn").on("click", function (e) {
      e.preventDefault();
      $(".modal").addClass("visible");
      $("body").addClass("noScroll");
    });

    $(".modal__close, .modal__overlay").on("click", (e) => {
      $(".modal").removeClass("visible");
      $(".modal__mobile").removeClass("appear");
      $("body").removeClass("noScroll");
      $(".modal__form").trigger("reset");
      $("input[name=phone]").parent().removeClass("invalid");
      $("input[name=phone]").parent().removeClass("valid");
      $("input[name=name]").parent().removeClass("invalid");
      $("input[name=name]").parent().removeClass("valid");
      $("input[name=email]").parent().removeClass("invalid");
      $("input[name=email]").parent().removeClass("valid");
      $(".modal__btn").removeClass("able");
    });

    const regExpValidPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const regExpValidName = /^[a-zA-Zа-яА-Я\-\s]+[a-zA-Zа-яА-Я\-\s]+$/;
    const regExpValidEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/;

    function isValid(selector, pattern) {
      let value = $(selector).val();
      if (pattern.test(value) && value) {
        return true;
      } else {
        return false;
      }
    }

    let phone = false,
        name = false,
        email = false;

    $(".modal__form").on("change", (e) => {
      const target = e.target;
      const parent = target.closest(".modal__label");

      if (target.name === "name") {
        name = isValid(e.target, regExpValidName);
        if (name) {
          $(parent).removeClass("invalid");
          $(parent).addClass("valid");
        } else {
          $(parent).removeClass("valid");
          $(parent).addClass("invalid");
        }
        isComplate();
      }
      if (e.target.name === "phone") {
        phone = isValid(e.target, regExpValidPhone);
        if (phone) {
          $(parent).removeClass("invalid");
          $(parent).addClass("valid");
        } else {
          $(parent).removeClass("valid");
          $(parent).addClass("invalid");
        }
        isComplate();
      }
      if (e.target.name === "email") {
        email = isValid(e.target, regExpValidEmail);
        if (email) {
          $(parent).removeClass("invalid");
          $(parent).addClass("valid");
        } else {
          $(parent).removeClass("valid");
          $(parent).addClass("invalid");
        }
        isComplate();
      }
      if (target.name === "check") {
        isComplate();
      }
    });

    function isComplate() {
      $(".modal__btn").removeClass("able");
      let flag = true;
      if (phone == false) flag = false;
      if (name == false) flag = false;
      if (email == false) flag = false;
      if ($(".modal__checkbox-hide").prop("checked") != true) {
        flag = false;
      }
      if (flag == true) {
        $(".modal__btn").removeAttr("disabled");
        $(".modal__btn").addClass("able");
      } else {
        $(".modal__btn").attr("disabled", "disabled");
      }
    }

    // $("input[name = phone]").mask("(999) 999-99-99");

    //MOBILE MENU-----------------------------------

    $(".header__btn").on("click", (e) => {
      $(".mobile").toggleClass("mobile-show");
      $(".header__btn").toggleClass("close");
    });

    $(".mobile__links").on("click", function (e) {
      e.preventDefault();
      let svg = $(this).closest(".mobile__inner").next(".mobile__svg");
      let svgClose = $(this).closest(".mobile__inner").next(".mobile__close");
      console.log(svgClose);

      $(".mobile__links").removeClass("rose");
      $(this).addClass("rose");
      $(".mobile__subcategory").removeClass("mobile__subcategory--active");
      $($(this).attr("href")).toggleClass("mobile__subcategory--active");
      $(".mobile__svg").removeClass("on");
      $(".mobile__svg--close").removeClass("close");
      svg.addClass("on");
      svgClose.addClass("on");
    });

    $(".mobile__close").on("click", function (e) {
      console.log(this);
      e.preventDefault();
      $(".mobile__subcategory").removeClass("mobile__subcategory--active");
      $(this).removeClass("on");
      $(".mobile__links").removeClass("rose");
    });
  });
})(jQuery);
