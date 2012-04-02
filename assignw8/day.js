(function(window) {

	var rooms = localStorage && localStorage["roomsDesc"] ? JSON
			.parse(localStorage["roomsDesc"]) : {
		list : []
	};
	var html = "";
	function renderRooms() {

		html = "";
		if (localStorage && JSON) {
			localStorage["roomsDesc"] = JSON.stringify(rooms);
		}
		var html = '<div class="rooms-building-floor">';
		for ( var count = 0; count < rooms.list.length; ++count) {
			var currDesc = rooms.list[count].desc;
			if (count % 3 == 0 && count != 0) {
				html += '<div class="rooms-building-floor-number">'
						+ Math.ceil(count / 3)
						+ '</div></div><div class="rooms-building-floor">'
			}

			html += '<div class="rooms-building-floor-room">' + currDesc
					+ '</div>';
		}
		html += '<div class="rooms-building-floor-number">'
				+ Math.ceil(count / 3) + '</div></div>';
		$('.rooms-building').html(html);
	}

	$(window.document).ready(function() {
		renderRooms();
		$(".rooms-header-addbutton").click(function() {
			var desc = $('.rooms-header-add-desc')[0].value
			rooms.list.push({
				desc : desc
			});
			renderRooms();
		})
	});

	

	window.addRoom = function(roomDesc){
		if (localStorage && JSON) {
		rooms.list.push({
			desc : roomDesc
		});
		renderRooms();
		
		}
	}
	window.getRandomRoomDesc = function(){
		if (rooms.list.length > 0) {
			return rooms.list[Math.floor(Math.random()*rooms.list.length)].desc.replace("'","&apos;");
		}
	}
	
	
})(window);
