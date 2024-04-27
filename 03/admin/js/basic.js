$(document).ready(function(){
	$("#header .lsbasic").click(function () {
		$("#wrap").removeClass("snbright-style center-style");
	});
	$("#header .lsright").click(function () {
		$("#wrap").removeClass("center-style");
		$("#wrap").addClass("snbright-style");
	});
	$("#header .lscenter").click(function () {
		$("#wrap").removeClass("snbright-style");
		$("#wrap").addClass("center-style");
	});// layout style

	$(".com-layout h2 .side-button").click(function () {
		$("#wrap").toggleClass("side-hidden");
	});// gnb toggle

	$(".tab2 span input").click(function () {
		$(".tab2 span").removeClass("on");
		$(this).parent("span").addClass("on");
		$(".tabCon").hide();
		var activeTab = $(this).attr("data-name");
		$("." + activeTab).fadeIn();
	}); //tab

	$(".tab3 span input").click(function () {
		$(".tab3 span").removeClass("on");
		$(this).parent("span").addClass("on");
		$(".tabCon").hide();
		var activeTab = $(this).attr("data-name");
		$("." + activeTab).fadeIn();
	}); //tab

	$( ".cal" ).datepicker();	// 달력

	$('.pclose, .pop .bPurple').click(function(){
		$('.pop').hide();
		$('#blind_wrap').hide();
		$('html').css('overflow','auto');
	}); // 팝업 닫기
		
})