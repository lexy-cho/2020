
$( document ).ready( function() {
	/*var jbOffset = $( '.ctMenu' ).offset();
	
	$( window ).bind('touchmove', function() {
	  if ( $( document ).scrollTop() > (jbOffset.top - '42') ) {
		$( '.ctMenu' ).addClass( 'ctMFixed' );
	  }
	  else {
		$( '.ctMenu' ).removeClass( 'ctMFixed' );
	  }
	});*/

	$(".installToggle h4").bind('tap click', function(){
		$(".installToggle .box").toggle();
		$(this).toggleClass("plus");
	});

	$(".installToggle2 h4").bind('tap click', function(){
		$(".installToggle2 .box").toggle();
		$(this).toggleClass("plus");
	}); // 2017-01-16 추가

	$(".btnSendToggle.openCase").bind('tap click', function(){
		$(".sendBtnSet ul").show();
		$(".sendBtnSet .closeCase").show();
		$("#blind_wrap").addClass('ftCase').show(); // 161207 수정
		$(this).parents(".sendBtnSet").addClass('openSendGo');
		$(this).toggle();
	});
	$(".btnSendToggle.closeCase").bind('tap click', function(){
		$(".sendBtnSet ul").hide();
		$(".sendBtnSet .openCase").show();
		$("#blind_wrap").removeClass('ftCase').hide(); // 161207 수정
		$(this).parents(".sendBtnSet").removeClass('openSendGo');
		$(this).toggle();
	});

	$(".snb3_sub").hide();
	$(".snb3 span").bind('tap click', function(){
		$(".snb3_sub").slideToggle();
		$(this).toggleClass('on');
	}); // 161202 수정


	$(".iLine input, .iLine select, .iLine textarea").focus(function(){
		$(".iLine").removeClass('focusOn');
		$(this).parents(".iLine").addClass('focusOn');

	});
	$(".iLine input, .iLine select, .iLine textarea").blur(function(){
		$(this).parents(".iLine").removeClass('focusOn');

	});

	// 2016-12-08 PC 에서는 되지만 모바일에서
	$(".checkSet input[type='checkbox'], .radioSet input[type='radio']").focus(function(){
		$(this).parents(".lineBox").addClass('focusOn');
	});
	$(".checkSet input[type='checkbox'], .radioSet input[type='radio']").bind('touch', function(event) 
	{
		$(this).parents(".lineBox").addClass('focusOn');
	});
	$(".checkSet input[type='checkbox'], .radioSet input[type='radio']").blur(function(){			
		$(this).parents(".lineBox").removeClass('focusOn');
	});
	// end 2016-12-08


	$(".iLine input, .iLine select, .iLine textarea").focus(function(){
		$(this).parents(".lineBox").addClass('focusOn');

	});
	$(".iLine input, .iLine select, .iLine textarea").blur(function(){
		$(this).parents(".lineBox").removeClass('focusOn');
	});

	if($("body").width() <= 736 ){
		$(".btnInfoToggle input").addClass("off");
		$(".infoArea").hide();
		$(".btnInfoToggle input").bind('tap click', function(){
			$(this).toggleClass("off");
			$(".infoArea").toggle();
		});
		$(".esCase, .document").removeClass("botBoxOpen");
	} else{
		$(".esCase, .document").addClass("botBoxOpen");
		$(".btnInfoToggle input").bind('tap click', function(){
			$(this).toggleClass("off");
			$(".infoArea").toggle();
			$(".btnContractView").toggle();
			if($(".botInfoBox .infoArea").css("display") == "block"){
				$(".esCase, .document").addClass("botBoxOpen");
			} else{
				$(".esCase, .document").removeClass("botBoxOpen");
			}
		});
	}; // 하단 정보 토글 / 161213 #contents -> .esCase, .document 수정
	$(window).bind("resize", function(){
		if($("body").width() <= 736 ){
			$(".btnInfoToggle input").addClass("off");
			$(".infoArea").hide();
			$(".btnContractView").show();
			$(".btnContractView").addClass("block");
			$(".esCase, .document").removeClass("botBoxOpen");
			$(".btnInfoToggle input").bind('tap click', function(){
				if($(".botInfoBox .infoArea").css("display") == "block"){
					$(".esCase, .document").removeClass("botBoxOpen");
				} else{
					$(".esCase, .document").removeClass("botBoxOpen");
				}
			});
		} else{
			$(".esCase, .document").addClass("botBoxOpen");
			$(".btnInfoToggle input").removeClass("off");
			$(".infoArea").show();
			$(".btnContractView").show();
			$(".btnContractView").removeClass("block");
			$(".btnInfoToggle input").bind('tap click', function(){
				if($(".botInfoBox .infoArea").css("display") == "block"){
					$(".esCase, .document").addClass("botBoxOpen");
				} else{
					$(".esCase, .document").removeClass("botBoxOpen");
				}
			});
		};
	}); // 하단 정보 토글 / 161213 #contents -> .esCase, .document 수정 

	$(".btnSblueClose").hide();
	$(".btnSblue").bind('tap click', function(){
		$(this).parents().parents(".headBox").siblings(".privacyWrap, .hipassPrivacy").addClass("open");
		$(this).hide();
		$(this).siblings(".btnSblueClose").show();
	}); // 동의 상세내용 열기
	$(".btnSblueClose").bind('tap click', function(){
		$(this).parents().parents(".headBox").siblings(".privacyWrap, .hipassPrivacy").removeClass("open");
		$(this).hide();
		$(this).siblings(".btnSblue").show();
	}); // 동의 상세내용 닫기
	


	// 2017-07-31 수정	
	$(window).bind("resize", function(){
		var signHeight = $(".signPop2 .signPad div").width();
		$(".signPop2 .signPad canvas").height(signHeight*0.53);
		//$(".popGuide .nameArea div").css('height',signHeight*0.53+'px');
		//$(".popGuide .nameArea div").css('margin-top',signHeight*0.53+'px');
		
		var signHeight2 = $(".signPop1 .signPad div").width();
		/*$(".signPop1 .signPad canvas").height(signHeight2*0.46);*/
		$(".signPop1 .signPad canvas").height(signHeight2*0.53);
	});
	// end 2017-07-04	
	/*if($("body").width() <= 736 ){
		var signHeight = $(".normalPop").width()-36;
		$(".signPad canvas").height(signHeight*0.5);
	} 
	$(window).bind("resize", function(){
		if($("body").width() <= 736 ){
			var signHeight = $(".normalPop").width()-36;
			$(".signPad canvas").height(signHeight*0.5);
		} 
	});
	// 161214 signpad 추가

	if(window.orientation == 0){}else{
		if($("body").width() <= 736 ){
			var signHeight = $(".normalPop").width()-36;
			$(".signPad canvas").height(signHeight*0.28);
		} 
	}
	$(window).on("orientationchange",function(){
	   if(window.orientation == 0){} // Portrait
	   else // Landscape
		{
			if($("body").width() <= 736 ){
				var signHeight = $(".normalPop").width()-36;
				$(".signPad canvas").height(signHeight*0.28);
			} 
		}
	}); 2017-07-04 */
});