///////////////////// Back To Top 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.backtotop').fadeIn('slow');
        } else {
            $('.backtotop').fadeOut('slow');
        }
    });
    $('.backtotop').click(function () {
        $("html, body").animate({scrollTop: 0}, 500);
        return false;
    });
});

// User pop
$(document).ready(function() {
    $(".logIn").click(function(){
		$(".userMenu ul").slideToggle(200);
	});	
    $("html").click(function() {
        $(".userMenu ul").slideUp(200);
    });
    $(".logIn, .userMenu ul").click(function(e) {
        e.stopPropagation();
    });	
});


// Sign In pop
$(function () {
     applyInputSlide();
});

function applyInputSlide() {
    $(".signin_wrap span input").each(function (i) {
        if ($(this).val().trim() !== "")
            $(this).parent(".signin_wrap span").find('label').addClass('test');
    });
    $(".signin_wrap span input").on('focus', function () {
        $(this).parent(".signin_wrap span").find('label').addClass('test');
    });
    $(".signin_wrap span input").on('blur', function () {
        if ($(this).val().trim() === "")
            $(this).parent(".signin_wrap span").find('label').removeClass('test');
    });	
	$(".signin_wrap span textarea").each(function (i) {
        if ($(this).val().trim() !== "")
            $(this).parent(".signin_wrap span").find('label').addClass('test');
    });
    $(".signin_wrap span textarea").on('focus', function () {
        $(this).parent(".signin_wrap span").find('label').addClass('test');
    });
    $(".signin_wrap span textarea").on('blur', function () {
        if ($(this).val().trim() === "")
            $(this).parent(".signin_wrap span").find('label').removeClass('test');
    });    
}


// forgot password
$(document).ready(function() {
	$("#forgot-pass").hide();
    $("#fp-click").click(function(){
		$("#signin").hide();
		$("#forgot-pass").show();
	});
    $(".cancel_for").click(function(){
		$("#signin").show();
		$("#forgot-pass").hide();
	});	
});


// Gallery Tabs
$(document).ready(function() {
	$("#event").hide();
    $("#gaTb1").click(function(){
		$("#event").hide();
		$("#camp").show();
		$("#gaTb1").addClass("tabAc");
		$("#gaTb2").removeClass("tabAc");
	});
    $("#gaTb2").click(function(){
		$("#event").show();
		$("#camp").hide();
		$("#gaTb2").addClass("tabAc");
		$("#gaTb1").removeClass("tabAc");		
	});
});



/////////////////////// new content fix
//$(document).ready(function() {
//    $(window).scroll(function() {
//        if ($(this).scrollTop() > 20) {
//            $('.new_right').addClass('new_right_fix');
//        } else {
//            $('.new_right').removeClass('new_right_fix');
//        }
//    });
//});
