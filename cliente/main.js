var socket=io.connect('http://192.168.1.69:6677',{'forceNew':true});
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
	var divMsgs=document.getElementById('messages');
	divMsgs.innerHTML=html;
	divMsgs.scrollTop=divMsgs.scrollHeight;
}
function addMessage(e){
	let message= {
		nickname:document.getElementById('nickname').value,
		text:document.getElementById('text').value
	};
	document.getElementById('nickname').style.display='none';
	document.getElementById('text').value="";
	socket.emit('add-message',message);
	return false;
}
