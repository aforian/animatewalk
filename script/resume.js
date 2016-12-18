$(document).ready(function(){
    $(window).scroll(function(){
        var wintop = $(window).scrollTop(),
            winheight = $(window).height(),
            htmlheight = $(document).height(),
            percenttop = (wintop+winheight)/htmlheight*100,
            home_section = $(".home-section");
            section_num = home_section.length;
        $(".page-progress").css({"width":percenttop+"%"});
        for(i=0; i<section_num; i++){
            j=i+1;
            if( wintop >= home_section.eq(i).offset().top && wintop < home_section.eq(j).offset().top){
                $(".nav-item").removeClass('active').eq(i).addClass('active');
            }
        };
        console.log(wintop);
        
        var right_hand=$(".right-shoulder, .right-arm");
        if( wintop==0 || percenttop>99.9){
            right_hand.addClass("sayhi");
        }else{
            right_hand.removeClass("sayhi");
        }
    });
    
    /*導覽列按鈕---*/
    $(".nav-item").click(function(e){
        var scrollpos =  $(this).attr("href");
        $("html,body").animate({"scrollTop":$(scrollpos).offset().top},700,'easeInOutExpo');
        return false;
    })
    /*導覽列按鈕---end*/

    
    /*--滾動人物動態--*/
    $(window).bind('scrollstart', function(){
        $(".left-shoulder, .right-shoulder, .right-leg, .left-leg").addClass("active");
    });
    $(window).bind('scrollstop', function(e){
        $(".left-shoulder, .right-shoulder, .right-leg, .left-leg").removeClass("active");
    })
    /*--滾動人物動態end--*/
    
    /*--重置人物高度--*/
    $(window).resize(function(){
        $(".boy").heightresize(2);
        $(".grad-wrap").heightresize(2);
    });
    (function($){
        $.fn.extend({
            heightresize: function(radio){
                return this.each(function(){
                    var item_width = $(this).width();
                    return $(this).css({"height": item_width* radio});
                });
            }
        });
    })(jQuery);
    /*--重置人物高度end--*/
    
    var s = skrollr.init({});
})