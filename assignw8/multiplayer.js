(function(){
	
	$(window.document).ready(function() {
	
	   var socket = new EasyWebSocket("ws://verdantsandbox.com/a8");
	    var me = Math.random();
	    
	    window.sendRoomDesc = function(desc){
	    	if(socket) {
	    		socket.send('{"sender":'+me+',"room":"'+desc+'"}')
	    	}
	    };
	    
	    socket.onopen = function(){
	    	sendRoomDesc(getRandomRoomDesc());
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