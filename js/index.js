$(function(){

    function addClassMolileImage(){
        $("#main__layer-one__animate-image-nexus").addClass("main__layer-one__animate-image-iphone--clicked");
        $("#main__layer-one__animate-image-iphone").addClass("main__layer-one__animate-image-nexus--clicked");
    }

    function addClassSocialMeidia(){
        $("#main__layer-one__social-media").addClass("main__layer-one__social-media--clicked")
    }

    $("#main__event").on("click",function(e){
        e.stopPropagation();
        addClassMolileImage();
        addClassSocialMeidia();
    });

    $("button").on("click",function(){
        $("#main__layer-one__download-box").css("display","none")
        $("#main__circle").addClass("main__circle--clicked");
    })
});