(function($){
    $.fn.rjzoomer = function(options){
        var elem = $(this);
        var settings = $.extend({
            scale: 4,
        }, options);
        var scale = settings.scale;

        var elem_width = elem.width();
        var elem_height = elem.height();

        elem.mouseenter(function(){
            elem.css({"position": "relative"});

            if(!elem.find(".mouse").length){
                var mouse = '<div class="mouse"></div>';
                elem.append(mouse);
                mouse = elem.find(".mouse");
                mouse.css({
                    "width": elem_width / scale,
                    "height": elem_height / scale,
                    "position": "absolute",
                    "backgroundColor": "rgba(255,255,255,0.5)",
                    "top": 0
                });
            }else{
                mouse = elem.find(".mouse");
                mouse.show();
            }

            if(!elem.find(".zoom_div").length){
                var zoom_div = '<div class="zoom_div"></div>';
                elem.append(zoom_div);
                zoom_div = elem.find(".zoom_div");
                zoom_div.css({
                   "position":"absolute",
                   "width": "400px",
                   "height": "400px",
                   "overflow": "hidden",
                   "top": "10%",
                   "left": "110%"
               });
            }else{
                zoom_div = elem.find(".zoom_div");
                zoom_div.show();
            }
            var img_src = elem.find("img").attr("src");
            if(img_src.indexOf("_thumb") >= 0){
                img_src = img_src.replace("thumb", "full");
            }
            if(img_src != zoom_div.find("img").attr("src")){
                var i = '<img alt="" src="'+img_src+'" />';
                zoom_div.append(i);
            }


            
            img = zoom_div.find("img");
            img.css({
                "position": "absolute",
                "width": scale * 100 + "%",
                "height": scale * 100 + "%"
            });


            var m_w_2 = mouse.width() / 2;
            var m_h_2 = mouse.height() / 2;
            var i_w = img.width();
            var i_h = img.height();
            var z_w_2 = zoom_div.width() / 2;
            var z_h_2 = zoom_div.height() / 2;
            var m_l = (i_w - zoom_div.width()) * -1;
            var m_t = (i_h - zoom_div.height()) * -1;
            var m_m_l = elem_width - mouse.width();
            var m_m_t = elem_height - mouse.height();

            elem.mousemove(function(e){
                var offset = elem.offset();
                var top = -1 * (e.pageY - offset.top) / elem_height * i_h + z_h_2;
                var left = -1 * (e.pageX - offset.left) / elem_width * i_w + z_w_2;
                if(left >= 0){
                    left = 0;
                }else if(left <= m_l){
                    left = m_l;
                }
                if(top >= 0){
                    top = 0;
                }else if(top <= m_t){
                    top = m_t;
                }
                img.css({"top": top, "left": left});

                var m_top = e.pageY - offset.top - m_h_2;
                var m_left = e.pageX - offset.left - m_w_2;
                if(m_left <= 0){
                    m_left = 0;
                }else if(m_left >= m_m_l){
                    m_left = m_m_l;
                }
                if(m_top <= 0){
                    m_top = 0;
                }else if(m_top >= m_m_t){
                    m_top = m_m_t;
                }
                mouse.css({"top": m_top, "left": m_left});
            });
});
elem.mouseleave(function(){
    elem.find(".zoom_div").hide();
    elem.find(".mouse").hide();
});
};
}(jQuery));



