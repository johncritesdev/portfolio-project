$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".u-scroll-disappear").css({ "opacity": "0" })
    } else {
      $(".u-scroll-disappear").css({ "opacity": "1" })
    }
  })
})

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".u-scroll-container-background").css({ "opacity": "1" })
    } else {
      $(".u-scroll-container-background").css({ "opacity": "0" })
    }
  })
})