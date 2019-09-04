(() => {

	//Global Variable Assigning
	var mPropertyId;
	var mRoomType;

	var amenitiesUiMap = {

		"AirConditioning": {
			"img": "<i class=\"fas fa-snowflake\"></i>",
			"name": "Air Conditioning"
		},
		"AirportTransfer": {
			"img": "<i class=\"fa fa-plane\" aria-hidden=\"true\"></i>",
			"name": "Airport Transfer"
		},
		"Balcony": {
			"img": "<i class=\"fas fa-dungeon\"></i>",
			"name": "Balcony"
		},
		"Bathtub": {
			"img": "<i class=\"fa fa-bath\" aria-hidden=\"true\"></i>",
			"name": "Bathtub"
		},
		"BusinessFriendly": {
			"img": "<i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>",
			"name": "Business Friendly"
		},
		"CarPark": {
			"img": "<i class=\"fa fa-car\" aria-hidden=\"true\"></i>",
			"name": "Car Park"
		},
		"CoffeeMaker": {
			"img": "<i class=\"fa fa-coffee\" aria-hidden=\"true\"></i>",
			"name": "Coffee Maker"
		},
		"DisableFriendly": {
			"img": "<i class=\"fas fa-wheelchair\"></i>",
			"name": "Disable Friendly"
		},
		"FrontDesk": {
			"img": "<i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>",
			"name": "Front Desk"
		},
		"FullyFurnished": {
			"img": "<i class=\"fas fa-couch\"></i>",
			"name": "Fully Furnished"
		},
		"Gym": {
			"img": "<i class=\"fas fa-dumbbell\"></i>",
			"name": "Gym"
		},
		"Heating": {
			"img": "<i class=\"fas fa-water\"></i>",
			"name": "Heater"
		},
		"Internet": {
			"img": "<i class=\"fa fa-wifi\" aria-hidden=\"true\"></i>",
			"name": "WiFi"
		},
		"Kitchen": {
			"img": "<i class=\"fas fa-utensils\"></i>",
			"name": "Kitchen"
		},
		"Nightclub": {
			"img": "<i class=\"fas fa-glass-cheers\"></i>",
			"name": "Nightclub"
		},
		"NonSmoking": {
			"img": "<i class=\"fas fa-smoking-ban\"></i>",
			"name": "Non Smoking"
		},
		"PetsAllowed": {
			"img": "<i class=\"fas fa-dog\"></i>",
			"name": "Pets Allowed"
		},
		"PrivatePool": {
			"img": "<i class=\"fas fa-swimming-pool\"></i>",
			"name": "Private Pool"
		},
		"Refrigerator": {
			"img": "<i class=\"fas fa-door-closed\"></i>",
			"name": "Refrigerator"
		},
		"Restaurant": {
			"img": "<i class=\"fas fa-bread-slice\"></i>",
			"name": "Restaurant"
		},
		"Sauna": {
			"img": "<i class=\"fas fa-hot-tub\"></i>",
			"name": "Sauna"
		},
		"SemiFurnished": {
			"img": "<i class=\"fas fa-chair\"></i>",
			"name": "Semi Furnished"
		},
		"Smoking": {
			"img": "<i class=\"fas fa-smoking\"></i>",
			"name": "Smoking"
		},
		"SmokingArea": {
			"img": "<i class=\"fas fa-smoking\"></i>",
			"name": "Smoking Area"
		},
		"Spa": {
			"img": "<i class=\"fas fa-spa\"></i>",
			"name": "Spa"
		},
		"SwimmingPool": {
			"img": "<i class=\"fas fa-swimmer\"></i>",
			"name": "Swimming Pool"
		},
		"TV": {
			"img": "<i class=\"fa fa-television\" aria-hidden=\"true\"></i>",
			"name": "TV"
		},
		"Terrace": {
			"img": "<i class=\"fas fa-dungeon\"></i>",
			"name": "Terrace"
		},
		"WashingMachine": {
			"img": "<i class=\"fas fa-dumpster\"></i>",
			"name": "Washing Machine"
		}
	};

	var uiRoomType = {
		"SingleBedRoom": "Single Bed Room",
		"DoubleBedRoom": "Double Bed Room",
		"OneBHKApartment": "One BHK Apartment",
		"TwoBHKApartment": "Two BHK Apartment",
		"ThreeBHKApartment": "Three BHK Apartment",
	};

	// Do followings, on page load.
	$(document).ready(() => {

		// date picker
		$('.t-datepicker').tDatePicker({});

		// Slider
		$('#basicSlider').multislider({
			continuous: true,
			duration: 2000
		});
		$('#mixedSlider').multislider({
			duration: 750,
			interval: 3000
		});

		$('#basicSlide').multislider({
			continuous: true,
			duration: 3000
		});
		$('#mixedSlide').multislider({
			duration: 750,
			interval: 4000
		});

		// Image Lightbox
		$('#PropertyImag').simpleLightbox();
		$('#roomImageGallery').simpleLightbox();

		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-36251023-1']);
		_gaq.push(['_setDomainName', 'jqueryscript.net']);
		_gaq.push(['_trackPageview']);

		(function () {
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();

		// Get First Property ID
		Property.listProperties().done((property) => {
			mPropertyId = property[0]._id;

			// Fetch Room details
			fetchRoomType();

			// Fetch property Amenities
			fetchamenities();

			// Fetch images
			fetchimages();

		});
	});

	// Fetch available room types and show in drop-down
	function fetchRoomType() {
		var buildingType = 'Hotel';

		Meta.getRoomTypes(buildingType).done((rooms) => {

			mRoomType = rooms;

			var roomTypehtml = mRoomType.reduce((acc, cv) => {
				acc += '<option value="' + cv + '">' + uiRoomType[cv] + '</option>';
				return acc;
			}, '');
			$("#roomType").html(roomTypehtml);
		});
	}

	// Fetch property amenities
	function fetchamenities() {

		Property.getProperty(mPropertyId).done((property) => {

			var propertyAmenitiesHtml = '';
			var propertyAmenities = property.amenities;
			for (amenitiesIndex in propertyAmenities) {
				propertyAmenitiesHtml += '<div class="col-lg-4 col-md-4">' +
					'<p class="icon-hover">' + amenitiesUiMap[propertyAmenities[amenitiesIndex]].img + ' ' + amenitiesUiMap[propertyAmenities[amenitiesIndex]].name + '</p>' +
					'</div>';
				$("#AmenitiesData").html(propertyAmenitiesHtml);

			}
		});

	}
	// Fetch Iamges
	function fetchimages() {

		Property.getProperty(mPropertyId).done((property) => {

			// Fetch address in navigation
			$('#PropertyAddress').html('<li>' + property.address.line1 + '<br>' + property.address.line2 + '<br>' +
				'<span class="contact">Phone no: +91 ' + property.phonenumber1 + '</span>' +
				'</li>');

			// fetch search bar propertyname
			$('#propertyname').html(property.name);

			//fetch Property Images
			var propImage = property.images;
			var imageUrls = propImage.map(image => 'http://192.168.1.211:3000/facility' + image.url);
			var thumbnailHtml = '';
			for (propertyindex in propImage) {

				thumbnailHtml +=
					'<a href="' + imageUrls[propertyindex] + '" rel="lightbox">' +
					'<div class="item">' +
					'<div class="imgTitle">' +
					'<h2 class="blogTitle">' + propImage[propertyindex].description + '</h2>' +
					'<img id="propertyimages" src="' + imageUrls[propertyindex] + '" alt="" />' +
					'</div>' +
					'</div>' +
					'</a>';
			}
			$('#PropertyImag').html(thumbnailHtml);

			//fetch Room Images
			var propRoomImage = property.rooms;
			var roomthumbnailHtml = '';
			for (roomIndex in propRoomImage) {
				var propRoom = property.rooms[roomIndex].images;
				var roomimageUrls = propRoom.map(image => 'http://192.168.1.211:3000/facility/room' + image.url);
				for (roomimageIndex in propRoom) {
					roomthumbnailHtml +=
						'<a href="' + roomimageUrls[roomimageIndex] + '" rel="lightbox">' +
						'<div class="item">' +
						'<div class="imgTitle">' +
						'<h2 class="blogTitle">' + propRoom[roomimageIndex].description + '</h2>' +
						'<img id="propertyimages" src="' + roomimageUrls[roomimageIndex] + '" alt="" />' +
						'</div>' +
						'</div>' +
						'</a>';

					// '<div class="col-md-3">'+
					// '<img id="ig"  src=' + `data:image/jpg;base64,${propRoom[roomimageIndex].thumbnail}` + ' alt="" style="width: 100%; height: 180px;">' +
					// '</div>';
				}
			}
			$('#roomImageGallery').html(roomthumbnailHtml);

		});
	}

})();
