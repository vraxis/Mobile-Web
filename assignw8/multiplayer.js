(function(){
	
	$(window.document).ready(function() {
	
	   var socket = new EasyWebSocket("ws://verdantsandbox.com/a8");
	    var me = Math.random(1000000);
	    
	    socket.onopen = function(){
		socket.send("{sender:"+me+",room:'"+getRandomRoomDesc()+"'}")
	    }
	    socket.onmessage = function(event){
	    if(JSON) {
	    	var message = JSON.parse(event.data);
	    	if(message.sender && message.sender != me) {
	    		addRoom(message.room);
	    	}
	    }	
	    	
	    }
	});
})()