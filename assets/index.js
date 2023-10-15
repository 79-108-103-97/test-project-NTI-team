$(document).ready(function () {
  /*  toggler header menu*/
  $(".header__toggle-menu-button").hover(
    function () {
      $(".header__toggle-menu-container").slideDown(300).show();
    },
    function () {
      $(".header__toggle-menu-container").slideUp(300);
    }
  );

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
      if (index == count) {
        $(this).addClass("slider__controls-paggination-dot_active");
      } else {
        $(this).removeClass("slider__controls-paggination-dot_active");
      }
    });
  }

  setInterval(function () {
    count++;
    if (count >= countButtons.length) {
      count = 0;
    }
    sliderMove(count);
  }, 4000);

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

  /*validation form */
  $("#submit").on("click", function () {
    $("form").trigger("submit");
  });

  $("form").on("submit", function (event) {
    let name = $("#name");
    let phone = $("#phone");

    if (name.val().length > 2 && name.val().search(/\d/) < 0) {
      name.css("border", "1.5px solid rgba(242, 242, 242, 0.5)");
      let filter =
        /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
      if (filter.test(phone.val())) {
        phone.css("border", "1.5px solid rgba(242, 242, 242, 0.5)");
        return;
      } else {
        phone.val("");
        phone.css("border", "1.5px solid red");
        phone.attr("placeholder", "Неверный номер телефона");
      }
    } else {
      name.val("");
      name.css("border", "1.5px solid red");
      name.attr(
        "placeholder",
        "Не может быть короче 2 символов и содержать цифры"
      );
    }
    event.preventDefault();
  });
});
