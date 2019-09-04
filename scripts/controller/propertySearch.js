(() => {

	//Global Variable Assigning
	var mPropertyId;
	var mRoomType;

	var uiRoomType = {
		"SingleBedRoom": "Single Bed Room",
		"DoubleBedRoom": "Double Bed Room",
		"OneBHKApartment": "One BHK Apartment",
		"TwoBHKApartment": "Two BHK Apartment",
		"ThreeBHKApartment": "Three BHK Apartment",
	};

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

	// Do followings, on page load.
	$(document).ready(() => {

		// Date Picker
		$('.t-datepicker').tDatePicker({});

		// Based on Screen size
		jQuery(document).ready(function ($) {
			var alterClass = function () {
				var ww = document.body.clientWidth;
				if (ww <= 1200) {
					$('.PropertySearchResult').addClass('container-fluid');
					$('.PropertySearchResult').removeClass('container');
					$('#LeftNavFilter').addClass('col-lg-2 col-md-2');
					$('#rightpropertySearch').addClass('col-lg-10 col-md-10');
					$('#LeftNavFilter').removeClass('col-lg-3 col-md-3');
					$('#rightpropertySearch').removeClass('col-lg-9 col-md-9');
				} 
				else if (ww >= 1200) {
					$('.PropertySearchResult').addClass('container');
					$('.PropertySearchResult').removeClass('container-fluid');
					$('#LeftNavFilter').addClass('col-lg-3 col-md-3');
					$('#rightpropertySearch').addClass('col-lg-9 col-md-9');
					$('#LeftNavFilter').removeClass('col-lg-2 col-md-2');
					$('#rightpropertySearch').removeClass('col-lg-10 col-md-10');
					
				};
				if (ww <= 1035) {
					
					$('#rightpropertySearch').addClass('col-lg-12 col-md-12');
					$('#rightpropertySearch').removeClass('col-lg-10 col-md-10');
				}
			};
			$(window).resize(function () {
				alterClass();
			});
			//Fire it when the page first loads:
			alterClass();
		});

		// Image Light Box
		$('#roomThumbnailfetch').simpleLightbox();

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

		// Get First Property Id
		Property.listProperties().done((property) => {
			mPropertyId = property[0]._id;

			// Fetch Room details
			fetchRoomType();

			// Fetch property Amenities
			fetchamenities();

			// Fetch images
			fetchimages();

			// Fetch Nearby Places
			fetchNearbyPlaces();

			// Fetch Room Details
			fetchRoomDetails();

			// Nav Fixed on scrool
			// window.onscroll = function () {
			// myFunction()
			// };

			// var header = document.getElementById("fixednav");
			// var sticky = header.offsetTop;

			// function myFunction() {
			// if (window.pageYOffset > sticky) {
			// header.classList.add("sticky");
			// } else {
			// header.classList.remove("sticky");
			// }
			// }
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
			var propertyAmenitieslength = property.amenities.length;
			var propertyAmenities = property.amenities;

			for (i = 0; i <= propertyAmenitieslength - 1; i++) {
				propertyAmenitiesHtml += '<div class="col-lg-2 col-md-4 col-sm-6 col-">' +
				'<p class="icon-hover">' + amenitiesUiMap[propertyAmenities[i]].img + ' ' + amenitiesUiMap[propertyAmenities[i]].name + '</p>' +
				'</div>';

				// '<span   style="font-size:13px;padding:5px;">' + amenities[amenityIndex].img + ' ' + amenities[amenityIndex].name + '</span>';


				$("#AmenitiesData").html(propertyAmenitiesHtml);

			}

		});

	}
	// Fetch Iamges
	function fetchimages() {

		Property.getProperty(mPropertyId).done((property) => {
			createpropertyEntry(property);
		});
	}

	//Fetch Property images, name, and address.

	function createpropertyEntry(propertydata) {

		// Fetch address in navigation
		$('#PropertyAddress').html('<li>' + propertydata.address.line1 + '<br>' + propertydata.address.line2 + '<br>' +
			'<span class="contact">Phone no: +91 ' + propertydata.phonenumber1 + '</span>' +
			'</li>');

		// fetch search bar propertyname
		$('#propertyname').html(propertydata.name);

		var propImage = propertydata.images;
		var imageUrls = propImage.map(image => 'http://192.168.1.211:3000/facility' + image.url);

		// fetch Property first images
		var propertyfirstimageHtml =
			'<img  src=\"' + imageUrls[0] + '\" alt="test" height="350px" width="100%" id="sameheight">' +
			'<div class="carousel-caption">' +
			'<div class="row">' +
			'<div class="col-md-12" style="background: rgba(0, 0, 0, 0.5);border-radius:5px;padding:5px;">' +
			'<ul id="list-line-height" style="list-style-type:none; margin: 0;padding: 0;overflow: hidden;text-align:left;">' +
			'<li style="float: left;display: block;padding-right:20px;">' +
			'<p style="border-radius: 3px;background-color:#f05700;padding: 2px 10px;color:#fff;">Exceptional price for this location</p>' +
			'</li>' +
			'<li style="float: left;display: block;">' +
			'<p style="border-radius: 3px;background-color:green;padding: 2px 10px;color:#fff;">Free Wi-fi</p>' +
			'</li>' +
			'</ul>' +
			'<ul id="list-line-height" style="list-style-type:none; margin: 0;padding: 0;overflow: hidden;text-align:left;">' +
			'<li style="display: inline-block;padding-right:20px;">' +
			'<p style="color:#fff;font-size: 16px;">' +
			'<i class="fab fa-pagelines fa-flip-horizontal"></i> <b>Favorite choice for travelers!</b> <i class="fab fa-pagelines"></i>' +
			'</p>' +
			'</li>' +
			'<li style="display: inline-block;">' +
			'<p style="color:#fff;font-size: 22px;"><b>' + propertydata.name + '</b> <i class="fas fa-star"></i> <i class="fas fa-star"></i> ' +
			'<i class="fas fa-star"></i> <i class="fas fa-star"></i>' +
			'</p>' +
			'</li>' +
			'</ul>' +
			'<p id="list-line-height" style="color:#fff;text-align:left;margin-bottom:0;">' + propertydata.address.line1 + ', ' + propertydata.address.line2 + '</p>' +
			'</div>' +
			'</div>' +

			'</div>';

		$('#propertyFirstImage').html(propertyfirstimageHtml);

		// fetch Property Second images
		var propertySecondImageHtml =
			'<img  src=\"' + imageUrls[1] + '\" alt="test" height="350px" width="100%" id="sameheight">';
		// '<div class="carousel-caption">' +
		// '<div class="row">' +
		// '<div class="col-md-3 col-sm-3" style="background: #fff;padding:0;width:92px;">' +
		// '<div id="price" style="color:#000;font-size:14px;text-align:center;" >' +
		// '<span style="float:right;margin-right:10px;">from</span>' +
		// '<p style="color:#EE595D;font-size:18px;margin-bottom:0px;"><b>Rs.1,814</b></p>' +
		// '</div>' +
		// '</div>' +
		// '<div class="col-md-3 col-sm-3" style="background:#ee595d;padding:0px;width:92px;">' +
		// '<div id="discount" style="color:white;font-size:14px;text-align:center;">' +
		// '<span style="font-size:18px;"><b>21%</b></span>' +
		// '<p style="margin-bottom:0px;">Discount</p>' +
		// '</div>' +
		// '</div>' +
		// '</div>' +
		// '</div>';

		$('#propertySecondImage').html(propertySecondImageHtml);

		//fetch Room Thumbnail Images
		var propRoomImage = propertydata.rooms;
		var roomthumbnailHtml = '';
		for (roomindex in propRoomImage) {
			var propRoom = propertydata.rooms[roomindex].images;
			var imageUrls = propRoom.map(image => 'http://192.168.1.211:3000/facility/room' + image.url);
			var propImage = propertydata.images;

			for (roomImage in propRoom) {
				roomthumbnailHtml +=
				'<div class="col-md-2">' +
				'<a href="' + imageUrls[roomImage] + '" rel="lightbox">' +
				'<img src=' + `data:image/jpg;base64,${propRoom[roomImage].thumbnail}` + ' id="smallimage"  class="img-responsive">' +
				'</a>' +
				// '<img src=' + `data:image/jpg;base64,${propRoom[roomImage].thumbnail}` + ' alt="test" id="smallimage" style="width: 150px; height: 90px;"  >' +

				'</div>';

			}
		}
		$('#roomThumbnailfetch').html(roomthumbnailHtml);

	}

	// Fetch Nearby
	function fetchNearbyPlaces() {

		Property.getProperty(mPropertyId).done((property) => {

			var propetyNearbyHtml = '';
			var propertyNearby = property.nearby;
			propertyNearby.sort(function (a, b) {
				return a.distanceinmeters - b.distanceinmeters;
			});

			for (x in propertyNearby) {

				propetyNearbyHtml +=
				'<tr>' +
				'<td>' + propertyNearby[x].name + '</td>' +
				'<td>' + propertyNearby[x].distanceinmeters + ' m</td>' +
				'</tr>';
			}

			$('#NearbyFetch').html(propetyNearbyHtml);

		});

	}

	// Fetch Room
	function fetchRoomDetails() {

		Property.getProperty(mPropertyId).done((property) => {
			var propetyRoomHtml = '';
			var propertyroom = property.rooms;

			for (roomIndex in property.rooms) {
				propetyRoomHtml += createRoomEntry(property.rooms[roomIndex]);
			}
			$('#roomTable').html(propetyRoomHtml);

		});
	}

	function createImageWidget(images) {
		var imageUrls = images.map(image => 'http://192.168.1.211:3000/facility/room' + image.url);
		var html = '<div class="col-lg-12 col-md-12">' +
			'<img id="myImg"  src=\"' + imageUrls[0] + '\" alt="" style="width:100%;height: auto;">' +
			'<div class="row no-gutters">' +
			'<div class="col-lg-6 col-md-6 col-sm-6">' +
			'<div class="img-container">' +
			'<img class="img-to-fit"  src=\"' + imageUrls[1] + '\" />' +
			'</div>' +
			'</div>' +
			'<div class="col-lg-6 col-md-6 col-sm-6">' +
			'<div class="img-container">' +
			'<img class="img-to-fit" src=\"' + imageUrls[2] + '\" />' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div><hr>' +
			'</div>';

		return html;
	}

	function creationRoomWidgetHeader(roomName) {
		var html = '<div class="col-xl-12 col-lg-12 col-md-12 bg-light"  style="overflow:hidden;clear:both;border:1px solid #CFCDCE;border-radius:10px;padding:10px;background:#E5E5E5;margin-bottom:20px;">' +
			'<div class="row">' +
			'<div class="col-xl-2 col-lg-2 col-md-3">' +
			'<h6 class="align-middle" style="font-size: 16px;font-weight:600;">' + roomName + '</h6>' +
			'</div>' +
			'<div class="col-xl-2 col-lg-2 col-md-3">' +
			'<ul class="list-group" style="color:#000;">' +
			'<li>' +
			'<a><i class="fa fa-shower"> Shower</i></a>' +
			'</li>' +
			'<li>' +
			'<a> <i class="fa fa-ban"> Non-Smoking</i></a>' +
			'</li>' +
			'</ul>' +
			'</div>' +
			'<div class="col-xl-2 col-lg-2 col-md-3">' +
			'<ul class="list-group">' +
			'<li>' +
			'<a>  <i class="fa fa-home" aria-hidden="true"> Room Size</i></a>' +
			'</li>' +
			'<li>' +
			'<a> <i class="fa fa-building-o" aria-hidden="true"> City View</i></a>' +
			'</li>' +
			'</ul>' +
			'</div>' +
			'</div>' +
			'<div class="row" style="border:1px solid #BBBBBB;">' +
			'</div></br>' +
			'<div class="row no-gutters">' +
			'<div class="col-lg-3 col-md-3">';
		return html;
	}

	function createRoomWidgetFooter(price) {
		return '<div class="col-xl-9 col-lg-9 col-md-9">' +
		'<table class="table table-borderless" cellspacing="0" cellpadding="0">' +
		'<thead>' +
		'<tr>' +
		'<th>Benefits</th>' +
		'<th>Sleeps</th>' +
		'<th>Price Per Night</th>' +
		'<th>Rooms</th>' +
		'<th>Most Booked</th>' +
		'</tr>' +
		'</thead>' +
		'<tbody>' +
		'<tr>' +
		'<td style="width:30%;height=300px">' +
		'<div id="benefits">' +
		'<p style="font-size:14px;">Your Price Includes:</p>' +
		'<p style = "font-size:14px;">  <i class = "fa fa-check" style = " color:green;" >  </i> Free cancellation</p>' +
		'<p style = "font-size:14px;">  <i class = "fa fa-check" style = " color:green;" >  </i> Pay nothing until</p>' +
		'<p style = "font-size:14px;">  <i class = "fa fa-check" style = " color:green;" >  </i> Extra low price! (non-refundable)</p>' +
		'</div>' +
		'</td>' +
		'<td height="300">' +
		'<i class="fa fa-plus" aria-hidden="true" style="font-size:12px;float:right" ></i>' +
		'<div>' +
		'<i class="fa fa-male" style="font-size:16px;"></i></i>' +
		'<i class="fa fa-female" style="font-size:16px;"></i>' +
		'<i class="fa fa-child"style="font-size:14px;"></i>' +
		'<i class="fa fa-child"style="font-size:14px;"></i>' +
		'</div>' +
		'<h6 style = "font-size:14px;"> 2 kids under 8 years stay <span style = "color:green"> FREE! </span></h6>' +
		'</td>' +
		'<td height="300">' +
		'<div>' +
		'<span class="badge badge-danger">SAVE 21% TODAY!</span>' +
		'<span class = "badge badge-danger" >  <i class = "fa fa-tag" aria - hidden = "true">  </i> Last minute price drop!</span>' +
		'</div>' +
		'</br>' +
		'<div style="float:right">' +
		'<div>' +
		'<h5 style="font-size:17px;font-weight:600;"><s>Rs.4,843</s></h5>' +
		'<h4 style="font-size:18px;font-weight:600;color:#DC3545">Rs. ' + price + '</h4>' +
		'</div>' +
		'</div>' +
		'</td>' +
		'<td height="300">' +
		'<select class="form-control form-control-sm">' +
		'<option selected>1</option>' +
		'<option>2</option>' +
		'<option>3</option>' +
		'<option>4</option>' +
		'</select>' +
		'</td>' +
		'<td style="border-right:none; height=300px">' +
		'<div>' +
		'<span class="badge badge-warning">Lowest Price Available!</span>' +
		'</div>' +
		'</br>' +
		'<div>' +
		'<a href="RoomBooking.html"><button type="button"  class="btn btn-primary btn-lg">Book now <br>PAY LATER</br></button></a>' +
		'</div>' +
		'<div>' +
		'<span class="tooltip">RISK FREE!</br>No Cancellation fee</span>' +
		'</div>' +
		'<div>' +
		'<h6 style = "font-size:12px;"> This is a popular choice! </br>  <span style = "color:green"> Limited availability</span></h6>' +
		'</div>' +
		'</td>' +
		'</tr>' +
		'</tbody>' +
		'</table>' +
		'</div>' +
		'</div>' +
		'</div>';
	}

	// creats a single room entry
	function createRoomEntry(room) {
		var roomHtml = creationRoomWidgetHeader(room.name);
		roomHtml += createImageWidget(room.images);
		roomHtml += createRoomWidgetFooter(room.price);
		// create room HTML


		return roomHtml;
	}

})();
