$(document).ready(function (){

	$('.hHandle').toggle(function(){
		 $(this).addClass('on');
		 $( "#wrapBack #header" ).animate({left: "-180px"}, 600);
		 $( "#section .container" ).animate({left: "0"}, 600, function(){
			$( "#section .contentsFixBack h1" ).animate({width: "145px"}, 600);
			$('.hHandle').animate({left: "30px"}, 600);
			 $(".contents").addClass('tabOn');
		 });
		 $( "#section .contentsFixBack .tabMenu" ).animate({left: "260px"}, 600, function(){
			if($('.jqGridSet.wideRs table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.wideRs table.ui-jqgrid-btable').each(function(){
					//console.log($(this).jqGrid('setGridWidth', 0, false));
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', $(".contents").width() - 40, true);
				});	
			}
			if($('.jqGridSet.pmRs1 table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.pmRs1 table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', $(".contents").width() - 130, true);
				});
			} 
			if($('.jqGridSet.pmRs2 table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.pmRs2 table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', ($(".contents").width() - 154)/2, true);
				});	
			}
		 });
	}, function(){
		 $(this).removeClass('on');
		 $('.hHandle').animate({left: "0"}, 600, function(){
			 $( "#wrapBack #header" ).animate({left: "0"}, 600);
			 $( "#section .container" ).animate({left: "180px"}, 600);
			 $( "#section .contentsFixBack .tabMenu" ).animate({left: "80px"}, 600, function(){
				if($('.jqGridSet.wideRs table.ui-jqgrid-btable').length > 0){
					$('.jqGridSet.wideRs table.ui-jqgrid-btable').each(function(){
						$(this).jqGrid('setGridWidth', 0, false);
						$(this).jqGrid('setGridWidth', $(".contents").width() - 40, true);
					});	
				} 
				if($('.jqGridSet.pmRs1 table.ui-jqgrid-btable').length > 0){
					$('.jqGridSet.pmRs1 table.ui-jqgrid-btable').each(function(){
						$(this).jqGrid('setGridWidth', 0, false);
						$(this).jqGrid('setGridWidth', $("#section").width() - 309, true);
					});	
				} 
				if($('.jqGridSet.pmRs2 table.ui-jqgrid-btable').length > 0){
					$('.jqGridSet.pmRs2 table.ui-jqgrid-btable').each(function(){
						$(this).jqGrid('setGridWidth', 0, false);
						$(this).jqGrid('setGridWidth', ($("#section").width() - 334)/2, true);
					});	
				}
			 });
			 $(".contents").removeClass('tabOn');
		 });
		$( "#section .contentsFixBack h1" ).animate({width: "0px"}, 600);
	});

	/* Create new tab function */
	$(function newTab() {
		var $tabs = $('#nav-tabs').tabs();
		$('.add-tab').click(function (e) {
			e.preventDefault()
			$(".contentsBack").removeClass('on');
			var tabName = $(this).text(),
				tabLink = $(this).attr('href'),
				tabAnchor = $(this).attr('href').replace(/#/g, ''),
				tabNumber = -1;
			$tabs.find('.nav-tab-menu li span').each(function (i) {
				if ($(this).text() == tabName) {
					tabNumber = i;
				}
			});
			if (tabNumber >= 0) {
				$tabs.tabs('option', 'active', tabNumber);
			} else {
				var appendIFrame = "$('.contentsBack').load(" + tabAnchor + ".html);";
				$(".contents").append("<div id=" + tabAnchor + " class='contentsBack'></div>");
				$("#"+tabAnchor)
					.load(tabAnchor + ".html")
					.addClass('on');
				$("<li><span><a href=" + tabLink + ">" + tabName + "</a></span><input type='button' value='x' class='ui-icon ui-icon-close' /></li>")
					.appendTo(".nav-tab-menu");
				$("#nav-tabs").tabs("refresh");
				$('#nav-tabs').tabs('option', 'active', -1);
			}	
			return false
		});
	});
	
	/* Delete tab function */
	$(document).on('click', '.ui-icon-close', function (event) {
		var parent = $(this).parent(),
			index = parent.index(),
			tabs = $(this).closest(".ui-tabs"),
			panel = tabs.children().eq(index + 1),
			tabLink = parent.find("a").attr("href");
			$(tabLink).remove();
			parent.remove();
			panel.remove();
			tabs.tabs("refresh").tabs('option', 'active', -1);
	});
	/* 브라우저 창 크기에 따라 jqGrid Width 자동 조절 */
	/* 
	$(window).bind('resize', function() {
		if($('.jqGridSet table').length > 0){
			// 그리드의 width 초기화
			$('.jqGridSet table').jqGrid('setGridWidth', 0, false);
			// 그리드의 width를 div 에 맞춰서 적용
			$('.jqGridSet table').jqGrid('setGridWidth', $('.jqGridSet').width(), true);
		}
	}).trigger('resize'); */
	$(window).bind('resize', function() {
		var resizeW = $("#section .contents").width();
		/*if ( resizeW < 1024){
			//console.log(resizeW);
			if($('.jqGridSet.wideRs table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.wideRs table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', 904, true);
				});	
			} 
			if($('.jqGridSet.pmRs1 table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.pmRs1 table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', 749, true);
				});	
			} 
			if($('.jqGridSet.pmRs2 table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.pmRs2 table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', 876, true);
				});	
			} 
		} else {
			if($('.jqGridSet.wideRs table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.wideRs table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', $("#nav-tabs").width() - 40, true);
				});	
			} 
			if($('.jqGridSet.pmRs1 table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.pmRs1 table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', $("#section").width() - 309, true);
				});	
			} 
			if($('.jqGridSet.pmRs2 table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.pmRs2 table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', ($("#section").width() - 334)/2, true);
				});	
			}
		}*/
		if($('.jqGridSet.wideRs table.ui-jqgrid-btable').length > 0){
			$('.jqGridSet.wideRs table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', $("#nav-tabs").width() - 40, true);
			});	
		} 
		if($('.jqGridSet.pmRs1 table.ui-jqgrid-btable').length > 0){
			$('.jqGridSet.pmRs1 table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', $("#section").width() - 309, true);
			});	
		} 
		if($('.jqGridSet.pmRs2 table.ui-jqgrid-btable').length > 0){
			$('.jqGridSet.pmRs2 table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', ($("#section").width() - 334)/2, true);
			});	
		}
	}).trigger('resize');

	/**/ 
    $(".pageTop").hide();
    $(".contents").scroll(function(){
        if($(this).scrollTop() > 0){
            $(".pageTop").fadeIn();
        }else{
            $(".pageTop").fadeOut();
        }
    });
    $(".pageTop").click(function(){
        $(".contents").animate({
            scrollTop : 0
        }, 300);
    });

});

function reSize() {
	$('.jqGridSet.wideRs table.ui-jqgrid-btable').each(function(){
		$(this).jqGrid('setGridWidth', 0, false);
		$(this).jqGrid('setGridWidth', $(".contentsBack").width() - 0, true);
	});	
}
/* iFrame에서 호출 (보안문제로 broadcast하여 호출) */
function receiveMessage(event) {
	createTab(event.data[0], event.data[1]);
}
if ('addEventListener' in window){
	window.addEventListener('message', receiveMessage, false);
} else if ('attachEvent' in window){ //IE
	window.attachEvent('onmessage', receiveMessage);
}

/* iFrame에서 호출한 createTab */
var createTab = function(tabNm, tabLk){
	var $tabs = $('#nav-tabs').tabs();
	var tabName = tabNm,
	tabLink = tabLk,
	tabAnchor = tabLk.replace(/#/g, ''),
	tabNumber = -1;
	$(".contentsBack").removeClass('on');
	$tabs.find('.nav-tab-menu li span').each(function (i) {
		if ($(this).text() == tabName) {
			tabNumber = i;
		}
	});
	if (tabNumber >= 0) {
		$tabs.tabs('option', 'active', tabNumber);
	} else {
		/*var appendIFrame = "<iframe src='" + tabAnchor + ".html" + "' style='width:100%; height:100%;' scrolling='yes' marginwidth='0' marginheight='0' frameborder='0' vspace='0' hspace='0'></iframe>";
		$(".contents").append("<div id=" + tabAnchor + " class='contentsBack'>" + appendIFrame + "</div>");*/
		
		var appendIFrame = "$('.contentsBack').load(" + tabAnchor + ".html);";
		$(".contents").append("<div id=" + tabAnchor + " class='contentsBack'></div>");
		$("#"+tabAnchor)
			.load(tabAnchor + ".html")
			.addClass('on');

		$("<li><span><a href=" + tabLink + ">" + tabName + "</a></span><input type='button' value='x' class='ui-icon ui-icon-close' /></li>")
			.appendTo(".nav-tab-menu");
		$("#nav-tabs").tabs("refresh");
		$('#nav-tabs').tabs('option', 'active', -1);
	}
}