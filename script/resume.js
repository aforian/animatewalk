$(document).ready(function(){
    $(window).scroll(function(){
        var wintop = $(window).scrollTop(),
            winheight = $(window).height(),
            htmlheight = $(document).height(),
            scrollwithin = [0,1600,10200,12600,14600,15200],
            percenttop = (wintop+winheight)/htmlheight*100;
        $(".page-progress").css({"width":percenttop+"%"});
        for(i=0; i<$navitem_num; i++){
            var j=i+1;
            if( wintop >= scrollwithin[i] && wintop < scrollwithin[j]){
                $(".nav-item").removeClass('active').eq(i).addClass('active');
            }
        };
        var $right_hand=$(".right-shoulder, .right-arm");
        if( wintop==0 || percenttop>99.9){
            $right_hand.addClass("sayhi");
        }else{
            $right_hand.removeClass("sayhi");
        }
    });
    
    /*導覽列按鈕---*/
    var $navitem = $(".nav-item"),
        $navitem_num = $navitem.length,
        scrolllong = [0,3000,11500,13200,14600];
    for(var i=0; i<$navitem_num; i++){
        $navitem.eq(i).click({num:i},function(e){
            $navitem.removeClass('active');
            $(this).addClass('active');
            n=e.data.num;
            $("html,body").stop().animate({"scrollTop":scrolllong[n]},800,'easeInOutExpo');
        });
    }
    $("#nav-icon, #nav-back").click(function(){
        $("#nav-mobile").toggleClass('active');
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
    autoheight(".boy",2);
    autoheight(".grad-wrap",2);
    $(window).resize(function(){
        autoheight(".boy",2);
        autoheight(".grad-wrap",2);
    });
    function autoheight (selector,radio){
        var item_width = $(selector).width();
        $(selector).css({"height": item_width* radio});
    }
    /*--重置人物高度end--*/
    
})