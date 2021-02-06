(function ($) {
  $(window).on("load", function () {
    $(window).scroll(function () {
      $(".header").toggleClass("scroll", $(this).scrollTop() > 0);
    });

    $(".modal__content").mCustomScrollbar({
      theme: "dark-3",
    });

    $(".class__btn").on("click", function (e) {
      e.preventDefault();
      $(".modal").addClass("visible");
      $("body").addClass("noScroll");
    });

    $(".modal__close").on("click", (e) => {
      $(".modal").removeClass("visible");
      $("body").removeClass("noScroll");
      $(".modal__form").trigger("reset");
      $("input[name=phone]").parent().removeClass("invalid");
      $("input[name=phone]").parent().removeClass("valid");
      $("input[name=name]").parent().removeClass("invalid");
      $("input[name=name]").parent().removeClass("valid");
      $("input[name=email]").parent().removeClass("invalid");
      $("input[name=email]").parent().removeClass("valid");
      $(".modal__btn").removeClass("able")
    });

    const regExpValidPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
    const regExpValidName = /^[a-zA-Zа-яА-Я\-]+\s+[a-zA-Zа-яА-Я\-]+$/;  
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
      email = false,
      flag = true;

    $(".modal__form").on("change", (e) => {
      const target = e.target;
      const parent = target.closest('.modal__label');
      
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
      if(target.name === "check") {
       
        isComplate();
      }
    });

    function isComplate() {
      let flag = true;
      if (phone == false) flag = false;
      if (name == false) flag = false;
      if (email == false) flag = false;
      if($(".modal__checkbox-hide").prop("checked") != true) {flag = false};
     
      if (flag == true) {
        $(".modal__btn").removeAttr("disabled");
        $(".modal__btn").addClass("able");
      } else {
        $(".modal__btn").attr("disabled", "disabled");
      }
    }
  });
})(jQuery);
