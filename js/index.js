$(function(){

    function addClassMolileImage(){
        $("#main__layer-one__animate-image-nexus").addClass("main__layer-one__animate-image-iphone--clicked");
        $("#main__layer-one__animate-image-iphone").addClass("main__layer-one__animate-image-nexus--clicked");
    }

    function addClassSocialMeidia(){
        $("#main__layer-one__social-media").addClass("main__layer-one__social-media--clicked")
    }

    $("#main__layer-one").on("click",function(){
        addClassMolileImage();
        addClassSocialMeidia();
    })
});