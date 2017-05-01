function n7_golf_club_googlemap_init(dom_obj, coords) {
	"use strict";
	if (typeof N7_GOLF_CLUB_STORAGE['googlemap_init_obj'] == 'undefined') n7_golf_club_googlemap_init_styles();
	N7_GOLF_CLUB_STORAGE['googlemap_init_obj'].geocoder = '';
	try {
		var id = dom_obj.id;
		N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id] = {
			dom: dom_obj,
			markers: coords.markers,
			geocoder_request: false,
			opt: {
				zoom: coords.zoom,
				center: null,
				scrollwheel: false,
				scaleControl: false,
				disableDefaultUI: false,
				panControl: true,
				zoomControl: true, //zoom
				mapTypeControl: false,
				streetViewControl: false,
				overviewMapControl: false,
				styles: N7_GOLF_CLUB_STORAGE['googlemap_styles'][coords.style ? coords.style : 'default'],
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		};
		
		n7_golf_club_googlemap_create(id);

	} catch (e) {
		
		dcl(N7_GOLF_CLUB_STORAGE['strings']['googlemap_not_avail']);

	};
}

function n7_golf_club_googlemap_create(id) {
	"use strict";

	// Create map
	N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].map = new google.maps.Map(N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].dom, N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].opt);

	// Add markers
	for (var i in N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers)
		N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].inited = false;
	n7_golf_club_googlemap_add_markers(id);
	
	// Add resize listener
	jQuery(window).resize(function() {
		if (N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].map)
			N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].map.setCenter(N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].opt.center);
	});
}

function n7_golf_club_googlemap_add_markers(id) {
	"use strict";
	for (var i in N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers) {
		
		if (N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].inited) continue;
		
		if (N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].latlng == '') {
			
			if (N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].geocoder_request!==false) continue;
			
			if (N7_GOLF_CLUB_STORAGE['googlemap_init_obj'].geocoder == '') N7_GOLF_CLUB_STORAGE['googlemap_init_obj'].geocoder = new google.maps.Geocoder();
			N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].geocoder_request = i;
			N7_GOLF_CLUB_STORAGE['googlemap_init_obj'].geocoder.geocode({address: N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].address}, function(results, status) {
				"use strict";
				if (status == google.maps.GeocoderStatus.OK) {
					var idx = N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].geocoder_request;
					if (results[0].geometry.location.lat && results[0].geometry.location.lng) {
						N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[idx].latlng = '' + results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng();
					} else {
						N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[idx].latlng = results[0].geometry.location.toString().replace(/\(\)/g, '');
					}
					N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].geocoder_request = false;
					setTimeout(function() { 
						n7_golf_club_googlemap_add_markers(id); 
						}, 200);
				} else
					dcl(N7_GOLF_CLUB_STORAGE['strings']['geocode_error'] + ' ' + status);
			});
		
		} else {
			
			// Prepare marker object
			var latlngStr = N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].latlng.split(',');
			var markerInit = {
				map: N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].map,
				position: new google.maps.LatLng(latlngStr[0], latlngStr[1]),
				clickable: N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].description!=''
			};
			if (N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].point) markerInit.icon = N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].point;
			if (N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].title) markerInit.title = N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].title;
			N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].marker = new google.maps.Marker(markerInit);
			
			// Set Map center
			if (N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].opt.center == null) {
				N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].opt.center = markerInit.position;
				N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].map.setCenter(N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].opt.center);				
			}
			
			// Add description window
			if (N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].description!='') {
				N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].infowindow = new google.maps.InfoWindow({
					content: N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].description
				});
				google.maps.event.addListener(N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].marker, "click", function(e) {
					var latlng = e.latLng.toString().replace("(", '').replace(")", "").replace(" ", "");
					for (var i in N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers) {
						if (latlng == N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].latlng) {
							N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].infowindow.open(
								N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].map,
								N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].marker
							);
							break;
						}
					}
				});
			}
			
			N7_GOLF_CLUB_STORAGE['googlemap_init_obj'][id].markers[i].inited = true;
		}
	}
}

function n7_golf_club_googlemap_refresh() {
	"use strict";
	for (id in N7_GOLF_CLUB_STORAGE['googlemap_init_obj']) {
		n7_golf_club_googlemap_create(id);
	}
}

function n7_golf_club_googlemap_init_styles() {
	// Init Google map
	N7_GOLF_CLUB_STORAGE['googlemap_init_obj'] = {};
	N7_GOLF_CLUB_STORAGE['googlemap_styles'] = {
		'default': []
	};
	if (window.n7_golf_club_theme_googlemap_styles!==undefined)
		N7_GOLF_CLUB_STORAGE['googlemap_styles'] = n7_golf_club_theme_googlemap_styles(N7_GOLF_CLUB_STORAGE['googlemap_styles']);
}