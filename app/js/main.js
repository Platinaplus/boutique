$(window).scroll(function () {
  $(".header").toggleClass(
    "scroll",
    $(this).scrollTop() > 0
  );
});

