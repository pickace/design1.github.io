$(document).ready(function(){
  
  /*list-1*/
   $(".list-1").click(function() {
     var txt = $("#extraList-1").is(':visible') ? 'See All' : 'Less';
     $(".list-1").text(txt);
     $("#extraList-1").slideToggle();
});

   /*list-2*/
     $(".list-2").click(function() {
     var txt = $("#extraList-2").is(':visible') ? 'See All' : 'Less';
     $(".list-2").text(txt);
     $("#extraList-2").slideToggle();
	 });
   /*list-3*/
   $(".list-3").click(function() {
     var txt = $("#extraList-3").is(':visible') ? 'See All' : 'Less';
     $(".list-3").text(txt);
     $("#extraList-3").slideToggle();
});

}); 
/*check box custome JS*/
function customCheckbox(checkboxName){
        var checkBox = $('input[name="'+ checkboxName +'"]');
        $(checkBox).each(function(){
            $(this).wrap( "<span class='custom-checkbox'></span>" );
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
        });
        $(checkBox).click(function(){
            $(this).parent().toggleClass("selected");
        });
    }
    $(document).ready(function (){
        customCheckbox("language[]");
   });
   /*check box custome Js end*/
   
   
 /*language popup box*/
   $(".more-lang").click(function() {
      $(".language-list-popup").fadeIn();
    });
	$(".fa-close").click(function() {
        $(".language-list-popup").fadeOut();
});

 /*language popup box*/
   $(".bookBtn").click(function() {
      $(".datepairExample").fadeIn();
	  $(".list-view").css('margin-top','150')
    });
	$(".fa-close,#datepairExample .custome-btn").click(function() {
        $(".datepairExample").fadeOut();
});


$(document).ready(function(){
    $(".lawyers-details .bookBtn").click(function() {
        $(this).parent().parent().find(".slots-group").slideToggle();
    });
});
  /* service list */
     $(".more-link").click(function() {
	
	 $(".hide-show").hide();
	 $(".more-link").text("+ View all");
     var txt = $(".hide-show").is(':visible') ? '+ View all' : '- View less';	 
     $(this).text(txt);
      $(this).parent().parent().find(".hide-show").slideToggle();
	 });


	
$(document).ready(function(){
var height_1=parseInt($(window).outerHeight());
var height_2=parseInt($("header.header").outerHeight()+$(".main-searh-section").outerHeight());
var height_3=parseInt(height_1-height_2);
var main_height=parseInt(height_3/2);
$(".main-searh-section").css("padding-top",main_height+30).css("padding-bottom",main_height+20);
});	
