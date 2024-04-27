$(document).ready(function (){
	$(window).bind('resize', function() {
		var resizeH = $("body").height();

		if($('.jqGridSet.pmRs1 table.ui-jqgrid-btable').length > 0){
			$('.jqGridSet.pmRs1 table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', $("#section").width() - 132, true);
			});	
		}
		if($('.jqGridSet.pmRs2 table.ui-jqgrid-btable').length > 0){
			$('.jqGridSet.pmRs2 table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', ($("#section").width() - 156)/2, true);
			});	
		}

		/*if ( resizeH < 933){
			if($('.jqGridSet.pmRs3 table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.pmRs3 table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', $("#section").width() - 108, true);
				});	
			}
		} else {
			if($('.jqGridSet.pmRs3 table.ui-jqgrid-btable').length > 0){
				$('.jqGridSet.pmRs3 table.ui-jqgrid-btable').each(function(){
					$(this).jqGrid('setGridWidth', 0, false);
					$(this).jqGrid('setGridWidth', $("#section").width() - 88, true);
				});	
			}
		}
		if($('.jqGridSet.pmRs1 table.ui-jqgrid-btable').length > 0){
			$('.jqGridSet.pmRs1 table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', $("#section").width() - 198, true);
			});	
		}
		if($('.jqGridSet.pmRs2 table.ui-jqgrid-btable').length > 0){
			$('.jqGridSet.pmRs2 table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', $("#section").width() - 108, true);
			});	
		}
		if($('.pmEndLayout .jqGridSet.pmRs1 table.ui-jqgrid-btable').length > 0){
			$('.pmEndLayout .jqGridSet.pmRs1 table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', $("#section").width() - 215, true);
			});	
		}
		if($('.pmEndLayout .jqGridSet.pmRs2 table.ui-jqgrid-btable').length > 0){
			$('.pmEndLayout .jqGridSet.pmRs2 table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', $("#section").width() - 135, true);
			});	
		}
		if($('.pmEndLayout .jqGridSet.pmRs3 table.ui-jqgrid-btable').length > 0){
			$('.pmEndLayout .jqGridSet.pmRs3 table.ui-jqgrid-btable').each(function(){
				$(this).jqGrid('setGridWidth', 0, false);
				$(this).jqGrid('setGridWidth', $("#section").width() - 135, true);
			});	
		}*/
	}).trigger('resize');

    $(".pageTop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".pageTop").fadeIn();
        }else{
            $(".pageTop").fadeOut();
        }
    });
    $(".pageTop").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 300);
    });

});


/* iFrame에서 호출 (보안문제로 broadcast하여 호출) */
function receiveMessage(event) {
	createTab(event.data[0], event.data[1]);
}
if ('addEventListener' in window){
	window.addEventListener('message', receiveMessage, false);
} else if ('attachEvent' in window){ //IE
	window.attachEvent('onmessage', receiveMessage);
}