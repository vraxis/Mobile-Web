(function(window) {
	
	
	
	
	
	/**
	 * Main driver object 
	 * @param {Object} options
	 * 
	 * 
	 * @config renderTo String selector
	 */
	window.myDay = function(options) {
		var config = options || {};
		
		var renderTo = config.renderTo || window.document.body;
		
		var beginTheDay = function() {
			$(renderTo).html("Today is...<div id='addRoom'></div>");
			this.addRoom.beginRoomAdding();
		};
		
		/**
		 * As a user I want to add a room. A room has a description. Once added put it 
		 * on the page
		 */
		var AddRoom = function(){
			var state = {
				addButtonClicked: false,
				rooms: [
				{description:"Room 1"},
				{description:"Room 2"}
				]	
			};
			
			this.promptForRoom = function(){
				var roomHtml = "";
				roomHtml += "Add Description:<input name='roomDesc' type='text'></input>url for room image:<input name='url' type='text'></input><button class='room-addbutton'>Add Room</button>";
				$("#addRoom").html($("#addRoom").html()+roomHtml);
			};
			
			this.renderRooms = function(){
				var roomHtml = "";
				for(room in state.rooms){
					roomHtml += '<div class="room">'+state.rooms[room].description+'</div>';
				}
				$("#addRoom").html(roomHtml);
			}
			
			this.beginRoomAdding = function() {
				//loop here
				this.renderRooms();
				this.promptForRoom();
			}
			
		}
			
		return  {
			beginTheDay: beginTheDay,
			addRoom: new AddRoom()
		}
	}
	
	
	
	
	
	
	
	
	
	
	$(window.document).ready(function(){
		var day = myDay({
			renderTo: ".addrooms"
		});
		
		day.beginTheDay();
	}) 
	

	
	
})(window);
