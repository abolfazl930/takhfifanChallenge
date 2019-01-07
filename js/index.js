$(function () {

  var $$width = Math.max(window.innerWidth, window.innerHeight);

  // functions START
  function molileImageShow() {
    $("#main__animate-image-nexus").addClass(
      "main__animate-image-iphone--clicked"
    );
    $("#main__animate-image-iphone").addClass(
      "main__animate-image-nexus--clicked"
    );
  }

  function molileImageHidden() {
    $("#main__animate-image-nexus").hide();
    $("#main__animate-image-iphone").hide();
  }

  function socialMeidiaShow() {
    $("#main__social-media").addClass(
      "main__social-media--clicked"
    );
  }

  function socialMeidiaHidden() {
    $("#main__social-media").addClass(
      "main__social-media--hidden"
    );
  }

  function downloadBoxHidden() {
    $("#main__download-box").hide();
  }

  function addClassMainCircle() {
    $("#main__circle").addClass("main__circle--clicked");
  }

  function searchImageShow() {
    $(".main__search-image").addClass("main__search-image--clicked")
  }

  function categoryImageShow() {
    $(".main__category-image").addClass("main__category-image--clicked")
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
  // functions END

  //event START
  $(".button-wrapper__button").on("click", function () {
    $(this).siblings(".button-wrapper__dropdown-wrapper__dropdown-content").slideToggle();
  });

  $("#main__circle").css({ width: $$width, height: $$width });

  $("#main__event").on("click", function () {
    molileImageShow();
    socialMeidiaShow();
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
  //event END


});
