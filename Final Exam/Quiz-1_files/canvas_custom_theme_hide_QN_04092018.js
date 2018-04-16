$( document ).ready(function() {
	
	//Hide CCM by role
	if($("#section-tabs li.section:contains('Settings')").length == 0) { 
		$("#section-tabs li.section:contains('Course Manager')").remove();//Hide CCM
	}

	

  	//display Cntent MIgrations tool to select roles	
	if(ENV.current_user_roles.indexOf("admin") === -1 || ENV.current_user_roles.indexOf("teacher") === -1) {
		$("#section-tabs li.section:contains('Content Migrations')").remove();
	}



  // Add Carousel
  $( "#dashboard" ).before("<iframe src='https://s3.amazonaws.com/umich-tl-carousel/canvas_carousel_player.html' width='850' height='173' frameBorder='0' role='complementary' ></iframe>");
	
	
	
	//Selectively hide Quizzes.Next
	$('.new_quiz_lti_wrapper').hide();
	
	onPage(/\/courses\/(207865|207853|146|211644|41787|146|215961|231486|136137|843|211148|215152|57444|256556)+\/assignments/, function() {
		$('.new_quiz_lti_wrapper').show();
	});

	function onPage(regex, fn) {
  		if (location.pathname.match(regex)){
			fn();
		}
	}
});