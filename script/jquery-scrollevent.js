(function(){
 
    var special = jQuery.event.special, //新自定義事件
        uid1 = 'D' + (+new Date()), 
        uid2 = 'D' + (+new Date() + 1);
 
    special.scrollstart = {
        setup: function() {
 
            var timer,
                handler =  function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer); 
                        //當timer存在時，清除timer,避免與scrollstop事件衝突
                    } else {
                        evt.type = 'scrollstart'; 
                        jQuery.event.dispatch.apply(_self, _args);
                        //清除timer後可確認scrollstart事件正在執行
                    }
 
                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency); 
 
                };
 
            jQuery(this).bind('scroll', handler).data(uid1, handler);
            //將handler結果傳入uid1使用
 
        },
        teardown: function(){
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
            //結束後移除參數
        }
    };
 
    special.scrollstop = {
        latency: 200,
        setup: function() {
 
            var timer,
                    handler = function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer);
                        //當timer存在時，清除timer,避免與scrollstart事件衝突
                    }
 
                    timer = setTimeout( function(){
 
                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.dispatch.apply(_self, _args);
 
                    }, special.scrollstop.latency);
 
                };
 
            jQuery(this).bind('scroll', handler).data(uid2, handler);
 
        },
        teardown: function() {
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
        }
    };
 
})();