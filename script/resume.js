$(document).ready(function(){
    $(".btn-sayhi").click(function(){
        $(".right-shoulder, .right-arm").toggleClass("sayhi");
    });
    $(".btn-walk").click(function(){
        $(".left-shoulder, .right-shoulder, .right-leg, .left-leg").toggleClass("active");
    });
    
    for(i=0;i<100;i++){
        $("body").append("<div>Blocker</div>");
    }


    $(window).bind('scrollstart', function(){
        $(".left-shoulder, .right-shoulder, .right-leg, .left-leg").addClass("active");
    });
    $(window).bind('scrollstop', function(e){
        $(".left-shoulder, .right-shoulder, .right-leg, .left-leg").removeClass("active");
    })
    
})