//Cambia segun la ip que tengas ipv4
var socket=io.connect('http://192.168.0.100:6677',{'forceNew':true});
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
	//hace un autoscroll
	divMsgs.scrollTop=divMsgs.scrollHeight;
}
//es la funcion donde se manda el mensaje al server y se agrega al array
function addMessage(e){
	let message= {
		nickname:document.getElementById('nickname').value,
		text:document.getElementById('text').value
	};
	//este oculta el nombre de usuario una vez elegido
	document.getElementById('nickname').style.display='none';
	//borra el chat de text
	document.getElementById('text').value="";
	socket.emit('add-message',message);
	return false;
}
