var socket=io.connect('http://192.168.1.69:6677',{'forceNew':true});
socket.on('message',(data)=>{
	console.log(data);
} );