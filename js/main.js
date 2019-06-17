$(document).ready(function(){
        
    //recent post slideshow    
    $('.posts_list').bxSlider({
      minSlides: 1,
      maxSlides: 3,
      moveSlides: 1,
      slideWidth: 370,
      slideMargin: 30,
      pager: false,
      nextSelector:'.recent_posts .controls .next',
      prevSelector:'.recent_posts .controls .prev'

  });


    //mobile Menu
    $(".toggle").click(function(e){
            e.preventDefault(); 
            $("ul.main-menu").slideToggle("slow");
    });
    //사이즈변경시 메뉴
    $(window).resize(function(){
       if($(window).width()>768){
           $(".main-menu").show();
       } else {
           $(".main-menu").hide();
       } 
    });


    //상단 메뉴 고정(stickyMenu)
    var $header = $('header');
    var $services = $('.services');
    var $couters = $('.counters');
    var $counterData = $couters.find('h3');
    var $serciveExecuted = false;
    var $couterExecuted = false;
    
    
    $(window).scroll(function(){

        //현재의 스크롤 양
        var $currentSct = $(this).scrollTop();
        var $offset = 300;    
        
        if($currentSct > 0){
            $header.addClass('sticky');  
        }else{
            $header.removeClass('sticky');  
        }

        //service-item 나타나기
        var $serviceThreshold = $services.offset().top - $offset;
        
        if(!$serciveExecuted){  
            if($currentSct > $serviceThreshold){
                $services.addClass('active');
                $serciveExecuted = true;
            }
        }
        
        //숫자 애니메이션
        var $couterThreshold = $couters.offset().top - $offset; 
        
        if(!$couterExecuted){  
            if($currentSct > $couterThreshold){
                $counterData.each(function(){
                    var $current = $(this);
                    var $target = $current.attr('data-rate');
                    
                    //animate, progress, rate
                    $({rate:0}).animate({rate:$target},{
                        duration:2500,
                        progress:function(){
                            var now = this.rate;
                            $current.text(Math.ceil(now));
                        }
                    });
                    
                });
                $couterExecuted = true;
            } //$counterExecuted if
            
        } //scroll if  
    }); //scroll event    
    
    
    //overlay
    var currentUrl = $('iframe').attr('src');
    $('.video .icon').click(function(e){
        e.preventDefault();
        $('#overlay').addClass('visible');
        
        var newStr = '?autoplay=1';
        var newUrl = currentUrl.concat(newStr);
        
        $('iframe').attr('src',newUrl);
        
    });
    $('.video .close').click(function(e){
        e.preventDefault();
        var newUrl2 = currentUrl.replace('?autoplay=1','');
        $('iframe').attr('src',newUrl2);
        
        $('#overlay').removeClass('visible');
    });
    
    
    
    
    
    
    
  
    
    
    
});