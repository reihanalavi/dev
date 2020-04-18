$(document).ready(function() {

  $(".backtop").hide();

  $(window).scroll(function() {

    if($(this).scrollTop() > $("#title").height()) {
      $(".backtop").fadeIn();
    } else {
      $(".backtop").fadeOut();
    }

    function isOnViewPort(elemen, offsets) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elemen).offset().top;
      var elemBottom = elemTop + $(elemen).height();

      // alert(docViewTop);
      // alert(docViewBottom);
      // alert(elemTop);
      // alert(elemBottom);

      return (((docViewBottom - elemTop) > offsets) && (elemBottom >= docViewTop));
    }

    // ====================================BODY==============================================

    if(isOnViewPort($(".title-body"), 400)) {
      $(".pp-reihan")
        .animate({
          width: '75%',
          opacity: '1'
        }, 2000);

      $(".title-text .p1")
        .animate({
          right: '50px',
          opacity: '1'
        }, 1000);

      $(".title-text .p2")
        .animate({
          left: '50px',
          opacity: '1'
        }, 1200);

      $(".title-text .p3")
        .animate({
          right: '50px',
          opacity: '1'
        }, 1400);

      $(".title-cp")
        .animate({
          opacity: '1',
          bottom: '0'
        }, 2000);

    }

    // ====================================ME==============================================

    if(isOnViewPort($(".heading-me"), 400)) {
      $(".me-image")
        .animate({
          opacity: '1'
        }, 2000);

      $(".me-text .p1")
        .animate({
          top: '50px',
          opacity: '1'
        }, 1000);

      $(".me-text .p2").delay(300)
        .animate({
          top: '40px',
          opacity: '1'
        }, 1000);

      $(".me-text .p3").delay(600)
        .animate({
          top: '30px',
          opacity: '1'
        }, 1000);

    }

    // ====================================PROJECTS==============================================

    if(isOnViewPort($("#projects"), 100)) {
      $(".projects-heading-img")
        .animate({
          top: '0',
          opacity: '1'
        }, 2000);
    }

    if(isOnViewPort($(".wits"), 100)) {
      $(".wits")
        .animate({
          left: '0',
          opacity: '1'
        }, 2000);
    }

    if(isOnViewPort($(".karaktera"), 100)) {
      $(".karaktera")
        .animate({
          right: '0',
          opacity: '1'
        }, 2000);
    }

    if(isOnViewPort($(".hoaksiber"), 100)) {
      $(".hoaksiber")
        .animate({
          left: '0',
          opacity: '1'
        }, 2000);
    }

    if(isOnViewPort($(".tugasque"), 100)) {
      $(".tugasque")
        .animate({
          right: '0',
          opacity: '1'
        }, 2000);
    }

    if(isOnViewPort($(".alzorakata"), 100)) {
      $(".alzorakata")
        .animate({
          left: '0',
          opacity: '1'
        }, 2000);
    }

    if(isOnViewPort($(".gallery"), 100)) {
      $(".gallery")
        .animate({
          top: '0',
          opacity: '1'
        }, 2000);
    }

    if(isOnViewPort($(".contact"), 100)) {
      $(".contact")
        .animate({
          top: '0',
          opacity: '1'
        }, 2000);
    }

    if(isOnViewPort($("#contact p"), 100)) {
      $("#contact p")
        .animate({
          top: '0',
          opacity: '1'
        }, 2000);

      $(".email").delay(200)
        .animate({
          top: '0',
          opacity: '1'
        }, 1000);

      $(".fb").delay(400)
        .animate({
          bottom: '0',
          opacity: '1'
        }, 1000);

      $(".ig").delay(600)
        .animate({
          top: '0',
          opacity: '1'
        }, 1000);

      $(".wa").delay(800)
        .animate({
          bottom: '0',
          opacity: '1'
        }, 1000);
    }

  });

$("#btnme").click(function() {
  $("html,body").animate({
    scrollTop: $("#me").offset().top
  }, 1500);
});

$("#btnprojects").click(function() {
  $("html,body").animate({
    scrollTop: $("#projects").offset().top
  }, 1500);
});

$("#btngallery").click(function() {
  $("html,body").animate({
    scrollTop: $("#gallery").offset().top
  }, 1500);
});

$("#btncontact").click(function() {
  $("html,body").animate({
    scrollTop: $("#contact").offset().top
  }, 1500);
});

$(".backtop").click(function() {
  $("html,body").animate({
    scrollTop: $("#title").offset().top
  }, 1500);
});

});
