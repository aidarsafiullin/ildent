function action_slider(){
    if($('#benefits_block').length>0){
        if(document.body.offsetWidth>974){
            var new_width=document.body.offsetWidth/2;
            var old_width=$('#action_slider').width()>960 ? $('#action_slider').width() : 960;


            if(new_width>old_width){
                $("#action_slider").width(new_width);
                //debugger;
            }else{
                if(old_width>$('#action_slider').width()){
                    $('#action_slider').width(old_width);
                }
            }

            var height_sl=action_slider.offsetHeight;
            var height_b=benefits.offsetHeight;

            if(height_b>height_sl){
                $('#action_slider_block').height(height_b);
            }else{
                $('#action_slider_block').height(height_sl);
            }
        }else{
            $("#action_slider").css('width','auto');
        }
    }
}


$(document).ready(function(){


    if($('.fancybox').length>0){
        $('.fancybox').fancybox();
    }

    if($('.service_item').length>0){
        var max=0;


        $('.service_item').each(function(){

            var height=$(this).outerHeight();
            if(height>max){
                max=height;
            }
        });


        $('.service_item').css('min-height',max+'px');

    }

    if($('.price_tab_link').length>0){

        $('.price_tab_link').on('shown.bs.tab', function (e) {

            $('.price_tab_link').removeClass('active');
            $(e.target).addClass('active');

            var id=$(e.target).attr('href');
            var element=$(id);
            var navheight=80;
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop-navheight;

            $('body,html').animate({
                scrollTop: totalScroll
            }, 500);


            //debugger;
        });

    }

    action_slider();

	$(".navbar-toggle").click(function(){
		$(".header_wrapper").toggleClass( "in" )
	});

});


$("document").ready(function($){
 
	var nav = $('#top_menu');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 160) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});

$(document).ready(function() {
    $(window).on('scroll resize',function(event){
        //var width=$(document).width();
        action_slider();
        /*
         if(width>770 && $(document).height() - $(window).height()>650){
         var scrolled = window.pageYOffset || document.documentElement.scrollTop;
         if(scrolled>200 && !$('#header').hasClass('fixed')){
         $('#header').addClass('fixed');
         //debugger;
         }else if(scrolled<=200 && $('#header').hasClass('fixed')){
         $('#header').removeClass('fixed');
         }
         }else if(width<=770 && $('#header').hasClass('fixed')){
         $('#header').removeClass('fixed');
         }
         */
    });

	$('#block_photo_gallery').slick({
      infinite: true,
	  autoplay: true,
      dots: true,
	  centerMode: true,
	  adaptiveHeight: true,
	  variableWidth: true,	
      slidesToShow: 3,
      slidesToScroll: 1,
 	  nextArrow: '<i class="glyphicon glyphicon-chevron-right"></i>',
  	  prevArrow: '<i class="glyphicon glyphicon-chevron-left"></i>',
 	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			arrows: false,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
    });
});

//<!--BGN Column to single height-->
jQuery(document).ready(function($){
    if ( $('.alignTheHeightBlock').length ) {
        /*    $('.alignTheHeightBlock').each(function(){
         var counter = 0;
         var itemHeight = [];
         var finalItemHeight = -1;
         $(this).find('.alignTheHeightItem').each(function(){
         itemHeight[counter] = $(this).height();
         counter++;
         });
         itemHeight.forEach(function(entry) {
         if (finalItemHeight < entry) {finalItemHeight = entry;}
         });
         if (finalItemHeight != -1) {
         $(this).find('.alignTheHeightItem').css('height', finalItemHeight);
         }
         });*/
        $('.alignTheHeightItem').matchHeight({ property: 'min-height' });
    }
})
//<!--END Column to single height-->
var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });





$(document).ready(function(){
$('.nav a').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).addClass('active');
        }
    });
});