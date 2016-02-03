$(document).ready(function() {
	var map, heatmap, geocoder;
	var pointArray;

	var init = function() {
		setUpEventHandlers();
		initMap();
	}

	var setUpEventHandlers = function() {
		setUpPoints();
		toggleHeatmap();
		changeGradient();
		changeRadius();
		changeOpacity();
		addAddress();
	}

	var initMap = function() {
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: {
				lat: 42.765202,
				lng: -85.782067
			},
			mapTypeId: google.maps.MapTypeId.SATELLITE
		});

		heatmap = new google.maps.visualization.HeatmapLayer({
			data: pointArray,
			map: map
		});
		geocoder = new google.maps.Geocoder();
		
		highlightOttawa();
	}

	var addAddress = function() {
		$('#submit').click(function() {
			geocodeAddress(geocoder, map);
		});
	}

	var geocodeAddress = function(geocoder, resultsMap) {
		var address = $('#address-bar').val();
		var level;
		$('#weight').val() == 'undefined' ? weight = 1 : weight = $('#weight').val();
		console.log(weight)
		geocoder.geocode({
			'address': address
		}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				console.log(results[0])
				pointArray.push({location: new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()), weight: level});
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}

	//POSSIBLE HELP https://www.youtube.com/watch?v=jlJmiFUxv6c
	//cannot get exact county boundry coords
	var highlightOttawa = function() {
		var ottawaCoords = [
			new google.maps.LatLng(42.768187, -86.211090),
			new google.maps.LatLng(42.772219, -85.792236),
			new google.maps.LatLng(42.771211, -85.782623),
			new google.maps.LatLng(43.208791, -85.783310),
			new google.maps.LatLng(43.209180, -85.904846),
			new google.maps.LatLng(43.127048, -85.904846),
			new google.maps.LatLng(43.131057, -86.278381),
			new google.maps.LatLng(43.076913, -86.250916),
			new google.maps.LatLng(43.042798, -86.237183),
			new google.maps.LatLng(43.016697, -86.228943),
			new google.maps.LatLng(42.990586, -86.226196),
			new google.maps.LatLng(42.958433, -86.228943),
			new google.maps.LatLng(42.944360, -86.226196),
			new google.maps.LatLng(42.894076, -86.215210),
			new google.maps.LatLng(42.869925, -86.217957),
			new google.maps.LatLng(42.837710, -86.217957),
			new google.maps.LatLng(42.813537, -86.212463),
			new google.maps.LatLng(42.785323, -86.212463),
			new google.maps.LatLng(42.767179, -86.220703),
			new google.maps.LatLng(42.773227, -86.215210)
		];

		var ottawaOutline = new google.maps.Polygon({
			paths: ottawaCoords,
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillOpacity: 0.35
		})
		ottawaOutline.setMap(map);
	}

	var toggleHeatmap = function() {
		$("#toggle").click(function() {
			heatmap.setMap(heatmap.getMap() ? null : map);
		})
	}

	var changeGradient = function() {
		$("#gradient").click(function() {
			var gradient = [
				'rgba(0, 255, 255, 0)',
				'rgba(0, 255, 255, 1)',
				'rgba(0, 191, 255, 1)',
				'rgba(0, 127, 255, 1)',
				'rgba(0, 63, 255, 1)',
				'rgba(0, 0, 255, 1)',
				'rgba(0, 0, 223, 1)',
				'rgba(0, 0, 191, 1)',
				'rgba(0, 0, 159, 1)',
				'rgba(0, 0, 127, 1)',
				'rgba(63, 0, 91, 1)',
				'rgba(127, 0, 63, 1)',
				'rgba(191, 0, 31, 1)',
				'rgba(255, 0, 0, 1)'
			]
			heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
		})
	}

	var changeRadius = function() {
		$("#radius").click(function() {
			heatmap.set('radius', heatmap.get('radius') ? null : 20);
		})
	}

	var changeOpacity = function() {
		$("#opacity").click(function() {
			heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
		})
	}


	//http://www.latlong.net/convert-address-to-lat-long.html
	var setUpPoints = function() {
		pointArray = new google.maps.MVCArray([{
				location: new google.maps.LatLng(42.935513, -86.154785),
				weight: 10
			}, {
				location: new google.maps.LatLng(42.935513, -86.154785),
				weight: 10
			}, {
				location: new google.maps.LatLng(42.935513, -86.154785),
				weight: 10
			}, {
				location: new google.maps.LatLng(42.935513, -86.154785),
				weight: 10
			}, {
				location: new google.maps.LatLng(42.935513, -86.154785),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			}, {
				location: new google.maps.LatLng(43.075709, -86.189117),
				weight: 10
			},
			new google.maps.LatLng(42.935513, -86.154785),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(25.703620, -80.30573),
			new google.maps.LatLng(25.703480, -80.305589),
			new google.maps.LatLng(25.703611, -80.305886),
			new google.maps.LatLng(42.972420, -85.952375),
			new google.maps.LatLng(42.974901, -85.911155),
			new google.maps.LatLng(37.783100, -122.441461),
			new google.maps.LatLng(37.783206, -122.440829),
			new google.maps.LatLng(37.783273, -122.440324),
			new google.maps.LatLng(37.783316, -122.440023),
			new google.maps.LatLng(37.783357, -122.439794)
		])
	}

	init();
})