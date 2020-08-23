//toggle element picture

//on click fade in the smallboxes
$("#fadein").click(function(){
    $(".smallbox1").fadeIn(500).css("display","inline-block");
    $(".smallbox2").fadeIn(1000).css("display","inline-block");
    $(".smallbox3").fadeIn(1500).css("display","inline-block");
    $(".smallbox4").fadeIn(1700).css("display","inline-block");
    $(".smallbox5").fadeIn(1900).css("display","inline-block");
    $(".smallbox6").fadeIn(2000).css("display","inline-block");
    $(".smallbox7").fadeIn(2050).css("display","inline-block");
    $(".smallbox8").fadeIn(2100).css("display","inline-block");
    $(".smallbox9").fadeIn(2150).css("display","inline-block");
})

$('#fadeout').click(function(){
    $(".smallbox9").fadeOut(300)
    $(".smallbox8").fadeOut(400)
    $(".smallbox7").fadeOut(500)
    $(".smallbox6").fadeOut(600)
    $(".smallbox5").fadeOut(700)
    $(".smallbox4").fadeOut(800)
    $(".smallbox3").fadeOut(900)
    $(".smallbox2").fadeOut(1000)
    $(".smallbox1").fadeOut(1100)
})
//toggle the container2
$("#fortoggle").click(function(){
    $(".container2").toggle(500)
});

//description for classes
$('.smallbox1').hover(function(){  
  $(".content1").html("content here");
});
$('.smallbox2').hover(function(){  
    $(".content2").html("content here") 
});
$('.smallbox3').hover(function(){  
    $(".content3").html("Pcontent here");
});
$('.smallbox4').hover(function(){  
    $(".content4").html("content here");
});
$('.smallbox5').hover(function(){  
    $(".content5").html("content here");
});
$('.smallbox6').hover(function(){  
    $(".content6").html("content hered");
});
$('.smallbox7').hover(function(){  
    $(".content7").html("content here");
});
$('.smallbox8').hover(function(){  
    $(".content8").html("content here");
});
$('.smallbox9').hover(function(){  
    $(".content9").html("content here");
});

//THIS IS FOR THE DESCRIPTION STUFF
//smallbox 1 will put stuff in content1 div
$('.smallbox1').hover(function(){
    $('.content1').css('opacity','1')
    $('.imgbox1').css('opacity','1')
},function(){
    $('.content1').css('opacity','0')
    $('.imgbox1').css('opacity','0')});
//smallbox 2 will put stuff in content2 div
$('.smallbox2').hover(function(){
    $('.content2').css('opacity','1')
    $('.imgbox2').css('opacity','1')
},function(){
    $('.content2').css('opacity','0')
    $('.imgbox2').css('opacity','0')})
//smallbox 3 will put stuff in content3 div
$('.smallbox3').hover(function(){
    $('.content3').css('opacity','1')
    $('.imgbox3').css('opacity','1')
},function(){
    $('.content3').css('opacity','0')
    $('.imgbox3').css('opacity','0')})
//smallbox 4 will put stuff in content4 div
$('.smallbox4').hover(function(){
    $('.content4').css('opacity','1')
    $('.imgbox4').css('opacity','1')
},function(){
    $('.content4').css('opacity','0')
    $('.imgbox4').css('opacity','0')});
//smallbox 5 will put stuff in content5 div
$('.smallbox5').hover(function(){
    $('.content5').css('opacity','1')
    $('.imgbox5').css('opacity','1')
},function(){
    $('.content5').css('opacity','0')
    $('.imgbox5').css('opacity','0')});
//smallbox 6 will put stuff in content6 div
$('.smallbox6').hover(function(){
    $('.content6').css('opacity','1')
    $('.imgbox6').css('opacity','1')
},function(){
    $('.content6').css('opacity','0')
    $('.imgbox6').css('opacity','0')});
//smallbox 7 will put stuff in content7 div
$('.smallbox7').hover(function(){
    $('.content7').css('opacity','1')
    $('.imgbox7').css('opacity','1')
},function(){
    $('.content7').css('opacity','0')
    $('.imgbox7').css('opacity','0')});
//smallbox 8 will put stuff in content8 div
$('.smallbox8').hover(function(){
    $('.content8').css('opacity','1')
    $('.imgbox8').css('opacity','1')
},function(){
    $('.content8').css('opacity','0')
    $('.imgbox8').css('opacity','0')});
//smallbox 9 will put stuff in content9 div
$('.smallbox9').hover(function(){
    $('.content9').css('opacity','1')
    $('.imgbox9').css('opacity','1')
},function(){
    $('.content9').css('opacity','0')
    $('.imgbox9').css('opacity','0')});

