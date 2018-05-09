// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	function initialize(){
		var myLatLng = new google.maps.LatLng(33.7490, -84.3880);

		var mapOptions = {
			center: myLatLng,
			zoom: 12,
			scrollwheel: false
		};
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfp124NDn8CH7ACkI8zRTTEHNu6qAk1g7GRH1SrIlpPxQeTLxfw"


		var marker = new google.maps.Marker({
	    position: myLatLng,
	    map: map,
	    icon: image,
	    animation: google.maps.Animation.DROP

  		});

		var contentString = '<h2><center>Atlanta</center></h2>' + '<p>Where there is endless traffic.</p>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		google.maps.event.addListener(marker, 'click', function(){
			infowindow.open(map,marker);
		});
	}
	google.maps.event.addDomListener(window,'load',initialize);
});


