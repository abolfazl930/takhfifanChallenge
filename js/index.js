$(function () {

  var $$width = Math.max(window.innerWidth, window.innerHeight);

  function molileImageShow() {
    $("#main__layer-one__animate-image-nexus").addClass(
      "main__layer-one__animate-image-iphone--clicked"
    );
    $("#main__layer-one__animate-image-iphone").addClass(
      "main__layer-one__animate-image-nexus--clicked"
    );
  }

  function molileImageHidden() {
    $("#main__layer-one__animate-image-nexus").hide();
    $("#main__layer-one__animate-image-iphone").hide();
  }

  function socialMeidiaShow() {
    $("#main__layer-one__social-media").addClass(
      "main__layer-one__social-media--clicked"
    );
  }

  function socialMeidiaHidden() {
    $("#main__layer-one__social-media").addClass(
      "main__layer-one__social-media--hidden"
    );
  }

  function downloadBoxHidden() {
    $("#main__layer-one__download-box").hide();
  }

  function addClassMainCircle() {
    $("#main__circle").addClass("main__circle--clicked");
  }


  $("#main__circle").css({ width: $$width, height: $$width });

  $("#main__event").on("click", function () {
    molileImageShow();
    socialMeidiaShow();
  });


  function searchImageShow() {
    $(".main__layer-two__search-image").addClass("main__layer-two__search-image--clicked")
  }
  function categoryImageShow() {
    $(".main__layer-two__category-image").addClass("main__layer-two__category-image--clicked")
  }
  function logoShow() {
    $(".logo").addClass("logo-show");
  }
  function titleShow() {
    $(".title").addClass("title-show");
  }
  function buttonWrapperShow() {
    $(".button-wrapper").addClass("button-wrapper--clicked");
  }

  $(".button-wrapper__button").on("click", function () {
    $(this).siblings(".button-wrapper__dropdown-wrapper__dropdown-content").slideToggle();
  });

  $("#app-download-btn").on("click", function (e) {
    e.stopPropagation();
    downloadBoxHidden();
    molileImageHidden();
    addClassMainCircle();
    socialMeidiaHidden();
    searchImageShow();
    categoryImageShow();
    logoShow();
    titleShow();
    buttonWrapperShow();
  });



});
