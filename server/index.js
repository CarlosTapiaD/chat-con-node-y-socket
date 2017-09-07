let express=require('express');
let app = express();
let server=require('http').Server(app);
let io = require('socket.io')(server);

//middleware de express vista estatica para el chat
app.use(express.static('cliente'));
//rutas
app.get('/',(req,res)=>{
	res.status(200).send('Hola mundo desde una ruta');
});
//la variable donde se almacena los chat
let  messages=[{
	id:1,
	text:'bienvenido al chat',
	nickname:'Bot -Tapia'}];

//abrir sockets
io.on('connection',(socket)=>{
	//manda la ip de la maquina que se conecto
	console.log('El nodo con IP: '+ socket.handshake.address + 'se ha conectado... ');
	//emite el mensaje al main.js para agregarlo a la vista
	socket.emit('message',messages)
	//recibe el dato de main.js y agrega el dato a la variable donde se guarda las conversaciones
	socket.on ('add-message',(data)=>{
		messages.push(data);
		io.sockets.emit('message',messages);
	})
});


server.listen(6677,()=>{
console.log('El servidor esta funcionando');
});
