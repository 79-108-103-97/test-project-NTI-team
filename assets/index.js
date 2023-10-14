$(document).ready(function () {
  /*  toggler header menu*/
  $(".header__toggle-menu-button").hover(function () {
    $(".header__toggle-menu-container").toggleClass(
      "header__toggle-menu-container_hidden"
    );
  });

  /* toggler mobilу burger menu*/
  $(".header__burger-menu-button").on("click", function () {
    $(".header__burger-menu_overlay").toggleClass("hidden");
    $(".header__nav").toggleClass("hidden");
    $("body").toggleClass("noscroll");
    $(".header__burger-menu-lines").toggleClass(
      "header__burger-menu-lines_rotate"
    );
  });

  /* slider */
  const nextButton = $(".slider__controls-paggination-next");
  const countButtons = $(".slider__controls-paggination-dot");
  const items = $(".slider__controls-items");
  const item = $(".slider__controls-item");
  let width = items.width();
  let count = 0;

  function sliderMove(count) {
    item.each(function (index) {
      if (index == count) {
        $(this).css(
          "transform",
          "translate(-" + count * width + "px) scale(1)"
        );
        $(this).removeClass("slider__controls-item_hide");
      } else {
        $(this).css(
          "transform",
          "translate(-" + count * width + "px) scale(0.5)"
        );
        $(this).addClass("slider__controls-item_hide");
      }
    });
    addActive(count);
  }
  function addActive(count) {
    countButtons.each(function (index) {
      console.log(index == count);
      if (index == count) {
        $(this).addClass("slider__controls-paggination-dot_active");
      } else {
        $(this).removeClass("slider__controls-paggination-dot_active");
      }
    });
  }
  nextButton.on("click", function () {
    count++;
    if (count >= countButtons.length) {
      count = 0;
    }
    sliderMove(count);
  });
  countButtons.each(function (index) {
    $(this).on("click", function () {
      count = index;
      sliderMove(count);
    });
  });
});
