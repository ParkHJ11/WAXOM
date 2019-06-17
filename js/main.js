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
        var $serciveExecuted = false;
        if(!$serciveExecuted){  
            if($currentSct > $serviceThreshold){
                $services.addClass('active');
                $serciveExecuted = true;
            }
        }
    }); //scroll event    
    
  
    
    
    
    });