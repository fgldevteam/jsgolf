
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap')
// require('./bootstrap')

$(document).ready(function() {
    // $('#fullpage').fullpage();
    $('#fullpage').fullpage({
    	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke']
	});

	$("#datetimepicker").datetimepicker({
		// time: "fa fa-clock-o",
		date: "fa fa-calendar",
  //       up: "fa fa-arrow-up",
		// down: "fa fa-arrow-down",
		format: 'YY-MM-DD H:mm:ss'
	});

});

// $('#fullpage').fullpage({
//     sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke']
// });

// $.fn.fullpage.parallax.init();
// $.fn.fullpage.parallax.setOption('type', 'cover');
// $.fn.fullpage.parallax.setOption('percentage', '30');

