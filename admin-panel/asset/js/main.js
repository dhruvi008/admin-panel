$(document).ready(function () {
  $(".click-icon").click(function () {
    $(".fa-bars-staggered").toggleClass("disp-none");
    $(".fa-arrow-right").toggleClass("disp-block");
    $("aside").toggleClass("aside-sm");
    $("header, main").toggleClass("small-width");
    $(".nav").toggleClass("disp-none");
    $(".nav1").toggleClass("disp-block");
    $(".logo-img").toggleClass("disp-none");
    $(".logo-img1").toggleClass("disp-block");
  });

  //accordian
  $(".nav-option, .nav-option1, .nav-option2, .nav-option3").click(function () {
    $(this).find(".fa-chevron-right").toggleClass("move-down");
    $(this).next().slideToggle(500);
  });

  $(".nav-option").click(function () {
    $(".fa-chevron-right").not($(this).find(".fa-chevron-right")).removeClass("move-down");
    $(".sub-ul, .sub-ul-1, .sub-ul-2").not($(this).next()).slideUp(500);
  });
  $(".nav-option1").click(function () {
    $(".nav-option1 .fa-chevron-right").not($(this).find(".fa-chevron-right")).removeClass("move-down");
    $(".sub-ul-1, .sub-ul-2").not($(this).next()).slideUp(500);
  });
  $(".nav-option2").click(function () {
    $(".sub-ul-2").not($(this).next()).slideUp(500);
  });

  $(".head-icon").click(function () {
    $(this).find(".head-icon-click").toggleClass("visi-visible");
  });

  $(".owner-main").click(function () {
    $(".sub-owner").toggleClass("visi-visible");
  });

  $(".aside-hide-btn").click(function () {
    $(".nav").toggleClass("disp-block");
    $("aside").toggleClass("disp-block");
  });
});
