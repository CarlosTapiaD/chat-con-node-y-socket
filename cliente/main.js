var socket=io.connect('http://192.168.0.102:6677',{'forceNew':true});
socket.on('message',(data)=>{
	console.log(data);
	render(data);
} );
//pasar el html a la vista index 
function render(data){
	let html=data.map((message,index)=>{
		return(`
				<div class="message">
					<strong>${message.nickname}  </strong>
					<p> ${message.text}</p>
				 </div>
			`)
	}).join(' ');
	document.getElementById('messages').innerHTML=html;
}
function addMessage(e){
	let message= {
		nickname:document.getElementById('nickname').value,
		text:document.getElementById('text').value
	};
	document.getElementById('nickname').style.display='none';
	socket.emit('add-message',message);
	return false;
}