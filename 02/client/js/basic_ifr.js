$(document).ready(function (){

	/*$('.btn_acc').click(function(){
		$('.accpop').show();
		$('#blind_wrap').show();
		$('html, body').animate({scrollTop: $("#wrap").offset().top}, 0);
		$('html').css('overflow','hidden');
	});//팝업 열기

	$('.pclose').click(function(){
		$('.pop').hide();
		$('#blind_wrap').hide();
		$('html').css('overflow','auto');
	}); // 팝업 닫기*/

	
	$(function(){
		$( '.cal' ).datepicker({
			dateFormat:"yy.mm.dd"
		});
	}); // 달력

	$(function() {
		var availableTags = [
		  "ActionScript",
		  "AppleScript",
		  "AppleScript1",
		  "Asp",
		  "BASIC",
		  "C",
		  "C++",
		  "Clojure",
		  "COBOL",
		  "ColdFusion",
		  "Erlang",
		  "Fortran",
		  "Groovy",
		  "Haskell",
		  "Java",
		  "JavaScript",
		  "Lisp",
		  "Perl",
		  "PHP",
		  "Python",
		  "Ruby",
		  "Scala",
		  "Scheme"
		];
		$( ".autoCom" ).autocomplete({
		  source: availableTags
		});
	}); // 자동완성

	
	var select = $(".selectSet select");
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("strong").text(select_name);
	});
	for (i=0; i<$(".selectSet select").length; i++){
		var select_ = $(".selectSet select").get(i);
		if($(select_).is(":disabled")) $(select_).siblings('strong').css('opacity','0.5');
	} // select disabled opacity

	/* 브라우저 창 크기에 따라 jqGrid Width 자동 조절 */
	$(window).bind('resize', function() {
		if($('.jqGridSet table').length > 0){
			// 그리드의 width 초기화
			$('.jqGridSet table').jqGrid('setGridWidth', 0, true);
			// 그리드의 width를 div 에 맞춰서 적용
			$('.jqGridSet table').jqGrid('setGridWidth', $('.jqGridSet').width(), true);
		}
	}).trigger('resize');

	$( ".commentBtn" ).click(function() {
		$( this ).toggleClass( "open" );
		$('.commentEditor').toggle();
		$('.projectContents').toggleClass( "pt255" );
	});

	$( ".btnExpand" ).click(function() {
		$( this ).toggleClass( "on" );
		$('.adminSearch').toggle();
	});

	$( ".btnToggle" ).click(function() {
		$( this ).toggleClass( "on" );
		$('.editSearchUp, .projectSearch, .orangeBox .jqGridSet').toggle();
	});

	$('.sBtnArea').click(function(){
		$('.three1list').show();
	});
	$('.three2list .btnCLight').click(function(){
		$('.three1list').hide();
		$('.three2list').hide();
	}); // project search result show

	/*$(".saveEditor").click(function(){
		$(".commentSavePop").show();
		$('#blind_wrap').show();
		$('html, body').animate({scrollTop: $("#wrap").offset().top}, 0);
		$('html').css('overflow','hidden');
	})*/
});


/* 부모창의 createTab 함수 호출 */
var createTabInFrame = function(tabNm, tabLk){
	var tabData = [];
	tabData[0] = tabNm;
	tabData[1] = tabLk;
	parent.postMessage(tabData,"*");
	
}