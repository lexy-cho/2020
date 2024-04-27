$(document).ready(function (){
	/******* Filter Select *******/
	function filterFunction(){
		// Common
		var select_root = $('div.selectFilter');
		var select_value = $('.filterValue');
		var select_a = $('div.selectFilter>ul>li>a');
		var select_input = $('div.selectFilter>ul>li>input[type=radio]');
		//var select_label = $('div.selectFilter>ul>li>label');
		// Radio Default Value
		$('div.filterValue').each(function(){
			var default_value = $(this).next('.i_list').find('input[checked]').next('label').text();
			$(this).append(default_value);
		});/**/
		// Line
		select_value.bind('focusin',function(){$(this).addClass('outLine')});
		select_value.bind('focusout',function(){$(this).removeClass('outLine')});
		//select_input.bind('focusin',function(){$(this).parents('div.selectFilter').children('div.filterValue').addClass('outLine')});
		//select_input.bind('focusout',function(){$(this).parents('div.selectFilter').children('div.filterValue').removeClass('outLine')});
		// Show
		function show_option(){
			$(this).parents('div.selectFilter:first').toggleClass('open');
		}
		// Hover
		function i_hover(){
			$(this).parents('ul:first').children('li').removeClass('hover');
			$(this).parents('li:first').toggleClass('hover');
		}
		// Hide
		function hide_option(){
			var t = $(this);
			setTimeout(function(){
				t.parents('div.selectFilter:first').removeClass('open');
			}, 1);
		}
		// Set Input
		function set_label(){
			var v = $(this).next('label').text();
			$(this).parents('ul:first').prev('.filterValue').text('').append(v);
			$(this).parents('ul:first').prev('.filterValue').addClass('selected');
		}
		// Set Anchor
		function set_anchor(){
			var v = $(this).text();
			$(this).parents('ul:first').prev('.filterValue').text('').append(v);
			$(this).parents('ul:first').prev('.filterValue').addClass('selected');
		}
		// Anchor Focus Out
		$('*:not("div.selectFilter a")').focus(function(){
			$('.filterList').parent('.select').removeClass('open');
		});
		select_value.click(show_option);
		select_root.removeClass('open');
		select_root.mouseleave(function(){$(this).removeClass('open')});
		select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
		select_input.change(set_label).focus(set_label);
		//select_label.hover(i_hover).click(hide_option);
		/******* end Filter Select *******/
	}
});

function filterFunction(){
	// Common
	var select_root = $('div.selectFilter');
	var select_value = $('.filterValue');
	var select_a = $('div.selectFilter>ul>li>a');
	var select_input = $('div.selectFilter>ul>li>input[type=radio]');
	//var select_label = $('div.selectFilter>ul>li>label');
	// Radio Default Value
	$('div.filterValue').each(function(){
		var default_value = $(this).next('.i_list').find('input[checked]').next('label').text();
		$(this).append(default_value);
	});/**/
	// Line
	select_value.bind('focusin',function(){$(this).addClass('outLine')});
	select_value.bind('focusout',function(){$(this).removeClass('outLine')});
	//select_input.bind('focusin',function(){$(this).parents('div.selectFilter').children('div.filterValue').addClass('outLine')});
	//select_input.bind('focusout',function(){$(this).parents('div.selectFilter').children('div.filterValue').removeClass('outLine')});
	// Show
	function show_option(){
		$(this).parents('div.selectFilter:first').toggleClass('open');
	}
	// Hover
	function i_hover(){
		$(this).parents('ul:first').children('li').removeClass('hover');
		$(this).parents('li:first').toggleClass('hover');
	}
	// Hide
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			t.parents('div.selectFilter:first').removeClass('open');
		}, 1);
	}
	// Set Input
	function set_label(){
		var v = $(this).next('label').text();
		$(this).parents('ul:first').prev('.filterValue').text('').append(v);
		$(this).parents('ul:first').prev('.filterValue').addClass('selected');
	}
	// Set Anchor
	function set_anchor(){
		var v = $(this).text();
		$(this).parents('ul:first').prev('.filterValue').text('').append(v);
		$(this).parents('ul:first').prev('.filterValue').addClass('selected');
	}
	// Anchor Focus Out
	$('*:not("div.selectFilter a")').focus(function(){
		$('.filterList').parent('.select').removeClass('open');
	});
	select_value.click(show_option);
	select_root.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open')});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	select_input.change(set_label).focus(set_label);
	//select_label.hover(i_hover).click(hide_option);
	/******* end Filter Select *******/
}