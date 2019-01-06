$(function() {
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

  function downloadBoxHidden() {
    $("#main__layer-one__download-box").hide();
  }

  function addClassMainCircle() {
    $("#main__circle").addClass("main__circle--clicked");
  }

  var width = Math.max(window.innerWidth, window.innerHeight);
  $("#main__circle").css({ width: width, height: width });

  $("#main__event").on("click", function() {
    molileImageShow();
    socialMeidiaShow();
  });

  $("button").on("click", function(e) {
    e.stopPropagation();
    downloadBoxHidden();
    molileImageHidden();
    addClassMainCircle();
  });
});
