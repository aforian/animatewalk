$(document).ready(function(){
    $(window).scroll(function(){
        var wintop = $(window).scrollTop(),
            winheight = $(window).height(),
            htmlheight = $(document).height(),
            section_num = $(".home-section").length;
        $(".page-progress").css({"width":(wintop+winheight)/htmlheight*100+"%"});

        for(i=0; i<5; i++){
            if( wintop >= $(".home-section").eq(i).offset().top && wintop < $(".home-section").eq(i+1).offset().top){
                $(".nav-item").removeClass('active').eq(i).addClass('active');
            }
        };
        /*scroll動畫試作*/
        console.log(wintop);
        var anison = parseFloat($(".title").css("left")),
            aniparent = parseFloat($(".title").parent().css("width")),
            anibegin = Math.round(anison/aniparent*100);
        if(wintop>=100 && wintop<1000){
            aniresult = 10-(30/900)*(wintop-100);
            $(".title").css({"left": aniresult+"%"});
        }else if(wintop<100){
            $(".title").css({"left": "10"+"%"});
        }else{
            $(".title").css({"left": "-20"+"%"});
        }
        /*scroll動畫試作end*/
        
    });
    
    
    /*導覽列按鈕---*/
    $(".nav-item").click(function(e){
        var scrollpos =  $(this).attr("href");
        $("html,body").animate({"scrollTop":$(scrollpos).offset().top},700,'easeInOutExpo');
        return false;
    })
    /*導覽列按鈕---end*/
    
    /* 人物動態事件----*
    $(window).scroll(function(){
        if( wintop >= $("#portfolio").offset().top){
            $(".right-shoulder, .right-arm").addClass("sayhi");
        }else{
            $(".right-shoulder, .right-arm").removeClass("sayhi");
        };
    })
    * 人物動態事件end----*/
    $(".btn-sayhi").click(function(){
        $(".right-shoulder, .right-arm").toggleClass("sayhi");
    });
    $(".btn-walk").click(function(){
        $(".left-shoulder, .right-shoulder, .right-leg, .left-leg").toggleClass("active");
    });
    $(window).bind('scrollstart', function(){
        $(".left-shoulder, .right-shoulder, .right-leg, .left-leg").addClass("active");
    });
    $(window).bind('scrollstop', function(e){
        $(".left-shoulder, .right-shoulder, .right-leg, .left-leg").removeClass("active");
    })
    
    
    
    heightresize();
    $(window).resize(function(){
        heightresize();
    });
    function heightresize(){
        var boy_width;
        boy_width = $(".boy").width();
        $(".boy").css({"height":boy_width*2});
    };
})